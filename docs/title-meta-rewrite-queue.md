# Claude Code Task: Title/Meta Rewrite Queue — Top Immigration Pages

**Goal:** Rewrite `<title>` and `<meta name="description">` on the top ~15–20 immigration pages by impression, so each is optimized for the queries it *actually* ranks for (pulled from GSC), not guesses. This is the content-optimization phase — the technical foundation is already fixed and proven (clicks have ~doubled since the project started).

**Why now:** GSC (June 19) shows clicks 72→135 (+88%), position improving (11.6→10.7) while reach expands. The pages are surfacing for the right queries but many sit at position 8–15. Better SERP titles/descriptions are the highest-leverage way to convert existing impressions into clicks without waiting for ranking gains.

**Key principle:** Every rewrite must be driven by the page's REAL ranking queries from GSC, not assumptions. The workflow below front-loads data collection per page.

---

## Important context about this site

- Static HTML on GitHub Pages, 4 languages (en, fr, ru, he). Canonical URL form is `.html` (established in prior work).
- Multilingual content is the site's competitive edge and its fastest-growing segment — FR/HE/RU immigration pages are outperforming. Treat non-English rewrites as first-class, not afterthoughts. BUT do not machine-translate marketing copy — for non-EN pages, draft the rewrite and leave a TODO for Svetlana to refine, OR rewrite only if the existing translated title is clearly broken/generic.
- `<head>` tags are hand-written per file (no shared layout/includes).
- Do NOT touch: noindex tags, canonical tags, hreflang, sitemap, page body content. This task is scoped to `<title>` and `<meta name="description">` ONLY.

---

## Step 1 — Pull the target page list from GSC

The user will provide GSC data (or Claude Code works from an export). Identify the top 15–20 pages by impressions over the last 28 days that are IMMIGRATION pages (exclude any `/about-canada/` trivia — those are intentionally noindexed).

Based on the June 19 GSC snapshot, the high-impression immigration pages include (confirm against current data):

| Page | ~Impressions | Notes |
|---|---|---|
| `/` (homepage) | 302 | Already optimized in prior work — re-check only |
| `/fr/faq.html` | 405 | High growth, verify title |
| `/blog/blog-renting-in-canada.html` | 297 | EN renting blog |
| `/he/blog/blog-renting-in-canada.html` | 190 | HE renting blog |
| `/fr/blog/blog-easiest-provinces-immigrate.html` | 219 | FR easiest-provinces |
| `/blog/blog-increase-crs-score.html` | (high) | CRS content — strong query magnet |
| `/ru/blog/blog-express-entry-2026.html` | (high) | RU Express Entry |
| `/ru/blog/blog-ukraine-status-extension-2027.html` | 63 | RU Ukraine status — growing |
| `/ru/temporary-closed-work-permit.html` | 31 | RU work permit |
| `/pathway-express-entry.html` | — | Core pathway |
| `/pathway-pnp.html` | — | Core pathway |
| `/immigration-consultant-richmond-hill.html` | — | Local page |
| ... | | pull the rest from current GSC |

**Action:** Ask the user to either (a) export the GSC Pages report (last 28 days) as CSV and provide it, or (b) screenshot the top 20 pages. Then finalize the target list. Prioritize pages with **high impressions + low CTR + position 5–15** — those have the most upside from a better snippet.

## Step 2 — For EACH target page, pull its actual ranking queries

This is the critical step that makes rewrites data-driven instead of guesswork. For each page, get the queries it ranks for:

**In GSC:** Performance → Pages tab → click the specific page → switch to Queries tab. This shows the exact queries driving impressions to THAT page.

The user will need to do this lookup per page (or export). For each page, capture the top 5–10 queries by impression, plus each query's position.

Record per page:
```
Page: /blog/blog-increase-crs-score.html
Top queries:
  - "how to increase crs score" — 120 impr, pos 8.2
  - "improve express entry score 2026" — 80 impr, pos 11.5
  - "crs score boost" — 45 impr, pos 6.1
Current title: [read from file]
Current meta: [read from file]
```

If pulling per-page queries for 20 pages is too much manual work, fall back to: use the site-wide top queries list and map each query to its most likely page by topic. Less precise but workable.

## Step 3 — Read current title/meta from each file

```bash
# For each target page, extract current title and meta description
for f in [list of target .html files]; do
  echo "=== $f ==="
  grep -iE '<title>|<meta name="description"' "$f"
done
```

