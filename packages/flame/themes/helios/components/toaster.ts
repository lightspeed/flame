// Helios 2.0 Toaster Styles - Aligned with Toasts (unified-components)
// Toasts use filled backgrounds: bg-success-default, bg-no-default
// ALL text and icons are white (text-neutral-ondark-default)
// Using token names from the Helios theme colors object
import { colors } from '../colors';

// Helper to access colors with proper typing
const getColor = (key: string): string => (colors as Record<string, string>)[key];

const toasterVariants = {
  success: {
    '.fl-toaster__container': {
      bg: getColor('helios-success-default'),
    },
    '.fl-toaster__countdown': {
      bg: getColor('helios-success-strong'), // darker green for countdown bar
    },
    '.fl-toaster__icon svg': {
      fill: getColor('helios-neutral-ondark-default'), // icon color
    },
    '.fl-toaster__content': {
      color: getColor('helios-neutral-ondark-default'), // text color
    },
    '.fl-toaster__dismiss-btn svg': {
      fill: getColor('helios-neutral-ondark-default'), // close button
    },
    '.fl-toast__action-btn': {
      color: getColor('helios-neutral-ondark-default'), // action button
    },
  },
  error: {
    '.fl-toaster__container': {
      bg: getColor('helios-no-default'),
    },
    '.fl-toaster__countdown': {
      bg: getColor('helios-no-strong'), // darker red for countdown bar
    },
    '.fl-toaster__icon svg': {
      fill: getColor('helios-neutral-ondark-default'), // icon color
    },
    '.fl-toaster__content': {
      color: getColor('helios-neutral-ondark-default'), // text color
    },
    '.fl-toaster__dismiss-btn svg': {
      fill: getColor('helios-neutral-ondark-default'), // close button
    },
    '.fl-toast__action-btn': {
      color: getColor('helios-neutral-ondark-default'), // action button
    },
  },
};

export { toasterVariants };
