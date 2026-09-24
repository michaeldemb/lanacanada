/* ===== SHARED HEADER, FOOTER & LANGUAGE SWITCHING =====
   Edit this file to update the header or footer across all pages.
   Each page calls renderHeader() and renderFooter() via inline <script> tags.
   The active nav link is determined by the data-active-nav attribute on <body>.

   Each page must set before loading this script:
     window.basePath  = relative path to site root (for shared resources: CSS, JS, images)
     window.langBase  = relative path to language root (for same-language page links)
     window.pagePath  = page slug relative to language root (e.g. 'index.html' or 'blog/blog.html')

   Examples:
     EN root page:          basePath='',      langBase='',      pagePath='index.html'
     EN blog page:          basePath='../',    langBase='../',   pagePath='blog/blog.html'
     FR root page (/fr/):   basePath='../',    langBase='',      pagePath='index.html'
     FR blog page (/fr/blog/): basePath='../../', langBase='../', pagePath='blog/blog.html'
*/

/* ---------- Navigation link hrefs (relative to language root) ---------- */
var NAV_HREFS = [
  'index.html',
  'why-work-with-consultant.html',
  'how-immigration-works.html',
  'citizenship.html',
  'coming-to-canada-temporarily.html',
  'blog/blog.html',
  'testimonials.html',
  'our-team.html'
];

