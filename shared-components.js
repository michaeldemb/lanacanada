/* ===== SHARED HEADER & FOOTER =====
   Edit this file to update the header or footer across all pages.
   Each page calls renderHeader() and renderFooter() via inline <script> tags.
   The active nav link is determined by the data-active-nav attribute on <body>.
*/

function renderHeader() {
  var activeNav = document.body.getAttribute('data-active-nav') || '';

  var navLinks = [
    { href: 'index.html', text: 'Home' },
    { href: 'why-work-with-consultant.html', text: 'Why Work With a Consultant' },
    { href: 'how-immigration-works.html', text: 'How Immigration Works' },
    { href: '#', text: 'Citizenship' },
    { href: 'coming-to-canada-temporarily.html', text: 'Coming to Canada Temporarily' },
    { href: 'blog.html', text: 'Blog &amp; News' },
    { href: 'testimonials.html', text: 'Testimonials' },
    { href: 'contact.html', text: 'Contact Us' },
    { href: 'payment.html', text: 'Make a Payment' }
  ];

  var navHtml = navLinks.map(function(link) {
    var isActive = link.href === activeNav;
    return '    <a href="' + link.href + '"' + (isActive ? ' class="active"' : '') + '>' + link.text + '</a>';
  }).join('\n');

  var html =
    '<header class="header">\n' +
    '  <div class="logo-area">\n' +
    '    <img src="logo.avif" alt="LANA Immigration" />\n' +
    '    <div class="header-controls">\n' +
    '      <a href="" onclick="Calendly.initPopupWidget({url:\'https://calendly.com/YOUR_USERNAME/consultation\'});return false;" class="header-book-btn">Book a Consultation \u2192</a>\n' +
    '      <div class="lang-selector">\n' +
    '        <div class="lang-toggle">\n' +
    '          \uD83C\uDF10 <span class="lang-label">EN</span> <span class="lang-arrow">\u25BC</span>\n' +
    '        </div>\n' +
    '        <div class="lang-dropdown">\n' +
    '          <a href="#" class="lang-option active"><span class="lang-flag">\uD83C\uDDE8\uD83C\uDDE6</span> English</a>\n' +
    '          <a href="#" class="lang-option"><span class="lang-flag">\uD83C\uDDEB\uD83C\uDDF7</span> Fran\u00E7ais</a>\n' +
    '          <a href="#" class="lang-option"><span class="lang-flag">\uD83C\uDDF7\uD83C\uDDFA</span> \u0420\u0443\u0441\u0441\u043A\u0438\u0439</a>\n' +
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

function renderFooter() {
  var html =
    '<footer class="footer">\n' +
    '  <div class="footer-skyline-placeholder">\n' +
    '    <img src="footer.avif" alt="" class="skyline-svg">\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="footer-content">\n' +
    '    <div class="footer-brand">\n' +
    '      <div class="footer-logo-wrap">\n' +
    '        <img src="logo.avif" alt="LANA Immigration" />\n' +
    '      </div>\n' +
    '      <p class="footer-tagline">Immigration Done Right. Licensed consultant with 9+ years of experience helping individuals and families build their future in Canada.</p>\n' +
    '      <div class="social-links">\n' +
    '        <a href="#" title="Facebook">f</a>\n' +
    '        <a href="#" title="YouTube">\u25B6</a>\n' +
    '        <a href="#" title="LinkedIn">in</a>\n' +
    '        <a href="#" title="Twitter">\uD835\uDD4F</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="footer-col">\n' +
    '      <h4>Pages</h4>\n' +
    '      <a href="why-work-with-consultant.html">Why Work With a Consultant</a>\n' +
    '      <a href="how-immigration-works.html">How Immigration Works</a>\n' +
    '      <a href="#">Citizenship</a>\n' +
    '      <a href="coming-to-canada-temporarily.html">Coming to Canada Temporarily</a>\n' +
    '      <a href="blog.html">Blog &amp; News</a>\n' +
    '    </div>\n' +
    '    <div class="footer-col">\n' +
    '      <h4>More</h4>\n' +
    '      <a href="testimonials.html">Testimonials &amp; Stories</a>\n' +
    '      <a href="payment.html">Make a Payment</a>\n' +
    '      <a href="#">Resources</a>\n' +
    '      <a href="#">About Canada</a>\n' +
    '      <a href="privacy-disclaimer.html">Privacy Policy</a>\n' +
    '      <a href="privacy-disclaimer.html">Disclaimer</a>\n' +
    '    </div>\n' +
    '    <div class="footer-col">\n' +
    '      <h4>Contact</h4>\n' +
    '      <p>\uD83D\uDCE7 info@lanacanada.com</p>\n' +
    '      <p>\uD83D\uDCDE +1-(647)-993-8862</p>\n' +
    '      <p>\uD83D\uDCCD Canada</p>\n' +
    '      <a href="contact.html" style="margin-top:10px; color: #3AAFAF; font-weight:600;">Send a Message \u2192</a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="footer-bottom">\n' +
    '    \u00A9 2025 LANA Immigration Consulting Services Canada. All rights reserved. | <a href="privacy-disclaimer.html">Privacy Statement</a> | <a href="privacy-disclaimer.html">Disclaimer</a>\n' +
    '  </div>\n' +
    '</footer>';

  document.getElementById('site-footer').outerHTML = html;
}
