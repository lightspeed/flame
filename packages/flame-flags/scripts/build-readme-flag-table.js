const fs = require('fs-extra');

const flagList = require('../src/Flag.list.json');

const tableOutput = `
|Country/Region|Flag Code| Preview|
|----|----|----|
${Object.entries(flagList)
  .map(([key, flag]) => {
    return `|${flag.name}|${key}|<img src="./src/${key}.svg" />|`;
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

### Flag Preview
${tableOutput}
`.trim();
fs.writeFileSync('README.md', splitContents.join('\n\n'));