/* ---------- Translations ---------- */
var T = {
  en: {
    nav: ['Home', 'Why Work With a Consultant', 'How Immigration Works', 'Citizenship', 'Coming to Canada Temporarily', 'Blog &amp; News', 'Testimonials', 'Our Team'],
    bookBtn: 'Book a Consultation \u2192',
    contactLink: 'Self Assessment',
    tagline: 'Immigration Done Right. Licensed consultant with 9+ years of experience helping individuals and families build their future in Canada.',
    fPages: 'Pages',
    fMore: 'More',
    fContact: 'Contact',
    fPayment: 'Make a Payment',
    fPrivacy: 'Privacy Policy',
    fDisclaimer: 'Disclaimer',
    fSend: 'Send a Message \u2192',
    fCopy: '\u00A9 2025 LANA Immigration Consulting Services Canada. All rights reserved.',
    fPrivStmt: 'Privacy Statement',
    fAboutCanada: 'About Canada',
    fDiscNote: 'The information on this website is for general informational purposes and does not constitute legal advice. Immigration rules change frequently.',
    fVerify: 'Verify Our License (CICC) \u2197',
    fFAQ: 'FAQ',
    fServiceArea: 'Office located in Richmond Hill, ON \u2192'
  },
  fr: {
    nav: ['Accueil', 'Pourquoi un Consultant', "Fonctionnement de l'Immigration", 'Citoyennet\u00E9', 'Venir au Canada Temporairement', 'Blogue &amp; Nouvelles', 'T\u00E9moignages', 'Notre \u00C9quipe'],
    bookBtn: 'R\u00E9server une Consultation \u2192',
    contactLink: 'Auto-\u00E9valuation',
    tagline: "L'immigration bien faite. Consultante agr\u00E9\u00E9e avec plus de 9 ans d'exp\u00E9rience aidant les individus et les familles \u00E0 b\u00E2tir leur avenir au Canada.",
    fPages: 'Pages',
    fMore: 'Plus',
    fContact: 'Contact',
    fPayment: 'Effectuer un Paiement',
    fPrivacy: 'Politique de Confidentialit\u00E9',
    fDisclaimer: 'Avertissement',
    fSend: 'Envoyer un Message \u2192',
    fCopy: '\u00A9 2025 LANA Immigration Services de Consultation Canada. Tous droits r\u00E9serv\u00E9s.',
    fPrivStmt: 'D\u00E9claration de Confidentialit\u00E9',
    fAboutCanada: '\u00C0 propos du Canada',
    fDiscNote: 'Les informations sur ce site sont \u00E0 titre informatif uniquement et ne constituent pas un avis juridique. Les r\u00E8gles d\'immigration changent fr\u00E9quemment.',
    fVerify: 'V\u00E9rifier Notre Licence (CICC) \u2197',
    fFAQ: 'Foire aux Questions',
    fServiceArea: 'Bureau situ\u00E9 \u00E0 Richmond Hill, Ontario \u2192'
  },
  ru: {
    nav: ['\u0413\u043B\u0430\u0432\u043D\u0430\u044F', '\u0417\u0430\u0447\u0435\u043C \u041D\u0443\u0436\u0435\u043D \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442', '\u041A\u0430\u043A \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0418\u043C\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F', '\u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E', '\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0412\u044A\u0435\u0437\u0434 \u0432 \u041A\u0430\u043D\u0430\u0434\u0443', '\u0411\u043B\u043E\u0433 \u0438 \u041D\u043E\u0432\u043E\u0441\u0442\u0438', '\u041E\u0442\u0437\u044B\u0432\u044B', '\u041D\u0430\u0448\u0430 \u041A\u043E\u043C\u0430\u043D\u0434\u0430'],
    bookBtn: '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u2192',
    contactLink: '\u0421\u0430\u043C\u043E\u043E\u0446\u0435\u043D\u043A\u0430',
    tagline: '\u0418\u043C\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F, \u0441\u0434\u0435\u043B\u0430\u043D\u043D\u0430\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E. \u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442 \u0441 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C 9-\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u043F\u043E\u043C\u043E\u0449\u0438 \u0447\u0430\u0441\u0442\u043D\u044B\u043C \u043B\u0438\u0446\u0430\u043C \u0438 \u0441\u0435\u043C\u044C\u044F\u043C \u0432 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043E \u0432 \u041A\u0430\u043D\u0430\u0434\u0435.',
    fPages: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B',
    fMore: '\u0415\u0449\u0451',
    fContact: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442',
    fPayment: '\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C',
    fPrivacy: '\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438',
    fDisclaimer: '\u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438',
    fSend: '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u2192',
    fCopy: '\u00A9 2025 LANA Immigration Consulting Services Canada. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.',
    fPrivStmt: '\u0417\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043E \u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438',
    fAboutCanada: '\u041E \u041A\u0430\u043D\u0430\u0434\u0435',
    fDiscNote: '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u0445 \u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0435\u0439. \u0418\u043C\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0447\u0430\u0441\u0442\u043E \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F.',
    fVerify: '\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044E (CICC) \u2197',
    fFAQ: '\u0427\u0430\u0441\u0442\u044B\u0435 \u0412\u043E\u043F\u0440\u043E\u0441\u044B',
    fServiceArea: '\u041E\u0444\u0438\u0441 \u0432 \u0420\u0438\u0447\u043C\u043E\u043D\u0434-\u0425\u0438\u043B\u043B, \u041E\u043D\u0442\u0430\u0440\u0438\u043E \u2192'
  },
  he: {
    nav: ['\u05D1\u05D9\u05EA', '\u05DC\u05DE\u05D4 \u05D9\u05D5\u05E2\u05E5', '\u05D0\u05D9\u05DA \u05D4\u05D4\u05D2\u05D9\u05E8\u05D4 \u05E2\u05D5\u05D1\u05D3\u05EA', '\u05D0\u05D6\u05E8\u05D7\u05D5\u05EA', '\u05D4\u05D2\u05E2\u05D4 \u05D6\u05DE\u05E0\u05D9\u05EA \u05DC\u05E7\u05E0\u05D3\u05D4', '\u05D1\u05DC\u05D5\u05D2 \u05D5\u05D7\u05D3\u05E9\u05D5\u05EA', '\u05D4\u05DE\u05DC\u05E6\u05D5\u05EA', '\u05D4\u05E6\u05D5\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5'],
    bookBtn: '\u05E7\u05D1\u05E2 \u05E4\u05D2\u05D9\u05E9\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u2190',
    contactLink: '\u05D4\u05E2\u05E8\u05DB\u05D4 \u05E2\u05E6\u05DE\u05D9\u05EA',
    tagline: '\u05D4\u05D2\u05D9\u05E8\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4. \u05D9\u05D5\u05E2\u05E6\u05EA \u05DE\u05D5\u05E8\u05E9\u05D9\u05EA \u05E2\u05DD \u05D9\u05D5\u05EA\u05E8 \u05DE-9 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05E1\u05D9\u05D5\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D9\u05DD \u05D5\u05DE\u05E9\u05E4\u05D7\u05D5\u05EA \u05DC\u05D1\u05E0\u05D5\u05EA \u05D0\u05EA \u05E2\u05EA\u05D9\u05D3\u05DD \u05D1\u05E7\u05E0\u05D3\u05D4.',
    fPages: '\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD',
    fMore: '\u05E2\u05D5\u05D3',
    fContact: '\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8',
    fPayment: '\u05D1\u05E6\u05E2 \u05EA\u05E9\u05DC\u05D5\u05DD',
    fPrivacy: '\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA',
    fDisclaimer: '\u05D4\u05E6\u05D4\u05E8\u05EA \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA',
    fSend: '\u05E9\u05DC\u05D7 \u05D4\u05D5\u05D3\u05E2\u05D4 \u2190',
    fCopy: '\u00A9 2025 LANA Immigration Consulting Services Canada. \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA.',
    fPrivStmt: '\u05D4\u05E6\u05D4\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA',
    fAboutCanada: '\u05E2\u05DC \u05E7\u05E0\u05D3\u05D4',
    fDiscNote: '\u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05DC\u05DE\u05D8\u05E8\u05D5\u05EA \u05DE\u05D9\u05D3\u05E2 \u05DB\u05DC\u05DC\u05D9\u05D5\u05EA \u05D1\u05DC\u05D1\u05D3 \u05D5\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9. \u05DB\u05DC\u05DC\u05D9 \u05D4\u05D4\u05D2\u05D9\u05E8\u05D4 \u05DE\u05E9\u05EA\u05E0\u05D9\u05DD \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D5\u05EA.',
    fVerify: '\u05D0\u05DE\u05EA\u05D5 \u05D0\u05EA \u05D4\u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E9\u05DC\u05E0\u05D5 (CICC) \u2197',
    fFAQ: '\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA',
    fServiceArea: '\u2190 \u05D4\u05DE\u05E9\u05E8\u05D3 \u05DE\u05DE\u05D5\u05E7\u05DD \u05D1\u05E8\u05D9\u05E5\'\u05DE\u05D5\u05E0\u05D3 \u05D4\u05D9\u05DC, \u05D0\u05D5\u05E0\u05D8\u05E8\u05D9\u05D5'
  }
};

