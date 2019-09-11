/* eslint-disable no-console */
const addToFolder = (filename, { path = '', preset = 'addon' } = {}) => {
  const packageName = 'flame-{{kebabCase name}}';
  const templatePath = path.replace('{{kebabCase name}}', 'name');
  const nextFilename = filename.replace('Component', '{{pascalCase name}}');

  return {
    type: 'add',
    path: `packages/${packageName}/${path}${nextFilename}`,
    templateFile: `scripts/plop/templates/${preset}/${templatePath}${filename}.hbs`,
  };
};

const addToAddon = (filename, config = {}) => addToFolder(filename, { ...config });

const exitMessage = answers => {
  const { name } = answers;

  console.log(
    `We gucci, folks. Next steps:\n\n`,
    `1. Run \`yarn dev\`\n`,
    `2. Open Storybook on http://localhost:6006 and go to the ${name} Story to start developing 🎉\n`,
  );
  return '';
};

module.exports = plop => {
  plop.setActionType('exitMessage', exitMessage);

  plop.addHelper('currentYear', () => new Date().getFullYear());

  plop.setGenerator('Add-on component', {
    description: 'Create a new add-on component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name',
        default: 'Component',
      },
    ],
    actions: [
      addToAddon('Component.test.tsx', { path: 'src/__tests__/' }),
      addToAddon('Component.tsx', { path: 'src/' }),
      addToAddon('index.tsx', { path: 'src/' }),
      addToAddon('CHANGELOG.md'),
      addToAddon('LICENSE'),
      addToAddon('package.json'),
      addToAddon('README.md'),
      addToAddon('story.tsx'),
      addToAddon('tsconfig.types.json'),
      { type: 'exitMessage' },
    ],
  });
};