Record the current values so the rewrite is a deliberate improvement, and so we can diff.

## Step 4 — Rewrite rules

For each page, write a new `<title>` and `<meta name="description">` following these rules:

**Title (`<title>`):**
- 50–60 characters (longer gets truncated in SERPs).
- Front-load the page's HIGHEST-impression query, as close to verbatim as reads naturally.
- Include the year (2026) when the queries contain it — signals freshness.
- End with a short brand/credibility hook: `— LANA Immigration` or `(RCIC Guide)` or `| Licensed RCIC`.
- No duplicate titles across the site.
- Example: query "how to increase crs score" at pos 8 →
  `How to Increase Your CRS Score for Express Entry 2026 — LANA Immigration`

**Meta description (`<meta name="description">`):**
- 150–160 characters.
- Include the primary query naturally.
- State a concrete, specific value (a number, a timeline, a specific benefit) — specificity beats abstraction. "FSW takes ~6 months; PNP 12–18" beats "learn about timelines."
- End with a soft CTA: "Book a free consultation with a licensed RCIC." or "Get a free eligibility assessment."
- Must accurately describe the page (no clickbait — mismatched snippets hurt rankings).

**Language handling:**
- **EN pages:** rewrite fully per rules above.
- **FR/RU/HE pages:** if the current translated title is broken, generic, or clearly weak, draft an improved version BUT insert it as an HTML comment TODO above the existing tag for Svetlana to approve/refine — do NOT replace good translated copy with machine translation. If the current translated title is already decent, leave it and note "OK — no change."
- The exception: if a non-EN title still shows any encoding artifacts or English placeholder text, fix it directly (that's a bug, not a style choice).

## Step 5 — Apply edits

Edit `<title>` and `<meta name="description">` in each target file. Nothing else.

After each edit, confirm the file still has exactly one `<title>` and one meta description (no accidental duplication).

## Step 6 — Verification

```bash
# No duplicate titles across the whole site
grep -rh "<title>" --include="*.html" . | sed 's/^[[:space:]]*//' | sort | uniq -d
# Expect: no output

# Every target page has exactly one title and one meta description
for f in [target files]; do
  t=$(grep -c "<title>" "$f")
  m=$(grep -c '<meta name="description"' "$f")
  [ "$t" = "1" ] && [ "$m" = "1" ] || echo "WARN $f: title=$t meta=$m"
done

# Title length check — flag any over 60 chars
for f in [target files]; do
  title=$(grep -oE '<title>[^<]*</title>' "$f" | sed 's/<[^>]*>//g')
  len=${#title}
  [ "$len" -gt 60 ] && echo "LONG ($len): $f — $title"
done

# Meta length check — flag any over 165 chars
for f in [target files]; do
  desc=$(grep -oE '<meta name="description" content="[^"]*"' "$f" | sed 's/.*content="//;s/"$//')
  len=${#desc}
  [ "$len" -gt 165 ] && echo "LONG META ($len): $f"
done

# Confirm no untouched scope: noindex/canonical/hreflang unchanged
# (spot-check a couple files that they still have their canonical + hreflang intact)
```

## Step 7 — Report and commit

Report a table: each page, old title → new title, old meta → new meta, and the query it was optimized for. Flag any non-EN pages left as TODO for Svetlana.

Commit as one PR: `"Rewrite titles/meta on top 20 immigration pages (query-driven SERP optimization)"`.

## Step 8 — Post-deploy GSC actions

1. URL Inspection → "Request Indexing" on the 8–10 highest-impression rewritten pages (GSC throttles ~10/day, so prioritize the biggest).
2. Set a 21-day reminder. Then compare: CTR on the rewritten pages should rise (the whole point). Clicks should grow even if position is flat — that's the signal a better snippet is working.

---

## What success looks like

The pages already get impressions — people see them in results. A better title/description converts more of those existing impressions into clicks, independent of ranking movement. Target: measurable CTR lift on the rewritten pages within 3–4 weeks, and continued total-clicks growth.

## Scope discipline (recap)

- ONLY `<title>` and `<meta name="description">`.
- Do NOT touch body content, noindex, canonical, hreflang, sitemap.
- Do NOT machine-translate — non-EN gets TODO comments unless fixing an outright bug.
- Every rewrite justified by a real GSC query, not a guess.