/* ---------- Language helpers ---------- */

function getCurrentLang() {
  return document.documentElement.lang || 'en';
}

function switchLang(targetLang) {
  var bp = window.basePath || '';
  var prefix = (targetLang === 'en') ? '' : targetLang + '/';
  window.location.href = bp + prefix + (window.pagePath || 'index.html');
}

/* Tap/click toggle for the language menu (needed on touch devices, where
   there is no :hover). Desktop still gets hover via @media (hover: hover). */
function toggleLangMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  var sel = e.currentTarget.closest('.lang-selector');
  if (sel) sel.classList.toggle('open');
}

/* Close the open language menu when tapping/clicking anywhere outside it.
   Delegated on document so it works regardless of when the header renders. */
document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-selector')) {
    var open = document.querySelector('.lang-selector.open');
    if (open) open.classList.remove('open');
  }
});

/* ---------- Header ---------- */

function renderHeader() {
  var lang = getCurrentLang();
  var t = T[lang] || T.en;
  var bp = window.basePath || '';
  var lb = window.langBase || '';
  var activeNav = document.body.getAttribute('data-active-nav') || '';

  var langLabels = { en: 'EN', fr: 'FR', ru: 'RU', he: 'HE' };

  var navHtml = NAV_HREFS.map(function(href, i) {
    var isActive = href === activeNav;
    return '    <a href="' + lb + href + '"' + (isActive ? ' class="active"' : '') + '>' + t.nav[i] + '</a>';
  }).join('\n');

  var html =
    '<header class="header" id="site-header">\n' +
    '  <div class="logo-area">\n' +
    '    <img src="' + bp + 'images/logo.avif" alt="LANA Immigration" />\n' +
    '    <div class="header-controls">\n' +
    '      <div class="header-buttons">\n' +
    '        <a href="" onclick="openBookingModal();return false;" class="header-book-btn" data-cta="book-header">' + t.bookBtn + '</a>\n' +
    '        <a href="' + lb + 'assessment.html" class="header-assess-btn" data-cta="assessment-header">' + t.contactLink + '</a>\n' +
    '      </div>\n' +
    '      <div class="lang-selector">\n' +
    '        <div class="lang-toggle" role="button" tabindex="0" aria-haspopup="true" onclick="toggleLangMenu(event)" onkeydown="if(event.key===\'Enter\'||event.key===\' \')toggleLangMenu(event)">\n' +
    '          \uD83C\uDF10 <span class="lang-label">' + langLabels[lang] + '</span> <span class="lang-arrow">\u25BC</span>\n' +
    '        </div>\n' +
    '        <div class="lang-dropdown">\n' +
    '          <a href="#" class="lang-option' + (lang === 'en' ? ' active' : '') + '" onclick="switchLang(\'en\');return false;"><span class="lang-flag">\uD83C\uDDE8\uD83C\uDDE6</span> English</a>\n' +
    '          <a href="#" class="lang-option' + (lang === 'fr' ? ' active' : '') + '" onclick="switchLang(\'fr\');return false;"><span class="lang-flag">\uD83C\uDDEB\uD83C\uDDF7</span> Fran\u00E7ais</a>\n' +
    '          <a href="#" class="lang-option' + (lang === 'ru' ? ' active' : '') + '" onclick="switchLang(\'ru\');return false;"><span class="lang-flag">\uD83C\uDDF7\uD83C\uDDFA</span> \u0420\u0443\u0441\u0441\u043A\u0438\u0439</a>\n' +
    '          <a href="#" class="lang-option' + (lang === 'he' ? ' active' : '') + '" onclick="switchLang(\'he\');return false;"><span class="lang-flag">\uD83C\uDDEE\uD83C\uDDF1</span> \u05E2\u05D1\u05E8\u05D9\u05EA</a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <nav class="nav-bar">\n' +
    navHtml + '\n' +
    '  </nav>\n' +
    '</header>';

  document.getElementById('site-header').outerHTML = html;
}

