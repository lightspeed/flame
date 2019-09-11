import utilitiesMap from './generate-utilities';
import variablesMap from './generate-variables';

const fs = require('fs');

function generateUtilities() {
  const distFolder = 'partials';

  if (!fs.existsSync(distFolder)) fs.mkdirSync(distFolder);

  utilitiesMap.forEach(([filename, cssOutput]) => {
    fs.writeFileSync(`${distFolder}/${filename}.scss`, cssOutput, 'utf8');
  });
}

function generateVariables() {
  variablesMap.forEach(([fileName, output]) => {
    fs.writeFileSync(fileName, output, 'utf-8');
  });
}

generateUtilities();
generateVariables();
