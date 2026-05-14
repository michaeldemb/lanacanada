# Homepage Service Area Snippet

A short section to add near the bottom of the homepage (before the footer, after the main content sections) that links to the new Richmond Hill page. Drop this into all four homepages.

The wording is calibrated to:
- Establish the office anchor (Richmond Hill, ON) for local-SEO signals
- Acknowledge GTA + Ontario + Canada + worldwide service without overclaiming
- State remote-first reality plainly so visitors aren't surprised
- Drive the click to the new landing page (which is where the local-SEO schema lives)

---

## EN — `/index.html`

```html
<section class="service-area">
  <h2>Office Location &amp; Service Area</h2>
  <p>
    LANA Immigration is based in Richmond Hill, Ontario. In-person consultations
    are available throughout the Greater Toronto Area, including Vaughan,
    Markham, Thornhill, Aurora, and Toronto. Most cases are handled remotely
    &mdash; the majority of clients work with the practice from outside Canada
    while preparing their immigration applications.
  </p>
  <p>
    <a href="/immigration-consultant-richmond-hill.html">
      Learn more about office location and service area &rarr;
    </a>
  </p>
</section>
```

### Placement note

Place this section **above the existing footer** and **below the primary content blocks** (service overview, testimonials, CTA, etc.). The right structural position is the same place where most sites put a "Visit us" or "Contact" block.

If the homepage has a hero CTA at the top and a contact form at the bottom, this section sits between them in the lower third — not at the very top (where it would compete with the conversion CTA) and not below the footer (where it's invisible).

### Styling

Use whatever class name pattern the existing homepage sections use (`.section`, `.content-block`, `.hero-secondary`, etc.). The class `service-area` above is a placeholder — replace it to match the site's existing convention so the section inherits typography and spacing without needing new CSS.

---

## FR — `/fr/index.html`

```html
<section class="service-area">
  <h2>Emplacement du bureau et zone desservie</h2>
  <p>
    LANA Immigration est basée à Richmond Hill, en Ontario. Les consultations
    en personne sont disponibles dans toute la région du Grand Toronto, y
    compris Vaughan, Markham, Thornhill, Aurora et Toronto. La plupart des
    dossiers sont traités à distance &mdash; la majorité des clients
    travaillent avec le cabinet depuis l&rsquo;extérieur du Canada pendant
    qu&rsquo;ils préparent leur demande d&rsquo;immigration.
  </p>
  <p>
    <a href="/fr/immigration-consultant-richmond-hill.html">
      En savoir plus sur l&rsquo;emplacement du bureau et la zone desservie &rarr;
    </a>
  </p>
</section>
```

---

## RU — `/ru/index.html`

```html
<section class="service-area">
  <h2>Расположение офиса и зона обслуживания</h2>
  <p>
    LANA Immigration находится в городе Ричмонд-Хилл, Онтарио. Личные
    консультации доступны по всей территории Большого Торонто, включая Вон,
    Маркхэм, Торнхилл, Аврору и Торонто. Большинство дел ведётся
    дистанционно &mdash; большая часть клиентов работает с практикой из-за
    пределов Канады, готовя свои иммиграционные заявления.
  </p>
  <p>
    <a href="/ru/immigration-consultant-richmond-hill.html">
      Подробнее о расположении офиса и зоне обслуживания &rarr;
    </a>
  </p>
</section>
```

---

## HE — `/he/index.html`

```html
<section class="service-area">
  <h2>מיקום המשרד ואזור השירות</h2>
  <p>
    LANA Immigration ממוקמת בריצ&apos;מונד היל, אונטריו. פגישות פנים אל פנים
    זמינות ברחבי אזור טורונטו הגדול, כולל ווהן, מרקהאם, ת&apos;ורנהיל, אורורה
    וטורונטו. רוב התיקים מטופלים מרחוק &mdash; רוב הלקוחות עובדים עם המשרד
    מחוץ לקנדה בעת הכנת בקשות ההגירה שלהם.
  </p>
  <p>
    <a href="/he/immigration-consultant-richmond-hill.html">
      מידע נוסף על מיקום המשרד ואזור השירות &larr;
    </a>
  </p>
</section>
```

### RTL note for HE

The Hebrew version uses `&larr;` (left arrow) instead of `&rarr;` because Hebrew reads right-to-left — the directional arrow at the end of a link should point in the reading direction. If the existing Hebrew homepage has a `dir="rtl"` attribute on the parent container or `<html>` tag, the section will inherit correct RTL rendering automatically. If not, add `dir="rtl"` to the `<section>` element itself.

---

## Verification After Adding

```bash
# Confirm the new section is present and the link is correct on each homepage
for lang in "" "fr/" "ru/" "he/"; do
  echo "=== /${lang} ==="
  curl -s "https://www.lanacanada.com/${lang}" | grep -A 1 "immigration-consultant-richmond-hill"
done
```

Each should show the anchor tag pointing to the corresponding language's Richmond Hill page.

---

## Why this matters for SEO

Three things happen when this section is on all four homepages:

1. **Internal link equity flows to the new page.** Homepages typically have the strongest authority on a site (most backlinks, most direct traffic). Linking from the homepage to the new local page is the single biggest internal-link signal you can send Google about which pages matter.

2. **Anchor text reinforces topical relevance.** The link text "office location and service area" (and its translations) tells Google what the destination page is about — supporting "immigration consultant richmond hill" and related local queries.

3. **The named GTA cities on the homepage** create a secondary local-SEO signal even before users click through. Richmond Hill, Vaughan, Markham, Thornhill, Aurora, and Toronto all appear in natural sentence context, which is what Google's local algorithm rewards.

The translations also signal — across all four languages — that the practice has a real physical anchor, which matters for trust signals beyond just SEO.