/* ---------- Footer ---------- */

function renderFooter() {
  var lang = getCurrentLang();
  var t = T[lang] || T.en;
  var bp = window.basePath || '';
  var lb = window.langBase || '';

  var html =
    '<footer class="footer" id="site-footer">\n' +
    '  <div class="footer-skyline-placeholder">\n' +
    '    <img src="' + bp + 'images/image.webp" alt="" class="skyline-svg">\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="footer-content">\n' +
    '    <div class="footer-brand">\n' +
    '      <div class="footer-logo-wrap">\n' +
    '        <img src="' + bp + 'images/logo.avif" alt="LANA Immigration" />\n' +
    '      </div>\n' +
    '      <p class="footer-tagline">' + t.tagline + '</p>\n' +
    '      <div class="social-links">\n' +
    '        <a href="https://www.facebook.com/lanacanadaimm" title="Facebook" target="_blank" rel="noopener">f</a>\n' +
    '        <a href="https://www.youtube.com/@lanaimmigrationconsultings448" title="YouTube" target="_blank" rel="noopener">\u25B6</a>\n' +
    '        <a href="https://www.linkedin.com/company/29361455/" title="LinkedIn" target="_blank" rel="noopener">in</a>\n' +
    '        <a href="https://x.com/lanacanadaimm" title="X" target="_blank" rel="noopener">\uD835\uDD4F</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="footer-col">\n' +
    '      <h4>' + t.fPages + '</h4>\n' +
    '      <a href="' + lb + 'why-work-with-consultant.html">' + t.nav[1] + '</a>\n' +
    '      <a href="' + lb + 'how-immigration-works.html">' + t.nav[2] + '</a>\n' +
    '      <a href="' + lb + 'citizenship.html">' + t.nav[3] + '</a>\n' +
    '      <a href="' + lb + 'coming-to-canada-temporarily.html">' + t.nav[4] + '</a>\n' +
    '      <a href="' + lb + 'blog/blog.html">' + t.nav[5] + '</a>\n' +
    '      <a href="' + lb + 'our-team.html">' + t.nav[7] + '</a>\n' +
    '    </div>\n' +
    '    <div class="footer-col">\n' +
    '      <h4>' + t.fMore + '</h4>\n' +
    '      <a href="' + lb + 'faq.html">' + t.fFAQ + '</a>\n' +
    '      <a href="' + lb + 'about-canada/about-canada.html">' + t.fAboutCanada + '</a>\n' +
    '      <a href="' + lb + 'payment.html">' + t.fPayment + '</a>\n' +
    '      <a href="' + lb + 'privacy-disclaimer.html">' + t.fPrivacy + '</a>\n' +
    '      <a href="' + lb + 'privacy-disclaimer.html">' + t.fDisclaimer + '</a>\n' +
    '      <a href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant?l=en-CA" target="_blank" rel="noopener">' + t.fVerify + '</a>\n' +
    '    </div>\n' +
    '    <div class="footer-col">\n' +
    '      <h4>' + t.fContact + '</h4>\n' +
    '      <p><a href="mailto:info@lanacanada.com" style="color:inherit;text-decoration:none;">\uD83D\uDCE7 info@lanacanada.com</a></p>\n' +
    '      <p><a href="https://wa.me/16479938862" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">\uD83D\uDCDE +1-(647)-993-8862<br><small>Cell / WhatsApp</small></a></p>\n' +
    '      <p><a href="https://maps.google.com/?q=10271+Yonge+St+Suite+318+Richmond+Hill+ON+L4C+3B5" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">\uD83D\uDCCD 10271 Yonge St, Suite 318,<br>Richmond Hill, ON L4C 3B5</a></p>\n' +
    '      <p style="font-size:12px;"><a href="' + lb + 'immigration-consultant-richmond-hill.html" style="color:rgba(255,255,255,0.6);">' + t.fServiceArea + '</a></p>\n' +
    '      <a href="' + lb + 'contact.html" data-cta="contact-footer" style="margin-top:10px; color: #6AA3CC; font-weight:600;">' + t.fSend + '</a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="footer-bottom">\n' +
    '    <div class="footer-disclaimer">' + t.fDiscNote + '</div>\n' +
    '    ' + t.fCopy + ' | <a href="' + lb + 'privacy-disclaimer.html">' + t.fPrivStmt + '</a> | <a href="' + lb + 'privacy-disclaimer.html">' + t.fDisclaimer + '</a>\n' +
    '  </div>\n' +
    '</footer>';

  document.getElementById('site-footer').outerHTML = html;
}

