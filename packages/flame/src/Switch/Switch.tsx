import * as React from 'react';
import { Merge } from 'type-fest';
import { css } from '../Core';
import { IconCheckmark } from '../Icon/Checkmark';
import { IconCross } from '../Icon/Cross';

const SwitchSliderIcon: React.FC = () => (
  <svg css={{ alignSelf: 'center' }} width="10" height="2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 .505C0 .226.232 0 .5 0c.276 0 .5.214.5.505v.99A.508.508 0 0 1 .5 2a.495.495 0 0 1-.5-.505v-.99zm3 0C3 .226 3.232 0 3.5 0c.276 0 .5.214.5.505v.99A.508.508 0 0 1 3.5 2a.495.495 0 0 1-.5-.505v-.99zm3 0C6 .226 6.232 0 6.5 0c.276 0 .5.214.5.505v.99A.508.508 0 0 1 6.5 2a.495.495 0 0 1-.5-.505v-.99zm3 0C9 .226 9.232 0 9.5 0c.276 0 .5.214.5.505v.99A.508.508 0 0 1 9.5 2a.495.495 0 0 1-.5-.505v-.99z"
      fill="#C4CACC"
      fillRule="evenodd"
    />
  </svg>
);

const SwitchBackgroundIcons: React.FC = () => (
  <span
    css={
      css(get => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '100%',
        margin: `0 ${get('space.1')}`,
        zIndex: 1,
      })) as any
    }
  >
    <IconCheckmark
      size="0.75rem"
      css={css(get => ({
        fill: get('switchStyles.icons.checkmarkBackground'),
      }))}
    />
    <IconCross
      size="0.75rem"
      css={css(get => ({
        fill: get('switchStyles.icons.crossBackground'),
      }))}
    />
  </span>
);

const SwitchSlider: React.FC = ({ children }) => (
  <span
    className="fl-switch__slider"
    css={css(get => ({
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      position: 'absolute',
      margin: '0 2px',
      top: ['3px', '3px'],
      width: ['24px', '18px'],
      height: ['24px', '18px'],
      boxSizing: 'border-box',
      border: `solid 1px ${get('switchStyles.slider.border')}`,
      borderRadius: get('radii.radius-circle'),
      background: get('switchStyles.slider.background'),
      zIndex: 2,
      boxShadow: get('switchStyles.slider.shadow'),
      transitionProperty: 'translateX(0)',
      transitionDuration: get('transition.transition-duration-slow'),
      transitionTimingFunction: 'cubic-bezier(0.68, 1.46, 0.1, 1.06)',
    }))}
  >
    {children}
  </span>
);

export type SwitchProps = Merge<
  React.HTMLProps<HTMLInputElement>,
  {
    css?: any;
    /** CSS class name */
    className?: string;
    /** Sets the checked state of Switch */
    checked?: boolean;
  }
>;
const Switch: React.FC<SwitchProps> = ({ className, checked, id, ...restProps }) => (
  <label
    htmlFor={id}
    className={className}
    css={{
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
    }}
  >
    <input
      id={id}
      css={css(get => ({
        opacity: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        margin: 0,
        zIndex: 3,
        cursor: 'pointer',
        '&:checked + .fl-switch__wrapper': {
          background: get('switchStyles.on.background'),
          borderColor: get('switchStyles.on.checkedBorder'),
          '.fl-switch__slider': {
            transform: 'translateX(1.5rem)',
            borderColor: get('switchStyles.on.border'),
          },
        },
        '&:focus + .fl-switch__wrapper': {
          boxShadow: `0 0 0 1pt ${get('switchStyles.on.color')}, 0 0 0 3pt ${get(
            'switchStyles.on.background',
          )}`,
        },
        '&:disabled': {
          cursor: 'default',
          '& + .fl-switch__wrapper': {
            opacity: 0.5,
          },
        },
      }))}
      type="checkbox"
      checked={checked}
      value={checked ? 1 : 0}
      {...restProps}
    />
    <span
      className="fl-switch__wrapper"
      css={css(get => ({
        width: [get('space.9'), get('space.8')],
        height: [get('space.5'), get('space.4')],
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        border: `solid 1px ${get('switchStyles.off.border')}`,
        borderRadius: [get('space.3'), get('space.2')],
        background: get('switchStyles.off.background'),
        transitionProperty: 'background',
        transitionDuration: get('transition.transition-duration-slow'),
        transitionTimingFunction: 'cubic-bezier(0.68, 1.46, 0.1, 1.06)',
      }))}
    >
      <SwitchSlider>
        <SwitchSliderIcon />
      </SwitchSlider>
      <SwitchBackgroundIcons />
    </span>
  </label>
);

export { Switch };
