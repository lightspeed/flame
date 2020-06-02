import { lightspeedTheme } from '@lightspeed/flame-tokens';

import { colors } from './colors';

import { alertVariants, alertInCardVariants } from './components/alert';
import { badgeVariants } from './components/badge';
import { buttonVariants, buttonIconVariants } from './components/button';
import { cardStyles, cardVariants } from './components/card';
import { checkboxStyles } from './components/checkbox';
import { dividerStyles } from './components/divider';
import { inputStyles } from './components/input';
import { logoVariants } from './components/logo';
import { radioStyles } from './components/radio';
import { selectStyles } from './components/select';
import { switchStyles } from './components/switch';
import { tagStyles } from './components/tag';
import { tooltipStyles } from './components/tooltip';
import { modalStyles } from './components/modal';
import { progressStyles } from './components/progress';
import { popoverStyles } from './components/popover';
import { textStyles } from './components/text';
import { boneStyles } from './components/bone';
import { groupStyles } from './components/group';
import { wordmarkStyles } from './components/wordmark';
import { tableStyles } from './components/table';
import { sidebarStyles } from './components/sidebar';
import { npsStyles } from './components/nps';

const themeUI = {
  ...lightspeedTheme,
  colors,
};

const theme: FlameUI = {
  ...themeUI,
  alertVariants,
  alertInCardVariants,
  badgeVariants,
  buttonVariants,
  buttonIconVariants,
  cardStyles,
  cardVariants,
  checkboxStyles,
  dividerStyles,
  inputStyles,
  logoVariants,
  radioStyles,
  selectStyles,
  switchStyles,
  tagStyles,
  tooltipStyles,
  modalStyles,
  progressStyles,
  popoverStyles,
  textStyles,
  boneStyles,
  groupStyles,
  wordmarkStyles,
  tableStyles,
  sidebarStyles,
  npsStyles,
};

export { themeUI, theme };