/* ===== BOOK A CONSULTATION MODAL =====
   Every "Book a Consultation" button calls openBookingModal(). The modal lets
   the visitor pick a 60- or 30-minute consultation; each option links to its
   own Jotform booking form. Edit BOOKING_FORMS to change the form links.
   The same two options render inline into any <div data-booking-options>
   (used on the contact pages). */

var BOOKING_FORMS = {
  complex: 'https://form.jotform.com/262663180092052',
  initial: 'https://form.jotform.com/262664630444256'
};

var BOOKING_T = {
  en: {
    title: 'Book a Consultation',
    sub: 'Choose the consultation that best fits your needs.',
    close: 'Close',
    cta: 'Continue to booking form \u2192',
    dur60: 'Up to 60 minutes',
    dur30: 'Up to 30 minutes',
    t60: 'Complex Immigration Consultation',
    t30: 'Initial Immigration Guidance',
    meta60: '$180 CAD \u00B7 Web conferencing details provided upon confirmation',
    meta30: '$100 CAD \u00B7 Web conferencing details provided upon confirmation',
    d60: 'For complex immigration or citizenship matters requiring a detailed strategy, multiple issues review, and a comprehensive assessment with structured next steps.',
    d30: 'For clients seeking initial immigration guidance or questions, it excludes detailed strategy, document review, and application preparation.'
  },
  fr: {
    title: 'R\u00E9server une consultation',
    sub: 'Choisissez la consultation qui correspond le mieux \u00E0 vos besoins.',
    close: 'Fermer',
    cta: 'Continuer vers le formulaire \u2192',
    dur60: 'Jusqu\'\u00E0 60 minutes',
    dur30: 'Jusqu\'\u00E0 30 minutes',
    t60: 'Consultation d\'immigration complexe',
    t30: 'Orientation initiale en immigration',
    meta60: '180 $ CAD \u00B7 Les d\u00E9tails de la visioconf\u00E9rence sont fournis \u00E0 la confirmation',
    meta30: '100 $ CAD \u00B7 Les d\u00E9tails de la visioconf\u00E9rence sont fournis \u00E0 la confirmation',
    d60: 'Pour les dossiers complexes d\'immigration ou de citoyennet\u00E9 n\u00E9cessitant une strat\u00E9gie d\u00E9taill\u00E9e, l\'examen de plusieurs questions et une \u00E9valuation compl\u00E8te avec des prochaines \u00E9tapes structur\u00E9es.',
    d30: 'Pour les clients qui recherchent une orientation initiale ou ont des questions en immigration. Exclut la strat\u00E9gie d\u00E9taill\u00E9e, l\'examen de documents et la pr\u00E9paration de demandes.'
  },
  ru: {
    title: '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E',
    sub: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438.',
    close: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
    cta: '\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0444\u043E\u0440\u043C\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u2192',
    dur60: '\u0414\u043E 60 \u043C\u0438\u043D\u0443\u0442',
    dur30: '\u0414\u043E 30 \u043C\u0438\u043D\u0443\u0442',
    t60: '\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u0438\u043C\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F',
    t30: '\u041F\u0435\u0440\u0432\u0438\u0447\u043D\u0430\u044F \u0438\u043C\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F',
    meta60: '$180 CAD \u00B7 \u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0438\u0434\u0435\u043E\u0441\u0432\u044F\u0437\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F',
    meta30: '$100 CAD \u00B7 \u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0438\u0434\u0435\u043E\u0441\u0432\u044F\u0437\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F',
    d60: '\u0414\u043B\u044F \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u043C\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u0430, \u0442\u0440\u0435\u0431\u0443\u044E\u0449\u0438\u0445 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438 \u0432\u0441\u0435\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u0439 \u043E\u0446\u0435\u043D\u043A\u0438 \u0441 \u0447\u0451\u0442\u043A\u0438\u043C\u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u043C\u0438 \u0448\u0430\u0433\u0430\u043C\u0438.',
    d30: '\u0414\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043D\u0443\u0436\u043D\u0430 \u043F\u0435\u0440\u0432\u0438\u0447\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0438\u043B\u0438 \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0438\u043C\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438. \u041D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E, \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0443 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0439.'
  },
  he: {
    title: '\u05E7\u05D1\u05D9\u05E2\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5',
    sub: '\u05D1\u05D7\u05E8\u05D5 \u05D0\u05EA \u05E1\u05D5\u05D2 \u05D4\u05D9\u05D9\u05E2\u05D5\u05E5 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DC\u05E6\u05E8\u05DB\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD.',
    close: '\u05E1\u05D2\u05D9\u05E8\u05D4',
    cta: '\u05D4\u05DE\u05E9\u05DA \u05DC\u05D8\u05D5\u05E4\u05E1 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u2190',
    dur60: '\u05E2\u05D3 60 \u05D3\u05E7\u05D5\u05EA',
    dur30: '\u05E2\u05D3 30 \u05D3\u05E7\u05D5\u05EA',
    t60: '\u05D9\u05D9\u05E2\u05D5\u05E5 \u05D4\u05D2\u05D9\u05E8\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1',
    t30: '\u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05EA \u05D1\u05D4\u05D2\u05D9\u05E8\u05D4',
    meta60: '$180 CAD \u00B7 \u05E4\u05E8\u05D8\u05D9 \u05E9\u05D9\u05D7\u05EA \u05D4\u05D5\u05D5\u05D9\u05D3\u05D0\u05D5 \u05D9\u05D9\u05E9\u05DC\u05D7\u05D5 \u05E2\u05DD \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4',
    meta30: '$100 CAD \u00B7 \u05E4\u05E8\u05D8\u05D9 \u05E9\u05D9\u05D7\u05EA \u05D4\u05D5\u05D5\u05D9\u05D3\u05D0\u05D5 \u05D9\u05D9\u05E9\u05DC\u05D7\u05D5 \u05E2\u05DD \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4',
    d60: '\u05DC\u05E2\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DE\u05D5\u05E8\u05DB\u05D1\u05D9\u05DD \u05E9\u05DC \u05D4\u05D2\u05D9\u05E8\u05D4 \u05D0\u05D5 \u05D0\u05D6\u05E8\u05D7\u05D5\u05EA \u05D4\u05D3\u05D5\u05E8\u05E9\u05D9\u05DD \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D4 \u05DE\u05E4\u05D5\u05E8\u05D8\u05EA, \u05D1\u05D7\u05D9\u05E0\u05D4 \u05E9\u05DC \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05D5\u05D4\u05E2\u05E8\u05DB\u05D4 \u05DE\u05E7\u05D9\u05E4\u05D4 \u05E2\u05DD \u05E6\u05E2\u05D3\u05D9 \u05D4\u05DE\u05E9\u05DA \u05DE\u05D5\u05D1\u05E0\u05D9\u05DD.',
    d30: '\u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D4\u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05EA \u05D0\u05D5 \u05DE\u05E2\u05E0\u05D4 \u05DC\u05E9\u05D0\u05DC\u05D5\u05EA \u05D1\u05E0\u05D5\u05E9\u05D0 \u05D4\u05D2\u05D9\u05E8\u05D4. \u05D0\u05D9\u05E0\u05D5 \u05DB\u05D5\u05DC\u05DC \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D4 \u05DE\u05E4\u05D5\u05E8\u05D8\u05EA, \u05D1\u05D3\u05D9\u05E7\u05EA \u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05D0\u05D5 \u05D4\u05DB\u05E0\u05EA \u05D1\u05E7\u05E9\u05D5\u05EA.'
  }
};

