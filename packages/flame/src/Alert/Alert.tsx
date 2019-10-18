import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { space, variant, SpaceProps, layout, LayoutProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Flex, Box } from '../Core';
import { Text } from '../Text';

const alertStyles = variant({
  key: 'alertVariants',
  prop: 'type',
});

const AlertWrapper = styled('div')<SpaceProps & { type: string }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 3px 6px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-top: 4px solid;
  border-radius: ${themeGet('radii.radius-2')};
  ${space}
  ${alertStyles}
`;

AlertWrapper.defaultProps = {
  type: 'info',
  px: 3,
  py: [3, 2],
};

const CloseButton = styled('button')<LayoutProps>`
  font-size: ${themeGet('fontSizes.text')};
  color: ${themeGet('colors.textHeading')};
  background-color: ${props => transparentize(0.9, themeGet('colors.textHeading', '#000')(props))};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  ${layout}

  &:focus {
    outline: none;
  }
`;

CloseButton.defaultProps = {
  width: ['18px', '16px'],
  height: ['18px', '16px'],
};

CloseButton.displayName = 'CloseButton';

export interface AlertProps {
  /** CSS class name */
  className?: string;
  /** Enum for preset Alert types */
  type?: 'info' | 'success' | 'warning' | 'danger' | string;
  /** Function called when Close button is tapped */
  onClose?: Function;
  /** Whether a Close button appears */
  noCloseBtn?: boolean;
  /** Icon for the alert */
  icon?: React.ReactNode;
  /** Text for the alert's title */
  title?: string;
}

const Alert: React.FunctionComponent<AlertProps & SpaceProps> = ({
  children,
  type = 'info',
  title,
  noCloseBtn,
  onClose,
  icon = null,
  ...restProps
}) => {
  const [isHidden, setIsHidden] = React.useState(false);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if (onClose && typeof onClose === 'function') onClose(e);
    setIsHidden(s => !s);
  };

  if (isHidden) return null;

  return (
    <AlertWrapper type={type} {...restProps}>
      <Flex flex="1" alignItems="flex-start">
        {icon && (
          <Flex alignItems="center" pr={2} pt="2px">
            {icon}
          </Flex>
        )}
        <Box flex="1">
          {title && (
            <Text
              color="textHeading"
              fontWeight="bold"
              fontSize={['text-l', 'text']}
              mt={0}
              mr={0}
              mb={0}
              ml={0}
            >
              {title}
            </Text>
          )}
          <Box fontSize={['text', 'text-s']}>{children}</Box>
        </Box>
      </Flex>
      {!noCloseBtn && (
        <CloseButton type="button" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 8"
            css={{
              width: '0.5em',
              height: '0.5em',
              fill: 'black',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <g fillRule="evenodd" transform="translate(-4 -4)">
              <path
                fillOpacity=".5"
                d="M9.414 8l2.122-2.121a1 1 0 1 0-1.415-1.415L8 6.586 5.879 4.464A1 1 0 0 0 4.464 5.88L6.586 8l-2.122 2.121a1 1 0 0 0 1.415 1.415L8 9.414l2.121 2.122a1 1 0 0 0 1.415-1.415L9.414 8z"
              />
            </g>
          </svg>
        </CloseButton>
      )}
    </AlertWrapper>
  );
};

export { Alert };
