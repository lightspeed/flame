import * as React from 'react';

import { Box, Flex } from '../../src/Core';

const SpacedGroup = ({ flexDirection = 'row', children, ...restProps }) => {
  const nextChildren = React.Children.map(children, (child: any, index) => {
    if (flexDirection && flexDirection === 'column') {
      return <Box mt={index !== 0 ? 2 : undefined}>{child}</Box>;
    }

    if (flexDirection && flexDirection === 'column-reverse') {
      return <Box mb={index !== 0 ? 2 : undefined}>{child}</Box>;
    }

    return <Box ml={index !== 0 ? 2 : undefined}>{child}</Box>;
  });

  return (
    <Flex
      flexDirection={flexDirection}
      alignItems={flexDirection === 'row' && 'center'}
      {...restProps}
    >
      {nextChildren}
    </Flex>
  );
};

export { SpacedGroup };