function bookingOptionsHtml() {
  var t = BOOKING_T[getCurrentLang()] || BOOKING_T.en;

  function option(key, title, dur, meta, desc) {
    return '' +
      '      <a class="booking-option" href="' + BOOKING_FORMS[key] + '" target="_blank" rel="noopener" data-booking-option="' + key + '">\n' +
      '        <span class="booking-option-dur">' + dur + '</span>\n' +
      '        <span class="booking-option-title">' + title + '</span>\n' +
      '        <span class="booking-option-meta">' + meta + '</span>\n' +
      '        <span class="booking-option-desc">' + desc + '</span>\n' +
      '        <span class="booking-option-cta">' + t.cta + '</span>\n' +
      '      </a>\n';
  }

  return option('complex', t.t60, t.dur60, t.meta60, t.d60) +
         option('initial', t.t30, t.dur30, t.meta30, t.d30);
}

function buildBookingModal() {
  var t = BOOKING_T[getCurrentLang()] || BOOKING_T.en;
  var el = document.createElement('div');
  el.className = 'booking-modal';
  el.id = 'booking-modal';
  el.setAttribute('hidden', '');
  el.innerHTML =
    '  <div class="booking-modal-backdrop" data-booking-close></div>\n' +
    '  <div class="booking-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">\n' +
    '    <button type="button" class="booking-modal-close" data-booking-close aria-label="' + t.close + '">&times;</button>\n' +
    '    <h2 class="booking-modal-title" id="booking-modal-title">' + t.title + '</h2>\n' +
    '    <p class="booking-modal-sub">' + t.sub + '</p>\n' +
    '    <div class="booking-options">\n' +
    bookingOptionsHtml() +
    '    </div>\n' +
    '  </div>\n';

  el.addEventListener('click', function(e) {
    if (e.target.closest('[data-booking-close]')) closeBookingModal();
    else if (e.target.closest('.booking-option')) setTimeout(closeBookingModal, 0);
  });
  document.body.appendChild(el);
  return el;
}

