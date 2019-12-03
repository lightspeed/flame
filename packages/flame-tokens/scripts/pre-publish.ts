import * as fs from 'fs-extra';
import utilitiesMap from './generate-utilities';
import variablesMap from './generate-variables';

function generateUtilities() {
  utilitiesMap.forEach(([filename, cssOutput]) => {
    fs.outputFileSync(filename, cssOutput, 'utf8');
  });
}

function generateVariables() {
  variablesMap.forEach(([fileName, output]) => {
    fs.outputFileSync(fileName, output, 'utf-8');
  });
}

generateUtilities();
generateVariables();
