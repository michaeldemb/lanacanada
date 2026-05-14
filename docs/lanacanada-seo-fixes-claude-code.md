# SEO Fix Instructions for lanacanada.com — Priorities 1 & 2 (GitHub Pages)

**Hosting:** GitHub Pages. This significantly affects Tasks 1a and 1c — GH Pages has no server-side redirects, so we rely on canonical signals to consolidate duplicates rather than 301s. Tasks 1b and 2 are unchanged.

**Site facts (from GSC + on-page inspection on 2026-05-14):**
- Static site on GitHub Pages, 4 languages (en, fr, he, ru), 67 pages per language = 268 URLs in sitemap.
- 391 queries pull impressions; Average Position 9.5, CTR 1.2%.
- 673 of 834 discovered URLs are not indexed.

Work through tasks in order. Each task should be a separate commit/PR so impact is attributable in GSC.

---

## Task 0 — Discovery (Run First, Report Back)

GitHub Pages adds specific things to check. Investigate the codebase and report:

1. **Jekyll status.** Does the repo have a `.nojekyll` file at root? If yes, Jekyll is disabled and the site is served as raw static files. If no, Jekyll processes the site.
2. **Jekyll config (if Jekyll is active).** Open `_config.yml`. Note: `permalink` setting, `plugins:` list, `markdown` engine, and whether `jekyll-redirect-from` is already installed.
3. **`Gemfile` and `Gemfile.lock`** if present. Which plugins are pinned?
4. **GitHub Pages deployment.** Two paths:
   - Branch-based deploy: settings → Pages → "Deploy from a branch" (which branch, which folder).
   - Custom workflow: look in `.github/workflows/` for an action that builds and deploys.
5. **Repository file structure.** List the root directory. Does `how-immigration-works.html` exist as a file? Does `how-immigration-works/index.html` also exist? **This is the key question** — it determines why both `/how-immigration-works` and `/how-immigration-works.html` currently return 200.
6. **`CNAME` file.** Confirms the custom domain is `www.lanacanada.com`.
7. **Templates.** Where are `<title>`, `<meta description>`, `<link rel="canonical">`, and `<link rel="alternate" hreflang>` defined? In each `.html` file individually, or in a shared layout/include (Jekyll `_layouts/`, `_includes/`)?
8. **Translation source.** How are RU/HE/FR pages generated? Look for translation JSON/YAML files, a Jekyll `data:` directory, or hand-maintained parallel directories.
9. **Git state.** Clean working tree? Current branch? Default branch?

Output a short summary covering all 9 items. Then proceed to Task 1b.

---

## Task 1b — Fix Double-Encoded Titles and Meta Descriptions (Ship First, Unchanged from Original)

### Problem

Russian, Hebrew, and French page titles and meta descriptions have non-Latin characters double-encoded. Confirmed example from `https://www.lanacanada.com/ru/blog/blog-express-entry-2026.html`:

```html
<title>Express Entry &amp;#1050;&amp;#1072;&amp;#1085;&amp;#1072;&amp;#1076;&amp;#1072; 2026: ... &mdash; LANA Immigration</title>
<meta name="description" content="&amp;#1045;&amp;#1089;&amp;#1083;&amp;#1080; ...">
```

The Cyrillic `К` was encoded as `&#1050;`, then the `&` was re-encoded to `&amp;`. Browsers parse `&amp;#1050;` as the literal string `&#1050;` (not the character `К`). Google shows literal entity codes in the SERP. **This is why Russian/Hebrew pages with positions 3–5 get near-zero clicks.**

### Investigation

```bash
# Find where entity codes live
grep -rln "&#1050;" --include="*.json" --include="*.yaml" --include="*.yml" --include="*.html" --include="*.md" --include="*.txt" .
grep -rln "&amp;#" --include="*.html" .

# Check Jekyll _data and _i18n directories specifically
ls -la _data/ _i18n/ _locales/ 2>/dev/null
```

Two possible root causes:

**Cause A — translation source files contain HTML entities, and the template engine HTML-escapes on render.** Common on Jekyll if translation data uses `&#NNNN;` and templates use `{{ var | escape }}` or auto-escaping is on.

**Fix A:** Decode entities in source files to raw UTF-8. One-time script:

```bash
# Adapt the file paths to actual translation file locations
python3 -c "
import json, html
paths = ['_data/translations/ru.json', '_data/translations/he.json', '_data/translations/fr.json']
for path in paths:
    try:
        with open(path, 'r', encoding='utf-8') as f: data = json.load(f)
        def walk(o):
            if isinstance(o, dict): return {k: walk(v) for k,v in o.items()}
            if isinstance(o, list): return [walk(v) for v in o]
            if isinstance(o, str): return html.unescape(html.unescape(o))  # double-unescape
            return o
        with open(path, 'w', encoding='utf-8') as f: json.dump(walk(data), f, ensure_ascii=False, indent=2)
        print(f'Decoded {path}')
    except FileNotFoundError:
        print(f'Skipped {path}')
"
```

If sources are YAML, swap `json` for `yaml.safe_load` / `yaml.safe_dump(allow_unicode=True)`.

**Cause B — translation source is correct UTF-8 but the build pipeline runs HTML-escape twice.** In Jekyll, this happens if a template both does `{{ var }}` (already escapes in Jekyll 4+) and the source has `&` characters that were manually entity-encoded. Find the line in `_layouts/` or `_includes/` that emits the title/meta:

```liquid
<!-- Bad — double escapes -->
<title>{{ page.title | escape }} — LANA Immigration</title>

<!-- Good — Jekyll's default {{ }} already escapes in Jekyll 4+ -->
<title>{{ page.title }} — LANA Immigration</title>
```

Remove the explicit `| escape` filter, or use `{{ page.title | strip_html }}` if you need to strip tags from a richer source.

### Verification

```bash
# After rebuild and deploy:
curl -s https://www.lanacanada.com/ru/blog/blog-express-entry-2026.html | grep -i "<title>"
curl -s https://www.lanacanada.com/he/blog/blog-renting-in-canada.html | grep -i "<title>"
curl -s https://www.lanacanada.com/fr/blog/blog-pr-fees-increase-2026.html | grep -i "<title>"
# Each should show actual Cyrillic / Hebrew / French chars, no "&#" or "&amp;#".

# Browser tab visual check on at least 3 URLs per language across page types (homepage, content page, blog post).
```

---

## Task 1c — Fix Homepage Canonical (GitHub Pages Adjustments)

### Problem

Homepage at `https://www.lanacanada.com/` emits:

```html
<link rel="canonical" href="https://www.lanacanada.com/index.html">
```

Canonical points to `/index.html`, but hreflang for `en` points to `/`. Google has indexed both URLs separately — splitting authority across `https://www.lanacanada.com/` (131 impressions, position 4.0) and `https://lanacanada.com/index.html` (200 impressions, position 5.8).

### Implementation

GitHub Pages **cannot 301-redirect `/index.html` to `/`**. We rely on canonical + sitemap alignment to let Google consolidate.

**Step 1:** Update homepage canonical in each language root template/file.

```html
<!-- /index.html -->
<link rel="canonical" href="https://www.lanacanada.com/">

<!-- /ru/index.html -->
<link rel="canonical" href="https://www.lanacanada.com/ru/">

<!-- /he/index.html -->
<link rel="canonical" href="https://www.lanacanada.com/he/">

<!-- /fr/index.html -->
<link rel="canonical" href="https://www.lanacanada.com/fr/">
```

If canonical is generated by a Jekyll layout that defaults to `{{ site.url }}{{ page.url }}` and `page.url` is `/index.html` for the home, add a special case in the layout:

```liquid
<link rel="canonical" href="{{ site.url }}{% if page.url == '/index.html' %}/{% elsif page.url contains '/index.html' %}{{ page.url | replace: '/index.html', '/' }}{% else %}{{ page.url }}{% endif %}">
```

**Step 2:** Update `sitemap.xml`. URLs that previously listed `/index.html` should now list `/`:

```xml
<!-- BEFORE -->
<url><loc>https://www.lanacanada.com/index.html</loc></url>
<url><loc>https://www.lanacanada.com/ru/index.html</loc></url>
<url><loc>https://www.lanacanada.com/he/index.html</loc></url>
<url><loc>https://www.lanacanada.com/fr/index.html</loc></url>

<!-- AFTER -->
<url><loc>https://www.lanacanada.com/</loc></url>
<url><loc>https://www.lanacanada.com/ru/</loc></url>
<url><loc>https://www.lanacanada.com/he/</loc></url>
<url><loc>https://www.lanacanada.com/fr/</loc></url>
```

