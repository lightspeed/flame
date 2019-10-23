import * as React from 'react';

import { Box, Flex, FlameFlexProps } from '../Core';

export interface SpacedGroupProps extends FlameFlexProps {}
const SpacedGroup: React.FC<SpacedGroupProps> = ({
  flexDirection = 'row',
  alignItems = 'center',
  children,
  ...restProps
}) => {
  const nextChildren = React.Children.map(children, (child: any, index) => {
    // Covered by visual regression test, ignore from coverage report
    /* istanbul ignore next */
    if (flexDirection && flexDirection === 'column') {
      return <Box mt={index !== 0 ? 2 : undefined}>{child}</Box>;
    }

    // Covered by visual regression test, ignore from coverage report
    /* istanbul ignore next */
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
