import * as React from 'react';
import css from '@styled-system/css';

import { AlertIcons } from './AlertIcons';
import { CloseButton } from './CloseButton';
import { Flex } from '../Core';

interface Props {
  type?: string;
  isHidden?: string;
  noCloseBtn?: boolean;
  /** Function called when Close button is tapped */
  onClose?: Function;
}
const AlertInCard: React.FC<Props> = ({
  type = 'info',
  noCloseBtn = false,
  onClose,
  children,
  ...restProps
}) => {
  const [isHidden, setIsHidden] = React.useState(false);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if (onClose && typeof onClose === 'function') onClose(e);
    setIsHidden(s => !s);
  };

  if (isHidden) return null;

  return (
    <Flex
      css={css({
        p: 3,
        alignItems: 'center',
        borderRadius: 'radius-2',
        border: '1px solid',
        variant: `alertInCardVariants.${type}`,
      })}
      {...restProps}
    >
      <Flex className="fl-alert__icon" flex={0}>
        <AlertIcons type={type} />
      </Flex>
      <div css={css({ flex: '1', pl: 2, fontSize: ['text', 'text-s'] })}>{children}</div>
      {!noCloseBtn && (
        <Flex css={css({ flex: '0' })}>
          <CloseButton onClick={handleClose} />
        </Flex>
      )}
    </Flex>
  );
};

export { AlertInCard };
