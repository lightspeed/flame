const fs = require('fs-extra');

const baseCssClass = `
.fl-flag {
  width: 1rem;
  height: 0.75rem;
  vertical-align: text-bottom;
}
`;

fs.ensureDirSync('./dist/');
fs.writeFileSync(`./dist/flag.scss`, baseCssClass, 'utf8');
fs.writeFileSync(`./dist/flag.css`, baseCssClass, 'utf8');