var bookingLastFocus = null;

function openBookingModal() {
  var el = document.getElementById('booking-modal') || buildBookingModal();
  bookingLastFocus = document.activeElement;
  el.removeAttribute('hidden');
  document.documentElement.classList.add('booking-modal-open');
  el.querySelector('.booking-option').focus();
}

function closeBookingModal() {
  var el = document.getElementById('booking-modal');
  if (!el || el.hasAttribute('hidden')) return;
  el.setAttribute('hidden', '');
  document.documentElement.classList.remove('booking-modal-open');
  if (bookingLastFocus && bookingLastFocus.focus) bookingLastFocus.focus();
}

function renderBookingOptions() {
  var slots = document.querySelectorAll('[data-booking-options]');
  for (var i = 0; i < slots.length; i++) slots[i].innerHTML = bookingOptionsHtml();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderBookingOptions);
} else {
  renderBookingOptions();
}

/* Esc closes the modal; Tab stays inside it while open. */
document.addEventListener('keydown', function(e) {
  var el = document.getElementById('booking-modal');
  if (!el || el.hasAttribute('hidden')) return;
  if (e.key === 'Escape') {
    closeBookingModal();
  } else if (e.key === 'Tab') {
    var f = el.querySelectorAll('a[href], button');
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ===== GA4 CONVERSION EVENT TRACKING (G-DV0T86SZ21) =====
   The gtag stub is defined inline at the top of every page's <head>, before
   this script runs, so gtag() always exists — track() keeps a dataLayer
   fallback anyway in case a page ever loads this script first.

   Events:
     consultation_click  — any button/link that opens the booking modal
     consultation_option — visitor picks a consultation (Jotform), in the modal
                           or on the contact page
     contact_submit      — Formspree contact form submitted
     assessment_start    — user focuses into the casecloud assessment iframe
     assessment_complete — best-effort: completion message from the iframe
     cta_click           — any other element carrying a data-cta label
*/

function track(eventName, params) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params || {});
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push((function() { return arguments; })('event', eventName, params || {}));
  }
}

