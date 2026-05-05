# LANA Immigration — Site Conventions

**Read this before creating or editing any HTML page.** These conventions apply to every page on lanacanada.com — homepage, service pages, landing pages, blog posts, legal pages, every language variant. The blog post guide (`blog-post-creation-guide.md`) is a thin layer on top of this — it only covers blog-specific bits.

---

## 1. URL conventions (CRITICAL — affects SEO)

Every URL value in SEO/social/structured-data tags **must** use:

1. **The `www` subdomain** — `https://www.lanacanada.com/...` (never bare `https://lanacanada.com/`). The non-www form 301-redirects to www at the server level. Mismatched URLs cause Google to flag pages as "Page with redirect" (indexing issue).

2. **Clean URLs** (no `.html` extension, **NO trailing slash on regular pages**):
   - Homepage: `https://www.lanacanada.com/` (keep trailing `/` — this is an actual directory with `index.html`)
   - Language home: `https://www.lanacanada.com/fr/` / `/ru/` / `/he/` (keep trailing `/` — actual directories)
   - All other pages: `https://www.lanacanada.com/blog/blog-foo-bar` (strip `.html`, **no trailing slash**)
   - Image files keep their `.png` / `.jpg` / `.avif` extension — only `.html` is stripped.

   **Why no trailing slash on regular pages**: GitHub Pages (the host) does not auto-rewrite `/foo/` → `/foo.html`. A request for `/foo/` returns 404 unless `foo/` is a real directory with `index.html`. Jekyll's HTML-extension fallback resolves `/foo` → `/foo.html`, so the bare-name form is what works. Having canonical URLs return 404 broke Open Graph previews on Facebook, Twitter, etc. — Facebook follows `og:url`, hits 404, shows the 404 page's title.

### Where to apply

| Where | Format |
|---|---|
| `<link rel="canonical" href="...">` | clean www URL |
| `<link rel="alternate" hreflang="..." href="...">` (all 5: en, fr, ru, he, x-default) | clean www URL |
| `<meta property="og:url" content="...">` | clean www URL |
| `<meta property="og:image" content="...">` | www URL (image extension intact) |
| `<meta name="twitter:image" content="...">` | www URL (image extension intact) |
| JSON-LD `"url"`, `"image"`, `"@id"` (inside `<script type="application/ld+json">`) | clean www URL |
| `<loc>` entries in `sitemap.xml` | clean www URL |
| `Sitemap:` line in `robots.txt` | www URL |

### Where NOT to change

- **Internal `href=` navigation in body content** (e.g., `<a href="contact.html">`, `<a href="../blog/blog.html">`). These point to actual filenames the static server serves. The clean canonical URL is just what we tell crawlers — internal links use the real file path.
- **JSON-LD fields not in the list above** (e.g., `email:` mailto links, `sameAs` social URLs).
- **Any external URLs** (schema.org, calendly.com, google.com, etc.).

---

## 2. Multilingual structure

Site has 4 languages: **English (root)**, **French (`/fr/`)**, **Russian (`/ru/`)**, **Hebrew (`/he/`, RTL)**.

For every new page that should be indexed multilingually, create **all 4 versions** in parallel. Translations should be natural (not literal); keep technical terms (Express Entry, PNP, RCIC, PGWP) untranslated unless a clear localized equivalent exists (e.g., CRIC for RCIC in French).

### Per-language metadata

| | EN | FR | RU | HE |
|---|---|---|---|---|
| `<html>` tag | `lang="en"` | `lang="fr"` | `lang="ru"` | `lang="he" dir="rtl"` |
| og:locale | `en_CA` | `fr_CA` | `ru_RU` | `he_IL` |
| RTL arrow conventions | `&rarr;` for forward, `&larr;` for back | same | same | **flip**: `&larr;` for forward, `&rarr;` for back |

### Path conventions

| Page location | basePath | langBase | Image refs | Shared CSS/JS |
|---|---|---|---|---|
| EN root (`/page.html`) | `''` | `''` | `images/...` | `shared.css` |
| EN blog (`/blog/page.html`) | `'../'` | `'../'` | `../images/...` | `../shared.css` |
| FR/RU/HE root (`/fr/page.html`) | `'../'` | `''` | `../images/...` | `../shared.css` |
| FR/RU/HE blog (`/fr/blog/page.html`) | `'../../'` | `'../'` | `../../images/...` | `../../shared.css` |

These are set via `<script>window.basePath='...'; window.langBase='...'; window.pagePath='...';</script>` so the shared header/footer can render correct relative links.

---

## 3. Required `<head>` elements (every page)

In order:

1. **Google Analytics** — gtag.js with ID `G-DV0T86SZ21`, placed as the first thing inside `<head>` (immediately after `<head>` opening tag). Identical block on every page.
2. `<meta charset="UTF-8">` and viewport meta
3. `<title>` — page-specific, ends with `— LANA Immigration`
4. `<meta name="description">` — page-specific, 1–2 sentences, used straight quotes
5. `<meta name="keywords">` — comma-separated, page-specific
6. `<meta name="author" content="LANA Immigration Consulting Services">`
7. `<meta name="robots" content="index, follow">` (use `noindex, follow` for utility pages like 404 or thank-you)
8. `<link rel="canonical">` — clean www URL of THIS language version
9. **5 `<link rel="alternate" hreflang="...">` tags** — en, fr, ru, he, x-default (always all 5, even on language variants)
10. Open Graph: og:title, og:description, og:url (clean www), og:type, og:image (`https://www.lanacanada.com/images/logo.avif` is the safe default), og:site_name, og:locale
11. Twitter: twitter:card, twitter:title, twitter:description, twitter:image
12. JSON-LD structured data — schema type appropriate to the page (BlogPosting for blog posts, WebPage for static pages, AboutPage for about/team, ContactPage for contact, etc.)
13. Favicon link
14. `shared.css` link
15. Calendly CSS (only if the page uses Calendly popup — most pages do via the shared header)
16. Page-specific `<style>` block if needed (kept inline per existing convention)
17. `<script>window.basePath=...;</script>` (path variables)
18. `<script src="shared-components.js"></script>` (or relative path)

---

## 4. Body structure

```html
<body data-active-nav="[matching nav-id]">
<script>window.basePath='...'; window.langBase='...'; window.pagePath='...';</script>

<div id="site-header"></div>
<script>renderHeader();</script>

<!-- page-specific content -->

<div id="site-footer"></div>
<script>renderFooter();</script>

<script>
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
</script>

<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
</body>
```

- `data-active-nav` should match the nav slug of the page (used by `shared-components.js` to highlight the active nav item). For pages outside the main nav (404, thank-you, payment confirmation), use empty string `""`.
- `.fade-up` class triggers the scroll-fade-in animation — apply to any block you want to fade in.
- Calendly script is only needed if the page has Calendly buttons (most do).

---

## 5. Sitemap.xml

Every indexable page must have a `<url>` entry with all 5 hreflang alternates.

Pattern:

```xml
<url>
  <loc>https://www.lanacanada.com/[LANG_PREFIX][PATH]/</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <priority>0.7</priority>
  <xhtml:link rel="alternate" hreflang="en" href="https://www.lanacanada.com/[PATH]/"/>
  <xhtml:link rel="alternate" hreflang="fr" href="https://www.lanacanada.com/fr/[PATH]/"/>
  <xhtml:link rel="alternate" hreflang="ru" href="https://www.lanacanada.com/ru/[PATH]/"/>
  <xhtml:link rel="alternate" hreflang="he" href="https://www.lanacanada.com/he/[PATH]/"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://www.lanacanada.com/[PATH]/"/>
</url>
```

Add **one entry per language version** (4 entries per multilingual page).

Priorities (rough guide):
- `1.0` homepage
- `0.8` core service/info pages
- `0.7` blog posts, sub-pages
- `0.6` legal/utility

Do NOT add to sitemap: `404.html`, `blog-post-template.html`, drafts.

---

## 6. Image conventions

- New blog post featured images: `.png` extension, stored in `images/` (root-level, not nested per language).
- Existing pages may still use `.jpg` / `.avif` — leave those as-is.
- All images use absolute paths from the page perspective: `images/...` from EN root, `../images/...` from FR/RU/HE root or EN blog, `../../images/...` from FR/RU/HE blog.
- Image filename convention: descriptive kebab-case, e.g., `blog-pr-fees-2026.png`, `team/svetlana.jpg`.
- Featured images on blog posts use the `onerror` fallback pattern that swaps in a clipboard emoji (`&#128203;`) if the file doesn't exist yet.

---

## 7. Encoding details (small but matters)

- **Straight quotes** (`"`, `'`) in titles/meta descriptions — never curly quotes (`"`, `'`). Crawlers read these as raw text.
- **Use HTML entities** for arrows: `&rarr;` (→), `&larr;` (←). Don't paste raw arrow characters.
- **Use `&amp;`** in display text like "Blog & News" — never raw `&` (breaks XML/HTML validation).
- **datePublished** and **dateModified** are the same date when first publishing a post; only update `dateModified` on later edits.

---

## 8. 404 page

`404.html` exists at the root with `<meta name="robots" content="noindex, follow">`, no canonical, no hreflang alternates, NOT in sitemap. Server should be configured to serve it for missing pages (Apache `ErrorDocument 404 /404.html`, Nginx `error_page 404 /404.html;`, or auto-detected on Cloudflare/Netlify/Vercel/GitHub Pages).

---

## 9. Quick checklist for any new page

```
[ ] EN version created at /[path]/
[ ] FR version at /fr/[path]/
[ ] RU version at /ru/[path]/
[ ] HE version at /he/[path]/ with dir="rtl"
[ ] All canonical URLs use https://www.lanacanada.com/.../
[ ] All 5 hreflang alternates use clean www URLs
[ ] og:url, og:image, twitter:image use www URLs
[ ] JSON-LD url/image/@id use clean www URLs
[ ] Internal href= links keep .html (real file paths)
[ ] Google Analytics tag in <head>
[ ] data-active-nav set correctly
[ ] window.basePath/langBase/pagePath set correctly
[ ] 4 sitemap.xml <url> entries (one per language)
[ ] No entry in sitemap for utility pages
```

---

## See also

- [`blog-post-creation-guide.md`](blog-post-creation-guide.md) — blog-specific extension of these conventions (mid-CTA pattern, blog card insertion, author byline, share buttons).
- [`humanizer-audit.md`](humanizer-audit.md) — writing style guide / AI-pattern avoidance for body content.
