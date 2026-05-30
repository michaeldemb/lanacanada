# SEO Phase 2: Relevance Pruning + Cleanup — Claude Code Guide

Three tasks, in priority order. Task A is the high-leverage one (fixes the average-position distortion). Tasks B and C are cleanup.

**Context from GSC (2026-05-28, 28-day data):**
- Indexed pages: 161 → **414** (the canonical/hreflang fixes worked)
- Clicks +35% (60→81), impressions +64% (5,470→8,990)
- Average position "worsened" 9.5 → 12.9 — but ONLY because query count nearly doubled (391→770) with hundreds of new low-relevance "About Canada" queries entering the average
- The `/about-canada/` directory alone accounts for ~8,990 impressions (essentially the entire site's volume) at ~position 15.8 and ~0.4% CTR
- These are off-target queries: sports, geography, climate, languages, government, history of Canada — none have immigration intent

**Strategy:** `noindex` the pure-trivia About Canada pages (keep them live for visitors, remove them from Google). Keep indexed any About Canada page that bridges into genuine immigration intent. This removes the dead weight dragging down average position and CTR, and concentrates crawl budget + authority on the immigration pages that win clients.

---

## Task A — About Canada noindex Audit (Priority — Do First)

### A0. Inventory the section

```bash
# List every page in the About Canada section
ls -la about-canada/
find . -path "*/about-canada/*" -name "*.html" | sort

# Also check the translated variants
find . -path "*/about-canada/*" -name "*.html" | sed 's|/about-canada/.*||' | sort -u
# Expect to see: ./about-canada, ./fr/about-canada, ./ru/about-canada, ./he/about-canada (or similar)

# Count them
find . -path "*/about-canada/*" -name "*.html" | wc -l
```

Report the full list of files grouped by language. For each unique page (by slug, across languages), note the topic from the filename.

### A1. Classify each page: KEEP-INDEXED vs NOINDEX

For each unique About Canada page, classify by this test: **"Would someone searching for this topic be a potential immigration client, or just someone curious about Canada?"**

**NOINDEX (pure trivia — no immigration intent):**
- Sports ("national sport of canada", "sports invented in canada")
- Geography/area ("superficie du canada", "площадь канады", landmarks, wildlife, nature, climate/weather, seasons)
- Government/monarchy/politics ("who governs canada", "канада монархия")
- History ("when was canada discovered/founded/colonized")
- Languages-as-trivia ("official languages of canada", "what language do they speak in canada") — these pull huge volume but zero immigration intent
- Cuisine, culture, general facts, population, geography

**KEEP-INDEXED (bridges to immigration intent):**
- Cost of living for newcomers
- Healthcare access for new immigrants/PRs
- Education system for immigrant families
- Banking/credit for newcomers
- Anything explicitly framed around settling, arriving, or moving to Canada

If a page is borderline, lean toward KEEP-INDEXED only if the title/H1 explicitly references newcomers, immigrants, or moving — otherwise NOINDEX.

**Produce a classification table** and show it to the user before making any changes:

```
| Page (slug)                        | Topic              | Decision      |
|------------------------------------|--------------------|---------------|
| about-canada.html                  | Section landing    | NOINDEX       |
| canada-sports.html                 | Sports trivia      | NOINDEX       |
| canada-climate.html                | Weather/seasons    | NOINDEX       |
| canada-cost-of-living.html         | Cost for newcomers | KEEP-INDEXED  |
| ...                                | ...                | ...           |
```

**STOP here and present the table to the user for approval before editing any files.** The user wants to keep these pages live for customers — confirm the keep/noindex split matches their intent before proceeding.

### A2. Apply noindex to approved pages

For each page marked NOINDEX, add this tag inside `<head>`, immediately after the `<meta charset>` line:

```html
<meta name="robots" content="noindex, follow">
```

`noindex` = don't show in search results. `follow` = still follow links on the page (so link equity flows through to any immigration pages they link to). The page stays fully live and visible to visitors.

If `<head>` content is hand-written per file, edit each file. If there's any shared header mechanism, check whether a per-page flag is cleaner. Since Task 0 of the earlier work established this is hand-written static HTML with no includes, expect to edit each file directly.

Apply to all language variants of each NOINDEX page (en, fr, ru, he).

### A3. Remove noindexed pages from the sitemap

Pages that are noindexed should NOT be in sitemap.xml (sitemaps should only list indexable URLs — listing noindexed URLs sends Google mixed signals).

```bash
# Find which about-canada URLs are in the sitemap
grep "about-canada" sitemap.xml
```

Remove the `<url>` blocks (including their `xhtml:link` hreflang cross-references) for every NOINDEX page. Keep entries for any KEEP-INDEXED About Canada pages.

### A4. Internal linking — keep them reachable for users

The whole point is keeping these pages available to visitors. Confirm the About Canada section is still linked from the site's navigation or footer so customers can find it. Do NOT remove internal links — noindex handles the SEO side; the links keep it a usable resource.

If the About Canada section is ONLY reachable from the homepage nav, consider whether it should live under a clearly "resources" or "about Canada" menu so it reads as supplementary material, not primary service content. (Optional — discuss with user.)

### A5. Verification

```bash
# Every NOINDEX page should have the tag
for f in $(find . -path "*/about-canada/*" -name "*.html"); do
  echo "=== $f ==="
  grep -c "noindex" "$f"
done

# Sitemap should no longer list the noindexed pages
grep "about-canada" sitemap.xml
# Should only show KEEP-INDEXED pages (or nothing if all were noindexed)
```

After deploy, spot-check live:
```bash
curl -s https://www.lanacanada.com/about-canada/about-canada.html | grep -i "robots"
# Expect: <meta name="robots" content="noindex, follow">
```

### A6. Post-deploy GSC actions

1. GSC → URL Inspection on 3–4 noindexed pages → confirm "Excluded by 'noindex' tag" is detected (may take days).
2. Do NOT use the Removals tool — that's for emergency temporary removal. The noindex tag is the correct permanent mechanism.
3. Resubmit sitemap.xml.

**Expected effect over 2–6 weeks:** ~9,000 off-target impressions drop out of the average. Average position falls back toward 5–7 (and likely below your original 9.5 baseline, since the remaining queries are all immigration-relevant). CTR rises from 0.9% toward 3%+. Total clicks should hold or grow, because you're losing impressions that almost never converted to clicks anyway (0.4% CTR).

---

## Task B — Verify Richmond Hill Page Deployed & Indexed

The Richmond Hill page (`/immigration-consultant-richmond-hill.html`) was specced earlier. GSC shows "immigration consultant richmond hill" at position 9.3 and the FAQ schema is registering in the Enhancements panel — but the dedicated page wasn't clearly visible in the Pages report, so confirm it actually shipped.

### B1. Confirm the files exist and deployed

```bash
# Local check — do the files exist?
ls -la immigration-consultant-richmond-hill.html \
       fr/immigration-consultant-richmond-hill.html \
       ru/immigration-consultant-richmond-hill.html \
       he/immigration-consultant-richmond-hill.html 2>/dev/null

# Live check — is it serving?
curl -sI https://www.lanacanada.com/immigration-consultant-richmond-hill.html | head -3
# Expect: HTTP/2 200

# Check the key SEO elements are present
curl -s https://www.lanacanada.com/immigration-consultant-richmond-hill.html | grep -iE '<title>|canonical|LocalBusiness|FAQPage'
```

### B2. If it did NOT deploy

If the files don't exist or return 404, the Richmond Hill PR was never merged. Re-run the build from the earlier guide (`richmond-hill-page-build-guide.md`) and the homepage service-area snippet, then ship as one PR.

### B3. If it DID deploy

```bash
# Confirm it's in the sitemap
grep "richmond-hill" sitemap.xml
# Expect: 4 entries (en/fr/ru/he)

# Confirm homepage links to it (internal link signal)
curl -s https://www.lanacanada.com/ | grep "richmond-hill"
# Expect: at least one link
```

Then in GSC:
1. URL Inspection on `https://www.lanacanada.com/immigration-consultant-richmond-hill.html` → check index status → "Request Indexing" if not already indexed.
2. Verify the address/phone/hours in the page's LocalBusiness schema match the Google Business Profile exactly (if GBP exists). Mismatches hurt local ranking.

### B4. If GBP doesn't exist yet

Flag to the user: the Richmond Hill page's local-SEO value is capped without a verified Google Business Profile. Creating/verifying GBP for "LANA Immigration" at the Richmond Hill address is a separate but high-value task (it's what unlocks map-pack placement for "immigration consultant richmond hill"). This is a manual task the user must do — Claude Code can't verify a GBP.

