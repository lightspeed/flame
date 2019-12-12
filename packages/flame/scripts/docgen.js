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
    case 'ColorProps':
      return 'https://styled-system.com/api#color';
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

const namespaceType = parentName => {
  switch (parentName) {
    case 'WidthProps':
    case 'HeightProps':
    case 'MinWidthProps':
    case 'MinHeightProps':
    case 'MaxWidthProps':
    case 'MaxHeightProps':
    case 'DisplayProps':
    case 'VerticalAlignProps':
    case 'SizeProps':
      return 'LayoutProps';
    case 'FontFamilyProps':
    case 'FontSizeProps':
    case 'FontWeightProps':
    case 'LineHeightProps':
    case 'LetterSpacingProps':
    case 'FontStyleProps':
    case 'TextAlignProps':
      return 'TypographyProps';
    case 'AlignItemsProps':
    case 'AlignContentProps':
    case 'JustifyItemsProps':
    case 'JustifyContentProps':
    case 'FlexWrapProps':
    case 'FlexDirectionProps':
    case 'FlexProps':
    case 'FlexGrowProps':
    case 'FlexShrinkProps':
    case 'FlexBasisProps':
    case 'JustifySelfProps':
    case 'AlignSelfProps':
    case 'OrderProps':
      return 'FlexboxProps';
    case 'ZIndexProp':
    case 'TopProps':
    case 'RightProps':
    case 'BottomProps':
    case 'LeftProps':
      return 'PositionProps';
    case 'BorderWidthProps':
    case 'BorderStyleProps':
    case 'BorderColorProps':
    case 'BorderRadiusProps':
    case 'BorderTopProps':
    case 'BorderRightProps':
    case 'BorderBottomProps':
    case 'BorderLeftProps':
      return 'BorderProps';
    case 'borderRadius':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
      return 'BorderRadiusProps';
    case 'TextColorProps':
    case 'BackgroundColorProps':
    case 'OpacityProps':
      return 'ColorProps';
    default:
      return parentName;
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
        (value.parent.fileName.includes(styledSystemFileName) ||
          value.parent.fileName.includes('Core/index'))
      ) {
        return {
          ...acc2,
          [namespaceType(value.parent.name)]: {
            description: `Styled System Properties. Please consult the appropriate documentation on ${getStyledSystemDocsUrl(
              namespaceType(value.parent.name),
            )}`,
            documentationUrl: getStyledSystemDocsUrl(namespaceType(value.parent.name)),
            name: namespaceType(value.parent.name),
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
