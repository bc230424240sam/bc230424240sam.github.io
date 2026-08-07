const fs = require('fs');
const files = [
  'ecommerce-keyword-research.md',
  'content-marketing-ecommerce.md',
  'building-backlinks-ecommerce.md',
  'ecommerce-seo-mistakes-to-avoid.md',
  'future-of-ecommerce-seo.md'
];
files.forEach(f => {
  const p = 'src/content/blog/' + f;
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/category: "Shopify"/, 'category: "E-Commerce"');
  fs.writeFileSync(p, c);
  console.log('Fixed ' + f);
});