If `sitemap.xml` is auto-generated by `jekyll-sitemap`, the plugin should respect canonical URLs automatically once Step 1 is done — verify by checking the generated output.

### Verification

```bash
# Canonical check
curl -s https://www.lanacanada.com/ | grep -i 'rel="canonical"'
# Expect: <link rel="canonical" href="https://www.lanacanada.com/">

curl -s https://www.lanacanada.com/ru/ | grep -i 'rel="canonical"'
# Expect: <link rel="canonical" href="https://www.lanacanada.com/ru/">

# Sitemap check
curl -s https://www.lanacanada.com/sitemap.xml | grep "index.html"
# Expect: no matches
```

After deploy, resubmit `sitemap.xml` in Google Search Console.

---

## Task 1a — Fix Duplicate URLs (GitHub Pages Adjustments)

### Problem

Every content page is reachable at both `/page-name.html` and `/page-name` (no extension), returning 200 at both. Canonical points to `.html`, but hreflang points to non-`.html`.

### Strategy on GitHub Pages

We cannot do server-side 301 redirects. Instead, **align hreflang with canonical (both `.html`)** so Google receives a consistent signal and consolidates duplicates via canonical resolution. The duplicate URLs continue to exist physically, but Google treats the `.html` version as authoritative.

This is sufficient. Optional enhancement at the end uses `jekyll-redirect-from`.

### Investigation First

Confirm what's actually on disk and how:

```bash
# Does the repo have BOTH /how-immigration-works.html AND /how-immigration-works/index.html?
ls how-immigration-works* 2>/dev/null
ls how-immigration-works/ 2>/dev/null

# If only how-immigration-works.html exists, Jekyll or GH Pages itself is creating the extensionless URL.
# Check _config.yml for permalink setting
grep -i "permalink" _config.yml 2>/dev/null
```

Report what you find. The fix is the same either way (align hreflang to `.html`), but it informs the optional enhancement at the end.

### Implementation

**Step 1: Update hreflang to use `.html` on all content pages**

Current pattern on content pages:
```html
<link rel="alternate" hreflang="en" href="https://www.lanacanada.com/how-immigration-works">
<link rel="alternate" hreflang="fr" href="https://www.lanacanada.com/fr/how-immigration-works">
<link rel="alternate" hreflang="ru" href="https://www.lanacanada.com/ru/how-immigration-works">
<link rel="alternate" hreflang="he" href="https://www.lanacanada.com/he/how-immigration-works">
<link rel="alternate" hreflang="x-default" href="https://www.lanacanada.com/how-immigration-works">
```

Must become (with `.html`):
```html
<link rel="alternate" hreflang="en" href="https://www.lanacanada.com/how-immigration-works.html">
<link rel="alternate" hreflang="fr" href="https://www.lanacanada.com/fr/how-immigration-works.html">
<link rel="alternate" hreflang="ru" href="https://www.lanacanada.com/ru/how-immigration-works.html">
<link rel="alternate" hreflang="he" href="https://www.lanacanada.com/he/how-immigration-works.html">
<link rel="alternate" hreflang="x-default" href="https://www.lanacanada.com/how-immigration-works.html">
```

**Important:** Homepage hreflang values legitimately end in `/` (not `.html`). DO NOT add `.html` to those.

If hreflang is generated by a Jekyll layout or include, fix the helper:

```liquid
<!-- Before -->
<link rel="alternate" hreflang="en" href="{{ site.url }}{{ page.url | replace: '.html', '' }}">

<!-- After -->
<link rel="alternate" hreflang="en" href="{{ site.url }}{{ page.url }}">
```

Or look for a custom `{% include hreflang.html %}` and adjust there.

If hreflang is hand-written in each HTML file, run a repo-wide regex replace:

- **Search regex:** `(hreflang="[a-z-]+"\s+href="https://www\.lanacanada\.com/(?:[a-z]{2}/)?(?:blog/)?[a-z0-9-]+)"`
- **Replace:** `$1.html"`

