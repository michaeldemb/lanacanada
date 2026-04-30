# Blog Post Creation Guide — LANA Immigration

**Purpose:** Step-by-step process for adding a new blog post to the LANA Immigration website. Follow this exactly every time to ensure consistency across all 4 languages, proper SEO, and a working sitemap.

---

## Overview

A new blog post requires creating/updating **10 files**:

1. **4 blog post HTML files** — one per language (EN, FR, RU, HE)
2. **4 blog listing pages** — insert a new card at the top of each
3. **1 sitemap.xml update** — add 4 URL entries
4. **Image file** — described to the user; they create it

---

## Step 1: Read the source

The user will point you to a source document (usually `.docx` in `docs/`). Read it with:

```bash
cd "docs" && unzip -p FILENAME.docx word/document.xml | python3 -c "
import sys, re, html
xml = sys.stdin.read()
xml = re.sub(r'</w:p>', '\n', xml)
xml = re.sub(r'<[^>]+>', '', xml)
text = html.unescape(xml).strip()
print(text)
"
```

**IMPORTANT:** Keep the English text **exactly as provided**. Do NOT rewrite, rephrase, or "improve" the content. Only fix obvious typos, smart quotes → straight quotes, and format into proper HTML.

---

## Step 2: Decide the slug, tag, and image name

- **Slug**: `blog-{topic-keywords}.html` — short, descriptive, kebab-case. No dates in slug unless it's about a specific year's changes.
- **Tag**: Pick one from existing tags used on the site: `Express Entry`, `Work Permits`, `Study Permits`, `Permanent Residence`, `Citizenship`, `Family Sponsorship`. Don't invent new tags unless truly necessary.
- **Image filename**: `blog-{descriptive-name}.png` (use `.png` going forward, not `.jpg`)

---

## Step 3: Create the 4 blog post HTML files in parallel

Use 3 Agent calls in parallel (one for EN, one for FR, one combined for RU+HE) to save time.

### Template structure (copy from an existing recent post like `blog-study-permit-officer-assessment.html`)

Each file must have:

**`<head>` section:**
- Google Analytics tag `G-DV0T86SZ21` (first thing in head)
- `<meta charset="UTF-8">` and viewport
- `<title>`, `<meta name="description">`, `<meta name="keywords">`, author, robots
- `<link rel="canonical">` — clean URL of the language version (e.g., `https://www.lanacanada.com/blog/SLUG/` — note **www**, no `.html`, trailing slash)
- Open Graph tags (og:title, og:description, og:url, og:type="article", og:image=`https://www.lanacanada.com/images/logo.avif`, og:site_name, og:locale)
- Twitter card tags (twitter:image also uses `https://www.lanacanada.com/...`)
- `<link rel="icon">` → favicon
- `<link rel="stylesheet" href="shared.css">` (EN root) or `../shared.css` (FR/RU/HE)
- Calendly CSS: `<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">`
- `<script>window.basePath='../';</script>` (EN) or `'../../'` (FR/RU/HE)
- `<script src="shared-components.js"></script>` or `../shared-components.js` or `../../shared-components.js`
- **All 5 hreflang alternates** (en, fr, ru, he, x-default) — clean www URLs
- **JSON-LD BlogPosting schema** with headline, description, `url` (clean www URL), `datePublished`, `dateModified`, author (Organization: LANA Immigration Consulting Services), publisher (same Organization with logo `https://www.lanacanada.com/images/logo.avif`), `mainEntityOfPage` with `@id` set to the same clean www URL

**`<body>` attributes:**
- `data-active-nav="blog/blog.html"` always
- First script: `<script>window.basePath='../'; window.langBase='../'; window.pagePath='blog/SLUG.html';</script>` for EN
  - FR/RU/HE: `window.basePath='../../'; window.langBase='../';`
- `<div id="site-header"></div>` + `<script>renderHeader();</script>`

**Body sections (in order):**
1. `<section class="page-hero">` — label ("Blog & News"), H1 title, post-meta-bar (tag + date)
2. `<div class="post-wrap">` containing:
   - Back-link `<a href="blog.html" class="post-back-link fade-up">&larr; Back to Blog</a>` (HE uses `&rarr;`)
   - `<div class="post-featured-image fade-up">` with `<img>` and `onerror` fallback to 📋 emoji (`&#128203;`)
   - `<div class="post-body fade-up">` containing:
     - Blog content with `<h2>` for main sections, `<h3>` for sub-sections, `<p>`, `<ul>/<li>` lists
     - `<div class="mid-cta-box">` somewhere in the middle (after 2nd or 3rd section). Contains `<strong>question</strong>`, `<p>offer</p>`, Calendly button
     - `<p><em>Disclaimer</em></p>` at the end
     - Author byline (`post-author` with avatar "S", name "Svetlana Demb", title)
     - Share section (Facebook, X, LinkedIn)
