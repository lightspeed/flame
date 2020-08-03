const fs = require('fs');

const baseCssClass = `
.cr-flag {
  width: 1rem;
  height: 0.75rem;
  vertical-align: text-bottom;
}
`;

fs.writeFileSync(`./src/Flag/flag.scss`, baseCssClass, 'utf8');
fs.writeFileSync(`./src/Flag/flag.css`, baseCssClass, 'utf8');