function trackParams(extra) {
  var p = {
    page_path: location.pathname,
    language: document.documentElement.lang || 'en'
  };
  if (extra) { for (var k in extra) { p[k] = extra[k]; } }
  return p;
}

/* Where on the page a CTA lives: an explicit data-cta label wins, otherwise
   derive from the enclosing section so hand-written pages need no edits. */
function ctaLocationOf(el) {
  var explicit = el.getAttribute('data-cta') || el.getAttribute('data-cta-location');
  if (explicit) return explicit;
  if (el.classList.contains('header-book-btn')) return 'header';
  if (el.closest('.mid-cta-box')) return 'mid-cta-box';
  var sec = el.closest('section, header, footer');
  if (sec && sec.className) return String(sec.className).split(/\s+/)[0];
  return 'unknown';
}

document.addEventListener('click', function(e) {
  if (!e.target || !e.target.closest) return;
  var opt = e.target.closest('[data-booking-option]');
  if (opt) {
    track('consultation_option', trackParams({ consultation_type: opt.getAttribute('data-booking-option') }));
    return;
  }
  var cal = e.target.closest('a[onclick*="openBookingModal"]');
  if (cal) {
    track('consultation_click', trackParams({ cta_location: ctaLocationOf(cal) }));
    return;
  }
  var cta = e.target.closest('[data-cta]');
  if (cta) {
    track('cta_click', trackParams({ cta_label: cta.getAttribute('data-cta') }));
  }
});

/* Contact form (Formspree) — delegated so all four languages are covered. */
document.addEventListener('submit', function(e) {
  var form = e.target && e.target.closest && e.target.closest('form[action*="formspree.io"]');
  if (form) {
    track('contact_submit', trackParams());
  }
});

/* The self-assessment is a cross-origin iframe (app.casecloud.ca), so
   individual questions aren't observable from the parent page. */
function initAssessmentTracking() {
  var frame = document.querySelector('.assessment-frame');
  if (!frame) return;

  /* assessment_start — the first time keyboard/mouse focus moves into the
     iframe, the parent window fires blur with the iframe as activeElement. */
  var started = false;
  window.addEventListener('blur', function() {
    setTimeout(function() {
      if (!started && document.activeElement === frame) {
        started = true;
        track('assessment_start', trackParams());
      }
    }, 0);
  });

  /* assessment_complete — casecloud is a third-party app; if it posts a
     completion-shaped message we catch it. Verify in GA4 DebugView. */
  var completed = false;
  window.addEventListener('message', function(e) {
    if (completed || !/^https:\/\/([a-z0-9-]+\.)?casecloud\.ca$/.test(e.origin)) return;
    var text;
    try { text = typeof e.data === 'string' ? e.data : JSON.stringify(e.data); } catch (err) { return; }
    if (text && /(complete|submitted|finished)/i.test(text) && !/autocomplete/i.test(text)) {
      completed = true;
      track('assessment_complete', trackParams());
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAssessmentTracking);
} else {
  initAssessmentTracking();
}