3. `<section class="summary-section">` — bottom CTA with h2, subtitle, two buttons (Calendly + ../contact.html)
4. `<div id="site-footer"></div>` + `<script>renderFooter();</script>`
5. IntersectionObserver script for fade-up animations
6. Social share script (populates href attributes dynamically)
7. `<script src="https://assets.calendly.com/assets/external/widget.js" async></script>`

### Language-specific variations

| Element | EN | FR | RU | HE |
|---------|----|----|----|----|
| `<html>` tag | `lang="en"` | `lang="fr"` | `lang="ru"` | `lang="he" dir="rtl"` |
| `basePath` | `'../'` | `'../../'` | `'../../'` | `'../../'` |
| `langBase` | `'../'` | `'../'` | `'../'` | `'../'` |
| Paths to shared | `../shared.css` | `../../shared.css` | `../../shared.css` | `../../shared.css` |
| og:locale | `en_CA` | `fr_CA` | `ru_RU` | `he_IL` |
| Blog label | "Blog &amp; News" | "Blogue &amp; Nouvelles" | "Блог и Новости" | "בלוג וחדשות" |
| Back arrow | `&larr;` | `&larr;` | `&larr;` | `&rarr;` (RTL!) |
| CTA arrow | `&rarr;` | `&rarr;` | `&rarr;` | `&larr;` (RTL!) |
| Author title | "RCIC — Regulated Canadian Immigration Consultant · 9+ Years Experience" | "CRIC — Consultante Réglementée en Immigration Canadienne · 9+ ans d'expérience" | "RCIC — Регулируемый Консультант по Иммиграции в Канаду · 9+ лет опыта" | "RCIC — יועצת הגירה מוסמכת לקנדה · 9+ שנות ניסיון" |
| Share label | "Share this article:" | "Partagez cet article :" | "Поделиться статьёй:" | "שתפו מאמר זה:" |

### Translation rules

- Translate the body content naturally — don't be literal. Match the tone of existing posts on that language page.
- Don't translate technical terms that have no direct equivalent (keep "Express Entry", "PNP", "PGWP", "SOWP" etc. in English or add parenthetical).
- Keep "RCIC" in EN/RU/HE; use "CRIC" in FR.

---

## Step 4: Update the 4 blog listing pages

Files:
- `blog/blog.html`
- `fr/blog/blog.html`
- `ru/blog/blog.html`
- `he/blog/blog.html`

For each, insert a new `<div class="blog-card fade-up">` **before the existing first blog card**. The card structure:

```html
<!-- [Month Year] -->
<div class="blog-card fade-up">
  <div class="blog-card-image">
    <img src="[PATH]/images/[FILENAME.png]" alt="[LOCALIZED ALT]" onerror="this.parentElement.classList.add('no-image'); this.style.display='none'; this.parentElement.innerHTML='&#128203;';">
  </div>
  <div class="blog-card-body">
    <div class="blog-card-meta">
      <span class="blog-tag">[LOCALIZED TAG]</span>
      <span class="blog-date">[LOCALIZED DATE]</span>
    </div>
    <h2 class="blog-card-title">[LOCALIZED TITLE]</h2>
    <p class="blog-card-excerpt">[LOCALIZED 1-2 SENTENCE EXCERPT]</p>
    <a href="[SLUG.html]" class="blog-card-link">[Read more / Lire la suite / Читать далее / קראו עוד] →</a>
  </div>
</div>
```

Image path: `../images/` for EN, `../../images/` for FR/RU/HE.
HE "Read more" uses ← (left arrow) instead of →.

---

## Step 5: Update sitemap.xml

Find the entry for the previous "most recent" blog post (the one that was first on the blog listing before this new one). Insert 4 new `<url>` blocks **right before** that entry — one per language (en, fr, ru, he). Each must:

- `<loc>` = the language-specific clean URL to the new post (www, no `.html`, trailing slash)
- `<lastmod>` = today's date (YYYY-MM-DD)
- `<priority>0.7</priority>`
- All 5 hreflang alternate links (also clean URLs)

