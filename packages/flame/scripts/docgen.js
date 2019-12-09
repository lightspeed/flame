const styledSystemFileName = 'node_modules/@types/styled-system';
const glob = require('glob');
const fs = require('fs-extra');

const docgen = require('react-docgen-typescript').withDefaultConfig({
  propFilter: prop => {
    if (prop.parent) {
      if (prop.parent.fileName.includes(styledSystemFileName)) {
        return true;
      }

      return !prop.parent.fileName.includes('node_modules');
    }

    return true;
  },
});

const getStyledSystemDocsUrl = parentPropName => {
  switch (parentPropName) {
    case 'PositionProps':
      return 'https://styled-system.com/api#position';
    case 'BorderProps':
      return 'https://styled-system.com/api#border';
    case 'BackgroundProps':
      return 'https://styled-system.com/api#background';
    case 'FlexboxProps':
      return 'https://styled-system.com/api#flexbox';
    case 'LayoutProps':
      return 'https://styled-system.com/api#layout';
    case 'TypographyProps':
      return 'https://styled-system.com/api#typography';
    case 'SpaceProps':
      return 'https://styled-system.com/api#space';
    default:
      return 'https://styled-system.com/api';
  }
};

// We're gonna skip flag and icons since they are a bit funkier to type
const filePaths = glob.sync('src/!(Flag|Icon)/!(*.test|story|index).tsx');

const componentjsonStructure = filePaths.reduce((acc, file) => {
  const namespace = file.split('/')[1];

  // eslint-disable-next-line no-console
  console.log('Parsing the following file:', file);
  const parsedFile = docgen.parse(file).map(component => {
    const nextProps = Object.entries(component.props).reduce((acc2, [key, value]) => {
      if (key === 'as' || key === 'theme') {
        return acc2;
      }

      if (
        value.parent &&
        value.parent.fileName &&
        value.parent.fileName.includes(styledSystemFileName)
      ) {
        return {
          ...acc2,
          [value.parent.name]: {
            description: `Styled System Properties. Please consult the appropriate documentation on ${getStyledSystemDocsUrl(
              value.parent.name,
            )}`,
            name: value.parent.name,
          },
        };
      }

      return { ...acc2, [key]: value };
    }, {});

    return { ...component, props: nextProps };
  });

  if (!parsedFile.length) {
    return acc;
  }

  const normalizedParsedFile = parsedFile.reduce((acc2, value) => {
    return {
      ...acc2,
      [value.displayName]: value,
    };
  }, {});

  if (acc[namespace]) {
    return { ...acc, [namespace]: { ...acc[namespace], ...normalizedParsedFile } };
  }

  return { ...acc, [namespace]: { ...normalizedParsedFile } };
}, {});

Object.entries(componentjsonStructure).forEach(([namespace, docs]) => {
  // eslint-disable-next-line no-console
  console.log(`Writing ${namespace}.json`);
  fs.outputFileSync(`dist/docgen/${namespace}.json`, JSON.stringify(docs), { encoding: 'utf8' });
});
