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
    fFAQ: 'FAQ'
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
    fFAQ: 'Foire aux Questions'
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
    fFAQ: '\u0427\u0430\u0441\u0442\u044B\u0435 \u0412\u043E\u043F\u0440\u043E\u0441\u044B'
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
    fFAQ: '\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA'
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
    '        <a href="" onclick="Calendly.initPopupWidget({url:\'https://calendly.com/lanaimmigration/\'});return false;" class="header-book-btn">' + t.bookBtn + '</a>\n' +
    '        <a href="' + lb + 'assessment.html" class="header-assess-btn">' + t.contactLink + '</a>\n' +
    '      </div>\n' +
    '      <div class="lang-selector">\n' +
    '        <div class="lang-toggle">\n' +
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
    '    <img src="' + bp + 'images/footer.jpeg" alt="" class="skyline-svg">\n' +
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
    '      <a href="' + lb + 'contact.html" style="margin-top:10px; color: #6AA3CC; font-weight:600;">' + t.fSend + '</a>\n' +
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
