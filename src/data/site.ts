// ═══════════════════════════════════════
// Single source of truth for ALL content.
// Astro generates both modals AND standalone
// SEO pages from this data. Edit once.
// ═══════════════════════════════════════

export const siteConfig = {
  title: 'Shahid Hocien — 3D Website Developer | SEO | WordPress & Shopify Expert',
  description:
    'Shahid Hocien is a Microsoft & Google Certified 3D Website Developer and Full Stack Web Expert. Specializing in WebGL, Three.js, WordPress, Shopify, and technical SEO optimization.',
  url: 'https://hocien.me',
  image: '/pic1.webp',
  email: 'shahidhocien@gmail.com',
  phone: '+92-313-3185033',
  whatsapp: 'https://wa.me/923133185033?text=Hi%20Shahid!%20I%20am%20interested%20in%20starting%20a%20project%20with%20you.',
  social: {
    facebook: 'https://www.facebook.com/Shahid.hussain.hashmi/',
    linkedin: 'https://www.linkedin.com/in/shahidhussain1/',
    instagram: 'https://www.instagram.com/shahidhussain3345/',
    github: 'https://github.com/imhocien',
    upwork: 'https://upwork.com/freelancers/shahidh22',
  },
  resume: '/Shahid_Hocien_Resume_2026.pdf',
};

export interface Section {
  slug: string; // URL slug e.g. "about"
  tag: string; // "SYS // NODE 0x01"
  title: string;
  description: string;
  meta: string;
  contentHtml: string; // HTML body
}

export const faqItems = [
  { q: 'Who is Shahid Hocien?', a: 'Shahid Hocien is a Microsoft & Google Certified Full Stack Developer with 10+ years of experience in WordPress, WooCommerce, Shopify, Wix, Webflow, SEO, and website security. He is based in Pakistan and works remotely with clients worldwide.' },
  { q: 'What web development services does Shahid Hocien offer?', a: 'He offers custom WordPress theme and plugin development, WooCommerce development and optimization, Shopify store development, Wix website design, Webflow design, website redesign and migration, Elementor development, AI automation, speed optimization, malware removal, technical SEO, API integrations, and ongoing maintenance.' },
  { q: 'How can I hire Shahid Hocien for my project?', a: 'You can contact Shahid Hocien by email at shahidhocien@gmail.com or WhatsApp at +92-313-3185033. He is open for new projects and works remotely with clients worldwide.' },
  { q: 'What platforms does Shahid Hocien work with?', a: 'Shahid Hocien works with WordPress, WooCommerce, Shopify, Wix, Webflow, and eLearning platforms. He also has experience with Laravel, PHP, React, Vue.js, and custom web development.' },
  { q: 'Is Shahid Hocien certified?', a: 'Yes. Shahid Hocien holds Microsoft Certified Developer certification, Google Analytics Individual Qualification, Google Creative Certification, Google Mobile Experience Certification, Google Display & Video 360 Certification, and HubSpot SEO Certification.' },
  { q: 'Does Shahid Hocien provide SEO services?', a: 'Yes, Shahid Hocien provides technical SEO services including on-page optimization, Core Web Vitals improvements, site speed optimization, schema markup, sitemap configuration, and SEO-friendly site architecture.' },
  { q: 'Can Shahid Hocien fix a hacked or infected WordPress site?', a: 'Yes. Shahid Hocien provides WordPress malware removal and website security services, including security hardening, malware cleanup, and ongoing protection.' },
  { q: 'What is the typical process for starting a project?', a: 'The process starts with a discussion about your project requirements. Then Shahid provides a plan and timeline, develops the solution, and provides ongoing support and maintenance after launch.' },
  { q: 'Does Shahid Hocien work with clients internationally?', a: 'Yes. Shahid Hocien is based in Pakistan and works remotely with clients worldwide, including clients in Europe, the USA, Australia, and Asia.' },
  { q: "What is Shahid Hocien's experience?", a: "Shahid Hocien has 10+ years of professional experience across 6 positions including THQ Developers, Multiply.io, Softech Ireland Dublin Ltd, NME Construction Management, Wodebox (China), and Matli Digital Software Production." },
];

