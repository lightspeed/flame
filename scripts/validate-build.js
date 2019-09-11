/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');

const execDir = process.cwd();

// Get "main" entry from package.json
// eslint-disable-next-line import/no-dynamic-require
const { name, main } = require(path.join(execDir, 'package.json'));

// If no package.json "main" field are found, skip validation
if (!main) {
  console.log(`\n⚠️ No "main" field found in ${name} package.json, skipping build validation.\n`);
  process.exit(0);
}

// Validate that it exists after the build, else exit to abort publishing
if (!fs.existsSync(path.join(execDir, main))) {
  console.error(
    `\n❌ "main" value declared in package.json (${main}) for ${name} does not exist, aborting.\n`,
  );
  process.exit(1);
}
