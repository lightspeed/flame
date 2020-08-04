const fs = require('fs-extra');

const svgPaths = fs.readdirSync('./src/');
const icons = svgPaths.filter(name => name.includes('icon-'));

const tableOutput = `
|Icon Name| Preview|
|----|----|
${icons
  .map(icon => {
    const iconName = icon.replace('icon-', '').replace('.svg', '');
    return `|${iconName}|<img src="./src/${icon}" />|`;
  })
  .join('\n')}
`;

const readmeContents = fs.readFileSync('README.md', 'utf8');
const splitContents = readmeContents.split(
  "<!-- Everything underneath here is auto generated. Don't touch! -->",
);
splitContents[0] = splitContents[0].trim();
splitContents[1] = `
<!-- Everything underneath here is auto generated. Don't touch! -->

### Icon Preview
${tableOutput}
`.trim();
fs.writeFileSync('README.md', splitContents.join('\n\n'));