export const sections: Section[] = [
  {
    slug: 'about',
    tag: 'SYS // NODE 0x01',
    title: '3D Website Developer | WordPress | Shopify | Full Stack Expert',
    description:
      'About Shahid Hocien — Microsoft & Google Certified 3D Website Developer and Full Stack Expert with 10+ years of experience building immersive WebGL, WordPress, and Shopify websites.',
    meta: '6 CERTIFICATIONS · 3D WEBSITES · GOOGLE · MICROSOFT',
    contentHtml: `<h2>Microsoft & Google Certified Developer</h2>
<p>I design and develop immersive, high-performance web experiences on all major platforms — <strong style="color:rgba(255,255,255,0.8);">Custom 3D Websites (Three.js/WebGL), WordPress, Shopify, and Webflow</strong>. Whether you need an interactive 3D portfolio, a custom theme, or a full eCommerce store, I deliver production-grade solutions that are fast, secure, and built to rank.</p>
<p>With 10+ years of experience as a <strong style="color:rgba(255,255,255,0.8);">3D Website Developer</strong> and Full Stack Engineer, I help businesses build, redesign, optimize, secure, and grow their digital presence without wasting time. Every project combines cutting-edge interactive design with clean code, technical SEO best practices, and security-first principles.</p>
<h2>Certifications & Achievements</h2>
<p><strong style="color:rgba(255,255,255,0.7);">Google Analytics Individual Qualification</strong><br><span style="color:rgba(255,255,255,0.6);font-size:12px;">Google · 2023 · ID: 76761843</span></p>
<p><strong style="color:rgba(255,255,255,0.7);">Google Creative Certification</strong><br><span style="color:rgba(255,255,255,0.6);font-size:12px;">Google · 2023 · ID: 76800870</span></p>
<p><strong style="color:rgba(255,255,255,0.7);">Google Mobile Experience Certification</strong><br><span style="color:rgba(255,255,255,0.6);font-size:12px;">Google · 2023 · ID: 76765057</span></p>
<p><strong style="color:rgba(255,255,255,0.7);">Google Display & Video 360 Certification</strong><br><span style="color:rgba(255,255,255,0.6);font-size:12px;">Google · 2023 · ID: 76802114</span></p>
<p><strong style="color:rgba(255,255,255,0.7);">Microsoft Certified Developer</strong><br><span style="color:rgba(255,255,255,0.6);font-size:12px;">Microsoft · 2013 · ID: E163-1932</span></p>
<p><strong style="color:rgba(255,255,255,0.7);">HubSpot Academy SEO Certification</strong><br><span style="color:rgba(255,255,255,0.6);font-size:12px;">HubSpot · 2023</span></p>`,
  },
  {
    slug: 'experience',
    tag: 'SYS // NODE 0x02',
    title: 'Working Experience',
    description:
      "Shahid Hocien's professional work experience — 10+ years as WordPress Theme & Plugin Developer, SEO & Web Security Specialist at THQ Developers, Multiply.io, Softech Ireland, and more.",
    meta: '6 POSITIONS · 10+ YEARS · THQ · SOF TECH · WODEBOX',
    contentHtml: `<h2>WordPress Theme & Plugin Developer, SEO & Web Security Specialist</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">THQ Developers · May 2023 — Present</span></p>
<p>Leading development team focusing on WordPress theme development, SEO optimization, and security. Overseeing developer recruitment, conducting technical interviews, managing tasks via Microsoft Planner, and mentoring junior developers.</p>
<h2>E-learning Developer, Front End Developer, WordPress Developer</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">Multiply.io · Oct 2022 — May 2023</span></p>
<p>Developed eLearning materials and maintained websites using Webflow, WIX, Shopify, and WordPress. Focused on front-end development and cross-team collaboration.</p>
<h2>Expert WordPress Developer, Web Administrator</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">Softech Ireland Dublin Ltd · Aug 2021 — Oct 2022</span></p>
<p>Developed WordPress projects, administered websites, managed hosting solutions, and collaborated with clients to deliver custom solutions.</p>
<h2>WordPress Developer & IT Support</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">NME Construction Management · Nov 2019 — Jul 2021</span></p>
<p>Developed WordPress solutions, provided IT support, maintained servers, and optimized website performance.</p>
<h2>WordPress Developer</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">Wodebox - China · Jan 2016 — Oct 2019</span></p>
<p>Developed custom WordPress theme solutions, maintained websites, and assisted in project management for international clients.</p>
<h2>WordPress & Magento Developer</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">Matli Digital Software Production · Mar 2011 — Jan 2016</span></p>
<p>Developed custom Magento and WordPress themes, created .NET front-end applications, provided customer support, and collaborated with development teams.</p>`,
  },
  {
    slug: 'services',
    tag: 'SYS // NODE 0x03',
    title: 'Services I Offer',
    description:
      'Professional web development services by Shahid Hocien — WordPress themes & plugins, WooCommerce, Shopify, Wix, Webflow, custom development, AI automation, SEO, speed optimization, malware removal & website security.',
    meta: 'WORDPRESS · SHOPIFY · WIX · WEBFLOW · AI · SEO',
    contentHtml: `<h2>I design and develop on all major platforms</h2>
<p>WordPress Themes & Plugins · WooCommerce · Shopify · Wix · Webflow</p>
<h3>What I Can Do For You</h3>
<p>• Custom WordPress Development<br>• WooCommerce Development & Optimization<br>• Shopify Store Development & Customization<br>• Wix Website Design & Development<br>• Webflow Design & Development<br>• Website Redesign & Migration<br>• Elementor & Custom Theme Development<br>• Custom Plugin Development<br>• AI Automation & ChatGPT Integration<br>• Website Speed Optimization (Core Web Vitals)<br>• WordPress Malware Removal & Security<br>• Technical SEO<br>• API Integrations<br>• Website Maintenance & Long-Term Support</p>
<h3>Technologies</h3>
<p><span style="color:rgba(255,255,255,0.7);">WordPress · WooCommerce · Shopify · Wix · Webflow · Elementor · Laravel · PHP · MySQL · JavaScript · React · Vue.js · HTML5 · CSS3 · REST APIs · Git · AI Automation · Technical SEO · Server Management</span></p>
<h3>Hire Me</h3>
<p><span style="color:rgba(255,255,255,0.7);">Email:</span> <a href="mailto:shahidhocien@gmail.com" style="color:#7fd8ff;text-decoration:none;border-bottom:1px solid rgba(120,200,255,0.3);">shahidhocien@gmail.com</a><br><span style="color:rgba(255,255,255,0.7);">Whatsapp:</span> <a href="https://wa.me/923133185033?text=Hi%20Shahid!%20I%20am%20interested%20in%20starting%20a%20project%20with%20you." target="_blank" style="color:#7fd8ff;text-decoration:none;border-bottom:1px solid rgba(120,200,255,0.3);">+92-313-3185033</a></p>`,
  },
  {
    slug: 'contact',
    tag: 'SYS // NODE 0x04',
    title: "Let's Start a New Project",
    description:
      'Contact Shahid Hocien — Microsoft & Google Certified Web Developer. Hire for WordPress, WooCommerce, Shopify, Wix, Webflow development, SEO, security & AI automation.',
    meta: 'shahidhocien@gmail.com · +92-313-3185033',
    contentHtml: `<p>Looking for a dependable developer who delivers secure, high-quality websites with clear communication? I'm open for new projects and ready to help bring your vision to life.</p>
<p>Based in Pakistan, working remotely with clients worldwide.</p>
<h2>Hire Me</h2>
<p><span style="color:rgba(255,255,255,0.7);">Email:</span> <a href="mailto:shahidhocien@gmail.com" style="color:#7fd8ff;text-decoration:none;border-bottom:1px solid rgba(120,200,255,0.3);">shahidhocien@gmail.com</a><br><span style="color:rgba(255,255,255,0.7);">Whatsapp:</span> <a href="https://wa.me/923133185033?text=Hi%20Shahid!%20I%20am%20interested%20in%20starting%20a%20project%20with%20you." target="_blank" style="color:#7fd8ff;text-decoration:none;border-bottom:1px solid rgba(120,200,255,0.3);">+92-313-3185033</a></p>
<h2>Download Resume</h2>
<p><a href="/Shahid_Hocien_Resume_2026.pdf" download style="display:inline-block;margin-top:4px;padding:8px 18px;border:1px solid rgba(120,200,255,0.3);border-radius:4px;color:#7fd8ff;text-decoration:none;font-size:13px;letter-spacing:1px;transition:all 0.3s;">DOWNLOAD CV</a></p>
<h2>Follow Me</h2>
<p><span style="display:inline-flex;gap:14px;margin-top:6px;">
<a href="https://www.facebook.com/Shahid.hussain.hashmi/" target="_blank" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;letter-spacing:1px;">FACEBOOK</a>
<a href="https://www.linkedin.com/in/shahidhussain1/" target="_blank" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;letter-spacing:1px;">LINKEDIN</a>
<a href="https://www.instagram.com/shahidhussain3345/" target="_blank" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;letter-spacing:1px;">INSTAGRAM</a>
<a href="https://github.com/imhocien" target="_blank" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;letter-spacing:1px;">GITHUB</a>
<a href="https://upwork.com/freelancers/shahidh22" target="_blank" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;letter-spacing:1px;">UPWORK</a>
</span></p>`,
  },
  {
    slug: 'portfolio',
    tag: 'SYS // NODE 0x05',
    title: 'Featured Projects',
    description:
      'Portfolio of Shahid Hocien — 17+ web development projects including WooCommerce marketplaces, Shopify stores, Wix shops, Webflow sites, multilingual WordPress builds, and eCommerce solutions.',
    meta: '17 PROJECTS · WORDPRESS · WOOCOMMERCE · WIX · WEBFLOW · SQUARESPACE',
    contentHtml: `<h2>Islami Check</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WooCommerce · Dokan · Multivendor</span><br>Multi-vendor WooCommerce marketplace with Dokan integration, multi-currency support, and complex product logic.<br><a href="https://islamicheck.de" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">islamicheck.de →</a></p>
<h2>Magic Sim</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WooCommerce · Multilingual · E-commerce</span><br>Full e-commerce store with WooCommerce, multilingual support, and custom checkout flow for a SIM card provider.<br><a href="https://www.magic-sim.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">magic-sim.com →</a></p>
<h2>The People Vs Coffee</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">Webflow · Barossa Valley Cafe</span><br>Webflow build for a Barossa Valley cafe with custom interactions, responsive design, and brand-aligned visuals.<br><a href="https://www.thepeoplevscoffee.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">thepeoplevscoffee.com →</a></p>
<h2>Riviera Events</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WordPress · WPML · Multilingual</span><br>Multilingual event management website built with WordPress and WPML, serving an international client base.<br><a href="https://rivieraevents.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">rivieraevents.com →</a></p>
<h2>Studio Website Conversion</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WordPress · Elementor</span><br>Converted a website design into a fully editable WordPress site using Elementor with responsive behavior across all devices.<br><a href="https://deltadumbwaiters.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">deltadumbwaiters.com →</a></p>
<h2>Wix Online Shop</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">Wix · E-commerce · Custom Layout</span><br>Designed and developed a modern Wix responsive website with integrated online shop, hero video header, and custom page layouts.<br><a href="https://studiosteps.co" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">studiosteps.co →</a></p>
<h2>Multilingual WPML Support</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WordPress · WPML · Elementor</span><br>Provided technical troubleshooting for a multilingual WooCommerce site, resolving Elementor translation sync issues.<br><a href="https://magic-sim.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">magic-sim.com →</a></p>
<h2>Born2BFree Apparel</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WooCommerce · E-commerce</span><br>Developed frontend for a WooCommerce apparel store with product listing, cart, checkout, and responsive design.<br><a href="https://born2bfreeapparel.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">born2bfreeapparel.com →</a></p>
<h2>Multilingual SEO Website</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WordPress · Multilingual · SEO</span><br>Implemented bilingual Spanish/English WordPress setup with SEO-optimized language structure for a chiropractic business.<br><a href="https://activaquiropractica.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">activaquiropractica.com →</a></p>
<h2>Arthur Adonis Store</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WooCommerce · Premium Baby Tableware</span><br>Modern WooCommerce eCommerce store for a premium baby tableware brand with conversion-focused design.<br><a href="https://arthuradonis.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">arthuradonis.com →</a></p>
<h2>Migration & Security Optimization</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WordPress · WooCommerce · Thrive Apprentice</span><br>Upgraded an existing blog with new theme, WooCommerce integration, course system merge, and security hardening.<br><a href="https://positivemeplease.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">positivemeplease.com →</a></p>
<h2>WayaHub Marketplace</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">Multi-Vendor · Performance Optimization</span><br>Performance optimization, server stability, and speed improvements for a multi-vendor marketplace platform.<br><a href="https://wayahub.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">wayahub.com →</a></p>
<h2>Futures-Unlocked Store</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WooCommerce · Membership</span><br>WooCommerce store with physical product sales, membership functionality, and conversion-focused design.<br><a href="https://futures-unlocked.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">futures-unlocked.com →</a></p>
<h2>Crimson Education</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WordPress · Education</span><br>Professional WordPress website for college career counseling services with clean, trustworthy design.<br><a href="https://www.crimsoneducation.org" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">crimsoneducation.org →</a></p>
<h2>The Co-llective Store</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WooCommerce · High-Converting</span><br>Conversion-focused WooCommerce store with optimized product structure and performance-driven approach.<br><a href="https://theco-llective.com" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">theco-llective.com →</a></p>
<h2>Dream Accounting</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">Squarespace · Personal Brand</span><br>Minimalist one-page personal brand website on Squarespace for a professional accounting persona.<br><a href="https://dreamaccounting.com.au" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">dreamaccounting.com.au →</a></p>
<h2>JH-Saikoku33</h2>
<p><span style="color:rgba(255,255,255,0.6);font-size:12px;">WordPress · CMS · Japanese</span><br>Japanese WordPress CMS with audio content posting, user registration, social auth, and search functionality.<br><a href="https://jh-saikoku33.jp" target="_blank" style="color:rgba(120,200,255,0.8);font-size:11px;text-decoration:none;">jh-saikoku33.jp →</a></p>`,
  },
  {
    slug: 'faq',
    tag: 'SYS // NODE 0x06',
    title: 'Frequently Asked Questions',
    description: 'Frequently asked questions about hiring Shahid Hocien.',
    meta: '10 QUESTIONS · HIRING · SERVICES · PROCESS · SEO',
    contentHtml: `<div class="faq-container">${faqItems.map(f => `<details class="faq-details" name="faq"><summary class="faq-summary">${f.q}<span class="faq-icon"></span></summary><div class="faq-content">${f.a}</div></details>`).join('')}</div>`,
  },
];

export interface PageLink {
  href: string;
  label: string;
}

export const pageLinks: PageLink[] = [
  { href: '/', label: 'Homepage' },
  { href: '/about/', label: 'About' },
  { href: '/experience/', label: 'Experience' },
  { href: '/services/', label: 'Services' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/blog/', label: 'Blog' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Hire Me' },
];


