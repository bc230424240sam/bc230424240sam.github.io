const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'content', 'blog');

// Reference map based on original slug -> original category mapping
const categoryMap = {
  // 3D Web
  'getting-started-with-threejs': '3D Web Development',
  'webgl-future-web-design': '3D Web Development',
  'interactive-3d-portfolios': '3D Web Development',
  'optimize-3d-web-performance': '3D Web Development',
  'threejs-vs-babylonjs': '3D Web Development',
  'react-three-fiber-guide': '3D Web Development',
  '3d-ecommerce-experiences': '3D Web Development',
  'beginners-guide-webgl-shaders': '3D Web Development',
  'interactive-storytelling-3d-web': '3D Web Development',
  'top-3d-website-examples': '3D Web Development',

  // WordPress
  'essential-wordpress-security': 'WordPress',
  'wordpress-theme-development': 'WordPress',
  'wordpress-performance-optimization': 'WordPress',
  'secure-plugin-development': 'WordPress',
  'headless-wordpress-rest-api': 'WordPress',
  'preventing-brute-force-attacks-wordpress': 'WordPress',
  'managing-wordpress-user-roles-permissions': 'WordPress',
  'wordpress-database-optimization': 'WordPress',
  'securing-wp-admin-login': 'WordPress',
  'future-of-wordpress-development': 'WordPress',

  // Shopify
  'shopify-seo-best-practices': 'Shopify',
  'ecommerce-keyword-research': 'Shopify',
  'optimizing-shopify-product-pages': 'Shopify',
  'shopify-site-speed-seo': 'Shopify',
  'content-marketing-ecommerce': 'Shopify',
  'technical-seo-for-shopify': 'Shopify',
  'building-backlinks-ecommerce': 'Shopify',
  'local-seo-for-shopify': 'Shopify',
  'ecommerce-seo-mistakes-to-avoid': 'Shopify',
  'future-of-ecommerce-seo': 'Shopify',

  // Wix & Webflow
  'webflow-ultimate-custom-web-design': 'Webflow',
  'maximizing-conversion-rates-wix-website': 'Wix',
  'wix-vs-webflow-comparison-business': 'Wix & Webflow',
  'webflow-design-trends-conversions-2026': 'Webflow',
  'essential-seo-strategies-wix-websites': 'Wix',
  'ecommerce-conversions-why-webflow-future': 'Webflow',
  'designing-high-converting-landing-pages-wix': 'Wix',
  'psychology-of-color-webflow-wix-design': 'Wix & Webflow',
  'top-plugins-integrations-wix-conversions': 'Wix',
  'webflow-seo-ultimate-guide-ranking-higher': 'Webflow',

  // Technical SEO
  'site-speed-core-web-vitals': 'Technical SEO',
  'mobile-first-indexing': 'Technical SEO',
  'crawlability-and-indexability': 'Technical SEO',
  'structured-data-and-schema-markup': 'Technical SEO',
  'canonicalization-and-duplicate-content': 'Technical SEO',
  'hreflang-and-international-seo': 'Technical SEO',
  'https-and-website-security': 'Technical SEO',
  'javascript-seo-and-rendering-csr-vs-ssr': 'Technical SEO',
  'site-architecture-and-internal-linking': 'Technical SEO',
  'xml-sitemaps-and-robots-txt': 'Technical SEO',

  // Security & Speed
  'understanding-core-web-vitals': 'Performance & Security',
  'importance-of-https-and-ssl': 'Performance & Security',
  'optimizing-largest-contentful-paint': 'Performance & Security',
  'mitigating-cross-site-scripting-xss': 'Performance & Security',
  'improving-cumulative-layout-shift': 'Performance & Security',
  'content-security-policy-guide': 'Performance & Security',
  'mastering-first-input-delay-inp': 'Performance & Security',
  'ddos-protection-for-modern-websites': 'Performance & Security',
  'image-optimization-for-speed': 'Performance & Security',
  'secure-headers-best-practices': 'Performance & Security',
  
  // Originals
  'core-web-vitals-guide': 'SEO',
  'shopify-vs-woocommerce': 'Shopify',
  'how-to-hire-wordpress-developer': 'Hiring',
  'wordpress-security-checklist': 'Security'
};

const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(targetDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Match the frontmatter block
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return;

  const slug = file.replace('.md', '');
  const correctCat = categoryMap[slug];

  if (correctCat) {
    const frontmatter = match[1];
    // Replace the old category
    const newFrontmatter = frontmatter.replace(/category:\s*".*?"/, `category: "${correctCat}"`);
    content = content.replace(frontmatter, newFrontmatter);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Reverted ${file} -> Category: ${correctCat}`);
  }
});
