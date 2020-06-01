import * as React from 'react';
import { SpaceProps } from 'styled-system';
import css from '@styled-system/css';

import { CloseButton } from './CloseButton';
import { AlertIcons } from './AlertIcons';

import { Flex, Box } from '../Core';
import { Text } from '../Text';

type AlertTypes = 'info' | 'success' | 'warning' | 'danger' | string;

export interface AlertProps {
  /** CSS class name */
  className?: string;
  /** Enum for preset Alert types */
  type?: AlertTypes;
  /** Function called when Close button is tapped */
  onClose?: Function;
  /** Whether a Close button appears */
  noCloseBtn?: boolean;
  /** Icon for the alert */
  icon?: React.ReactNode;
  /** Text for the alert's title */
  title?: string;
}
/**
 * An alert can be a warning following an action, a helpful tip or an important update about a system issue. There are four types of alert and each has a different function.
 */
export const Alert: React.FC<AlertProps & SpaceProps> = ({
  children,
  type = 'info',
  title,
  noCloseBtn,
  onClose,
  icon = null,
  ...restProps
}) => {
  if (icon) {
    console.warn(
      'Warning: Starting from next major version, you will no longer be able to add a prop icon.',
      'Icons will be automatically be injected based on the Alert type',
    );
  }

  const [isHidden, setIsHidden] = React.useState(false);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if (onClose && typeof onClose === 'function') onClose(e);
    setIsHidden(s => !s);
  };

  if (isHidden) return null;

  return (
    <Box
      css={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxShadow:
          '0 0 0 1px rgba(0, 0, 0, 0.06), 0 3px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
        borderTop: '3px solid',
        borderRadius: 'radius-2',
        px: 3,
        py: 2,
        variant: `alertVariants.${type}`,
      })}
      {...restProps}
    >
      <Flex flex="1">
        <Box flex="1" css={css({ position: 'relative', pl: 5 })}>
          <Flex className="fl-alert__icon" css={{ position: 'absolute', left: '0px', top: '2px' }}>
            {icon || <AlertIcons type={type} />}
          </Flex>
          {title && (
            <Text color="textHeading" fontWeight="bold" fontSize="text" mt={0} mr={0} mb={1} ml={0}>
              {title}
            </Text>
          )}
          <Box fontSize="text-s">{children}</Box>
        </Box>
      </Flex>
      {!noCloseBtn && <CloseButton onClick={handleClose} />}
    </Box>
  );
};