Pattern for each:

```xml
<url>
  <loc>https://www.lanacanada.com/[LANG_PREFIX]blog/[SLUG]/</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <priority>0.7</priority>
  <xhtml:link rel="alternate" hreflang="en" href="https://www.lanacanada.com/blog/[SLUG]/"/>
  <xhtml:link rel="alternate" hreflang="fr" href="https://www.lanacanada.com/fr/blog/[SLUG]/"/>
  <xhtml:link rel="alternate" hreflang="ru" href="https://www.lanacanada.com/ru/blog/[SLUG]/"/>
  <xhtml:link rel="alternate" hreflang="he" href="https://www.lanacanada.com/he/blog/[SLUG]/"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://www.lanacanada.com/blog/[SLUG]/"/>
</url>
```

LANG_PREFIX: empty for EN, `fr/`, `ru/`, `he/` for the others. `[SLUG]` is the slug **without** `.html`.

---

## Step 6: Describe the image for the user

The user will create the image themselves. Describe it in detail:

- **Filename**: `blog-[descriptive-name].png` (use the exact name you referenced in all HTML files)
- **Aspect ratio**: landscape (roughly 1200x800 or 3:2). Fits well in blog card and featured image crops.
- **Subject**: specific to the topic — describe concrete visual elements, not abstractions.
- **Style**: professional, warm, not overly stock-photo corporate. Match the site's teal/white aesthetic.
- **Avoid**: generic "person with passport" shots, cheesy stock imagery, heavy color filters.
- **Text**: no text overlays (headlines are separate).

Example good description: "A young couple reviewing documents together at a kitchen table in Canada — books/textbooks visible to suggest a student context, laptop open showing a Canadian government site. Natural light, warm tones."

---

## Step 7: Don't forget

- **All SEO/social/structured-data URLs must use `https://www.lanacanada.com/`** (with the `www.` subdomain, never bare `lanacanada.com`). Non-www form 301-redirects to www at the server, which makes Google flag pages as "Page with redirect."
- **All such URLs must be clean** (no `.html` extension, trailing slash for directories):
  - Homepage: `https://www.lanacanada.com/` (not `/index.html`)
  - Language home: `https://www.lanacanada.com/fr/` (not `/fr/index.html`)
  - Blog post: `https://www.lanacanada.com/blog/blog-foo-bar/` (not `/blog/blog-foo-bar.html`)
  - This applies to: `canonical`, all `hreflang` `href`s, `og:url`, `og:image`, `twitter:image`, JSON-LD `"url"` / `"image"` / `"@id"` fields, and sitemap `<loc>`. Image files keep their `.png`/`.jpg`/`.avif` extension — only `.html` is stripped.
- **Internal `href=` navigation in body content keeps `.html`** (e.g., `<a href="blog.html">`, `<a href="../contact.html">`). Those are the actual filenames the static server serves; the clean canonical URL is just what we tell crawlers.
- **Use straight quotes** in titles/meta descriptions (not curly quotes) — these are read by crawlers.
- **Use `&rarr;` / `&larr;` entities**, not raw `→` `←` characters — ensures proper rendering.
- **Use `&amp;`** in "Blog & News" and similar (never raw `&`).
- **Don't rewrite the English content** — format only. The client wrote it.
- **Image file extension**: `.png` going forward.
- **datePublished and dateModified** are the same for a new post.
- **No tracking in homepage index.html testimonials** — only add the new blog to blog listing pages.

---

## Step 8: Verify

After all edits:

- Check that all 4 blog post files exist and reference the correct image filename (case-sensitive!)
- Check that all 4 blog listing pages have the new card as the first one
- Check that sitemap.xml has 4 new URL entries (one per language)
- If the image doesn't exist yet, the `onerror` fallback will show the 📋 emoji — that's expected until the user adds the image

---

## Quick file checklist

```
[ ] blog/blog-SLUG.html                        (EN post)
[ ] fr/blog/blog-SLUG.html                     (FR post)
[ ] ru/blog/blog-SLUG.html                     (RU post)
[ ] he/blog/blog-SLUG.html                     (HE post, dir="rtl")
[ ] blog/blog.html                             (new card at top)
[ ] fr/blog/blog.html                          (new card at top)
[ ] ru/blog/blog.html                          (new card at top)
[ ] he/blog/blog.html                          (new card at top)
[ ] sitemap.xml                                (4 new <url> entries)
[ ] Image description given to user            (filename + what it should look like)
```