This matches hreflang `href` values that DO NOT end with `/` or `.html` and appends `.html`. The homepage hreflang values (ending in `/`) are skipped naturally.

Sanity checks after replace:

```bash
# Should never see double .html
grep -rE 'hreflang.*\.html\.html' --include="*.html" .
# Expect: no results

# Homepage hreflang should still end in /
grep -E 'hreflang="en"\s+href="https://www\.lanacanada\.com/"' index.html
# Expect: match exists

# Content page hreflang should end in .html
grep -E 'hreflang="en"' how-immigration-works.html
# Expect: href ends in .html
```

**Step 2: Update internal navigation links to use `.html` consistently**

Internal links should match canonical. Find the shared nav/menu include:

```bash
ls _includes/nav* _includes/header* _includes/menu* 2>/dev/null
```

Update any link like `<a href="/how-immigration-works">` to `<a href="/how-immigration-works.html">`. This reinforces the canonical signal to Google and avoids users sharing the non-canonical URL form.

**Step 3 (Optional enhancement): Use `jekyll-redirect-from` for stronger consolidation**

If Jekyll is active and the extensionless URLs come from a Jekyll permalink setting (not duplicate files on disk), the cleanest path is to switch the permalink config back to default and let only `/page.html` be served.

In `_config.yml`:

```yaml
# Default — serves only /page.html (preferred for this site)
permalink: /:path:output_ext
```

If `permalink:` is set to something like `/:title` or `pretty`, that's the cause of the extensionless URLs. Switch it back. Verify navigation still works after the change — internal links that use bare `/page` will now 404, which is why Step 2 above must ship together with this.

If the extensionless URLs come from duplicate `/page/index.html` files on disk, delete those files (or move them to a removed/ directory for backup).

### Verification

```bash
# Hreflang on content pages → .html
curl -s https://www.lanacanada.com/how-immigration-works.html | grep hreflang
# Expect: all hrefs end in .html

# Hreflang on homepages → /
curl -s https://www.lanacanada.com/ | grep hreflang
# Expect: hrefs end in / (en, fr, ru, he)

# Internal nav
curl -s https://www.lanacanada.com/ | grep -oE 'href="[^"]+"' | grep -v "http" | head -20
# Internal hrefs should consistently use .html for content pages
```

In Google Search Console after deploy:
1. URL Inspection for 3–5 representative pages → verify Google reads the correct canonical.
2. Page Indexing report → click "Validate Fix" on "Duplicate, Google chose different canonical than user" and "Crawled — currently not indexed" categories.

---

## Task 2 — CTR Rewrites on High-Impression Underperformers (Unchanged from Original)

### Two pages to rewrite now

#### Page A — `provincial-with-job-offer.html`

GSC data: 686 impressions, 0.3% CTR, position 10.4 (the highest-impression page on the entire site, with the worst conversion).

Find the source file. Read its current `<title>`, `<meta name="description">`, and `<h1>`. Report them, then update to:

```html
<title>PNP with a Job Offer: Canada Provincial Nominee Guide 2026</title>
<meta name="description" content="How a Canadian job offer strengthens your Provincial Nominee Program application. Eligible PNP streams, employer requirements, and realistic timelines — from a licensed RCIC.">
```

Apply equivalent updates to `/ru/provincial-with-job-offer.html`, `/he/provincial-with-job-offer.html`, `/fr/provincial-with-job-offer.html`. Leave a `TODO` comment with the English version for the user to translate — marketing copy doesn't translate literally.

Confirm `<h1>` matches the title's promise. If it's generic ("Provincial Nominee Program"), update to "Provincial Nominee Program (PNP) with a Job Offer".

#### Page B — `blog/blog-fastest-immigration-programs.html`

GSC data: 354 impressions, 0.6% CTR, position 3.8 — the worst CTR-to-position mismatch on the site.

Update to:

```html
<title>Fastest Ways to Immigrate to Canada in 2026 (RCIC Guide)</title>
<meta name="description" content="Which Canadian immigration programs actually move fastest in 2026? Realistic timelines for Express Entry, PNP, AIP, and work-permit pathways — ranked by a licensed RCIC.">
```

Same translation TODO note for `/ru/`, `/he/`, `/fr/` variants.

### Then: build a SERP-rewrite work queue

