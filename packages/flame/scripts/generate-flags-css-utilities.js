const fs = require('fs');

const baseCssClass = `
.cr-flag {
  width: 1rem;
  height: 0.75rem;
  vertical-align: text-bottom;
}
`;

fs.writeFileSync(`./svg/Flags/flag.scss`, baseCssClass, 'utf8');
fs.writeFileSync(`./svg/Flags/flag.css`, baseCssClass, 'utf8');
