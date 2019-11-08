const glob = require('glob');

const styledSystemFileName = 'node_modules/@types/styled-system';

// We're gonna skip flag and icons since they are a bit funkier to type
const filePaths = glob.sync('src/!(Flag|Icon)/!(*.test|story|index).tsx');

const componentPropAST = require('react-docgen-typescript')
  .withDefaultConfig({
    propFilter: prop => {
      if (prop.parent) {
        if (prop.parent.fileName.includes(styledSystemFileName)) {
          return true;
        }

        return !prop.parent.fileName.includes('node_modules');
      }

      return true;
    },
  })
  .parse(filePaths);

const filteredProps = componentPropAST
  .filter(component => component.description.length)
  .map(component => {
    const nextProps = Object.entries(component.props).reduce((acc, [key, value]) => {
      if (key === 'as' || key === 'theme') {
        return acc;
      }

      if (
        value.parent &&
        value.parent.fileName &&
        value.parent.fileName.includes(styledSystemFileName)
      ) {
        return {
          ...acc,
          [value.parent.name]: {
            description:
              'Styled System Properties. Please consult the appropriate documentation on https://styled-system.com/api',
            name: value.parent.name,
          },
        };
      }

      return { ...acc, [key]: value };
    }, {});
    return { ...component, props: nextProps };
  });

// TODO: fs out the results into a JSON or something that can be easily consumed by the DSD
console.log(filteredProps);
