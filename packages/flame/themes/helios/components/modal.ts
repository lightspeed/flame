import { colors } from '../colors';

// Helios 2.0 Modal Styles - Exact match with unified-components Dialog
// Using tokens from @lightspeed/unified-tokens/helios via colors object
const modalStyles: ModalStyles = {
  overlay: {
    background: (colors as Record<string, string>)['helios-overlay-neutral-strong'],
  },
  modal: {
    background: colors.white, // #FFFFFF (bg-neutral-top)
    color: colors.textBody, // #1E1E21 (text-neutral-default)
  },
  header: {
    border: (colors as Record<string, string>)['helios-border-neutral-soft'],
    color: colors.textBody, // #1E1E21 (text-neutral-default)
  },
  footer: {
    background: (colors as Record<string, string>)['helios-neutral-backdrop'],
    border: (colors as Record<string, string>)['helios-border-neutral-soft'],
  },
};

export { modalStyles };