---

## Task C — http → https Consolidation

GSC shows an old `http://www.lanacanada.com/` still indexed (185 impressions, position 7.6) alongside the canonical `https://www.lanacanada.com/` (251 impressions). The http version should 301-redirect to https. On GitHub Pages this is usually automatic, but it's worth confirming because the duplicate is splitting homepage authority.

### C1. Check whether "Enforce HTTPS" is enabled

GitHub Pages has a built-in "Enforce HTTPS" setting that auto-redirects http→https.

```bash
# Test the redirect behavior
curl -sI http://www.lanacanada.com/ | grep -iE "location|HTTP/"
# IDEAL: HTTP/1.1 301 ... Location: https://www.lanacanada.com/
# PROBLEM: if it returns 200 with no redirect, Enforce HTTPS is off
```

### C2. If http does NOT redirect to https

This is a setting in the GitHub repo, not a code change — Claude Code should instruct the user to do it manually:

1. Go to the repo on GitHub → **Settings → Pages**
2. Find the **"Enforce HTTPS"** checkbox near the bottom
3. Check it (if it's greyed out, the SSL cert is still provisioning — wait 24h and retry)

This is the cleanest fix. It makes GitHub Pages 301 all http traffic to https automatically.

### C3. Confirm canonical reinforces https

```bash
# The homepage canonical should already be https (from earlier Task 1c work)
curl -s https://www.lanacanada.com/ | grep canonical
# Expect: <link rel="canonical" href="https://www.lanacanada.com/">
```

Since the canonical already points to https, Google will eventually drop the http version even without the redirect — but enabling Enforce HTTPS accelerates it and is correct regardless.

### C4. Verification

```bash
curl -sI http://www.lanacanada.com/ | grep -iE "location|HTTP/"
# After Enforce HTTPS: should show 301 → https
```

No GSC action needed beyond what Task A already triggers (sitemap resubmit). The http version will fall out of the index over a few weeks once it 301s.

---

## Sequencing & PRs

1. **PR 1 — Task A** (About Canada noindex + sitemap cleanup). The high-leverage change. Requires user approval of the classification table BEFORE editing files.
2. **Task B** — verification only; may result in a PR if the Richmond Hill page needs (re)building.
3. **Task C** — mostly a GitHub setting (no PR); possibly a one-line canonical confirmation.

## Post-Deploy GSC Checklist (after PR 1 ships)

1. Resubmit sitemap.xml
2. URL Inspection → confirm noindex detected on 3–4 About Canada pages
3. URL Inspection → "Request Indexing" on the Richmond Hill page (if not indexed)
4. Set a 21-day reminder. At that point, in the Performance report (28-day compare):
   - Average position should be falling back toward 5–7
   - CTR should be rising toward 3%+
   - Query count should drop from 770 as the trivia queries fall out
   - Immigration-intent queries (immigration consultant richmond hill, express entry crs, super visa, licensed immigration consultant) should hold or improve their positions

## What Success Looks Like

The goal was never "rank for everything." It's "rank top-3 for immigration queries that produce clients." After this pruning:
- Fewer total queries, but a far higher % are immigration-relevant
- Average position improves because the trivia dead weight is gone
- CTR improves because remaining impressions are high-intent
- The pages that matter (Richmond Hill local page, pathway pages, the homepage) get more crawl attention and authority

Counterintuitively, **a smaller indexed footprint of relevant pages will outperform a large footprint padded with trivia.** That's the whole thesis of this phase.
