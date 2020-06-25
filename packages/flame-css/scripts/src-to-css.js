const sass = require('sass');
const path = require('path');
const fs = require('fs-extra');

const scssEntryPoint = path.resolve('__dirname', '../src/index.scss');
const cssOutputFile = path.resolve('__dirname', '../dist/css/style.min.css');

const output = sass.renderSync({
  file: scssEntryPoint,
  outFile: cssOutputFile,
  outputStyle: 'compressed',
});

fs.ensureFileSync(cssOutputFile);
fs.writeFileSync(cssOutputFile, output.css);