After the two above ship, pull the top 30 pages by impressions from GSC. For each page with ≥50 impressions and CTR <2%:

1. Read current `<title>`, `<meta name="description">`, `<h1>`.
2. Identify top 2–3 queries the page ranks for (GSC Performance → filter by page).
3. Rewrite `<title>`: 55–60 chars, front-load the highest-impression query verbatim, end with a credibility hook ("LANA Immigration", "RCIC Guide", "by a licensed RCIC").
4. Rewrite `<meta name="description">`: 150–160 chars, include the search term + a concrete benefit/specific number + a soft CTA.
5. Ensure `<h1>` matches the title's promise.

Style rules:

- **Front-load the query.** "Express Entry CRS Score Requirements 2026" — not "LANA Immigration explains…"
- **Include year in title** when the query has a year.
- **Specificity beats abstraction.** "FSW: 6 months, PNP: 12–18 months" outperforms "Learn about timelines."
- **End with credibility.** "by a licensed RCIC" is the differentiator vs. content farms.
- **No duplicate titles:**
  ```bash
  grep -rh "<title>" --include="*.html" . | sort | uniq -d
  # Expect: no duplicates
  ```

### Verification

After deploy, in GSC:
1. URL Inspection for each rewritten page → "Request Indexing".
2. Wait 7–14 days, filter Performance report by each updated URL. Target: CTR >3% within 30 days on the two priority pages.

---

## Sequencing Recap

Commit/PR order:

1. **PR 1 — Task 1b** (double encoding). Lowest risk, biggest immediate CTR lift on multilingual pages.
2. **PR 2 — Task 1c** (homepage canonical + sitemap). Tiny change.
3. **PR 3 — Task 1a** (hreflang + internal nav alignment, optional permalink config). Repo-wide regex; review diff before committing.
4. **PR 4 — Task 2** (title/meta rewrites). Pure content.

### Post-deploy actions in GSC (after all PRs ship)

1. Resubmit `sitemap.xml`.
2. Page Indexing report → "Validate Fix" on each "Failed" reason to trigger Google's re-evaluation.
3. URL Inspection → "Request Indexing" for the top 20 pages by impressions.
4. Set a 14-day reminder to revisit GSC: Average Position should drop toward 5–7 and CTR rise toward 3%+.

---

## What Changed from the Original (Non-GH-Pages) Version

| Task | Change |
|---|---|
| Task 0 | Added Jekyll/`.nojekyll` checks and GH Pages-specific discovery items |
| Task 1a | Dropped hosting-level 301 redirects (Netlify/Vercel/Apache configs). Now: align hreflang with canonical; optionally fix Jekyll permalink |
| Task 1c | Dropped `/index.html` → `/` redirect rules. Now: canonical + sitemap alignment only |
| Task 1b | Unchanged (source-code issue, hosting-agnostic) |
| Task 2 | Unchanged (content rewrites, hosting-agnostic) |

The simplified flow trades some signal strength (no real 301s) for less surface area for breakage. Google's canonical resolution handles ~95% of what 301s would do and typically reaches steady state within 4–8 weeks of consistent signals.

---

## Reference: GSC Data Snapshot (2026-05-14)

| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| `https://www.lanacanada.com/` | 13 | 131 | 9.9% | 4.0 |
| `https://lanacanada.com/index.html` (no www, duplicate) | 11 | 200 | 5.5% | 5.8 |
| `/ru/blog/blog-express-entry-2026.html` | 4 | 181 | 2.2% | 5.6 |
| `/ru/blog/blog-minimum-crs-score-2026.html` | 4 | 165 | 2.4% | 5.9 |
| `/he/blog/blog-renting-in-canada.html` | 4 | 112 | 3.6% | 7.2 |
| `/provincial-with-job-offer` (no .html — duplicate) | 2 | 686 | 0.3% | 10.4 |
| `/blog/blog-fastest-immigration-programs.html` | 2 | 354 | 0.6% | 3.8 |

**Site totals:** 83 clicks, 7,200 impressions, 1.2% CTR, Average Position 9.5 across 391 queries.

**Indexing:** 161 indexed, 673 not indexed (270 404s, 168 discovered-not-indexed, 124 crawled-not-indexed, 61 redirects, 32 alternate canonicals, 16 duplicate canonicals, 2 noindex).
