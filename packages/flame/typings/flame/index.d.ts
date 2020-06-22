declare interface ColorAliases {
  primary: string;
  secondary: string;
  danger: string;
  warning: string;
  white: string;
  textBody: string;
  textHeading: string;
  textDimmed: string;
  dimmed: string;
  disabled: string;
  bodyBg: string;
}

declare interface AlertVariants {
  success: {
    background: string;
    borderColor: string;
    '.fl-alert__icon svg'?: {
      fill: string;
    };
  };
  info: {
    background: string;
    borderColor: string;
    '.fl-alert__icon svg'?: {
      fill: string;
    };
  };
  danger: {
    background: string;
    borderColor: string;
    '.fl-alert__icon svg'?: {
      fill: string;
    };
  };
  warning: {
    background: string;
    borderColor: string;
    '.fl-alert__icon svg'?: {
      fill: string;
    };
  };
}

declare interface BadgeVariants {
  default: {
    backgroundColor: string;
    color: string;
  };
  success: {
    backgroundColor: string;
    color: string;
  };
  warning: {
    backgroundColor: string;
    color: string;
  };
  danger: {
    backgroundColor: string;
    color: string;
  };
  info: {
    backgroundColor: string;
    color: string;
  };
  important: {
    backgroundColor: string;
    color: string;
  };
}

declare interface ButtonVariants {
  fill: {
    primary: {
      backgroundImage: string;
      backgroundColor: string;
      borderColor: string;
      color: string;
      '&:hover': {
        color: string;
        backgroundColor: string;
        backgroundImage?: string;
        borderColor?: string;
      };
      '&:active': {
        color?: string;
        backgroundImage?: string;
        backgroundColor?: string;
        boxShadow: string;
        borderColor?: string;
      };
    };
    secondary: {
      backgroundImage: string;
      backgroundColor: string;
      borderColor: string;
      color: string;
      '&:hover': {
        color: string;
        backgroundColor: string;
        backgroundImage: string;
        borderColor: string;
      };
      '&:active': {
        color?: string;
        backgroundImage?: string;
        backgroundColor?: string;
        boxShadow: string;
        borderColor?: string;
      };
    };
    danger: {
      backgroundImage: string;
      backgroundColor: string;
      borderColor: string;
      color: string;
      '&:hover': {
        color: string;
        backgroundColor: string;
        backgroundImage: string;
        borderColor: string;
      };
      '&:active': {
        color?: string;
        backgroundImage?: string;
        backgroundColor?: string;
        boxShadow: string;
        borderColor?: string;
      };
    };
    neutral: {
      backgroundImage: string;
      backgroundColor: string;
      borderColor: string;
      color: string;
      '&:hover': {
        color: string;
        backgroundColor: string;
        backgroundImage: string;
        borderColor: string;
      };
      '&:active': {
        color?: string;
        backgroundImage?: string;
        backgroundColor?: string;
        boxShadow: string;
        borderColor?: string;
      };
    };
  };
  outline: {
    primary: {
      color: string;
      backgroundColor: string;
      borderColor: string;
      backgroundImage?: string;
      backgroundColor?: string;
      '&:hover': {
        backgroundColor: string;
        color: string;
        boxShadow: string;
        backgroundImage: string;
      };
      '&:active': {
        color?: string;
        backgroundImage?: string;
        backgroundColor?: string;
        boxShadow: string;
        borderColor?: string;
      };
    };
    secondary: {
      color: string;
      backgroundColor: string;
      borderColor: string;
      backgroundImage?: string;
      backgroundColor?: string;
      '&:hover': {
        backgroundColor: string;
        color: string;
        boxShadow: string;
        backgroundImage: string;
      };
      '&:active': {
        color?: string;
        backgroundImage?: string;
        backgroundColor?: string;
        boxShadow: string;
        borderColor?: string;
      };
    };
    danger: {
      color: string;
      backgroundColor: string;
      borderColor: string;
      backgroundImage?: string;
      backgroundColor?: string;
      '&:hover': {
        backgroundColor: string;
        color: string;
        boxShadow: string;
        backgroundImage: string;
      };
      '&:active': {
        color?: string;
        backgroundImage?: string;
        backgroundColor?: string;
        boxShadow: string;
        borderColor?: string;
      };
    };
  };
}

declare interface ButtonIconVariants {
  fill: {
    primary: {
      fill: string;
      color: string;
      '.cr-icon__details-2': {
        color: string;
        fill: string;
      };
    };
    secondary: {
      fill: string;
      color: string;
      '.cr-icon__details-2': {
        color: string;
        fill: string;
      };
    };
    danger: {
      fill: string;
      color: string;
      '.cr-icon__details-2': {
        color: string;
        fill: string;
      };
    };
    neutral: {
      fill: string;
      color: string;
      '.cr-icon__details-2': {
        color: string;
        fill: string;
      };
    };
  };
  outline: {
    primary: {
      fill: string;
      color: string;
    };
    secondary: {
      fill: string;
      color: string;
    };
    danger: {
      fill: string;
      color: string;
    };
    neutral: {
      fill: string;
      color: string;
    };
  };
}

declare interface CardVariants {
  neutral: {
    boxShadow: string;
  };
  top: {
    boxShadow: string;
  };
}

declare interface CardStyles {
  background: string;
  header: {
    border: string;
  };
  footer: {
    border: string;
  };
}

declare interface CheckboxStyles {
  background: string;
  borderColor: string;
  color: string;
  focus: {
    boxShadow: string;
  };
  indeterminate: {
    border: string;
    background: string;
  };
  checked: {
    background: string;
    border: string;
    color: string;
  };
  label: {
    color: string;
  };
  description: {
    color: string;
  };
}

declare interface DividerStyles {
  color: string;
  cardColor: string;
}

declare interface InputStyles {
  background: string;
  color: string;
  border: string;
  boxShadow: string;
  placeholder: {
    color: string;
  };
  hover: {
    border: string;
  };
  active: {
    border: string;
  };
  disabled: {
    color: string;
    background: string;
  };
  focus: {
    border: string;
  };
  helper: {
    background: string;
  };
  warning: {
    color: string;
  };
  error: {
    border: string;
    color: string;
  };
  valid: {
    color: string;
  };
  readonly: {
    color: string;
    background: string;
  };
  label: {
    color: string;
  };
  autofilled: {
    background: string;
    color: string;
  };
  autocomplete: {
    border: string;
    controlDropdownIndicator: {
      color: string;
    };
    controlHover: {
      border: string;
    };
    indicator: {
      color: string;
    };
    optionSelected: {
      background: string;
      color: string;
    };
    multiValue: {
      color: string;
      background: string;
      backgroundDisabled: string;
      border: string;
      borderDisabled: string;
    };
    multiValueLabel: {
      color: string;
      colorDisabled: string;
    };
    multiValueRemove: {
      color: string;
      colorDisabled: string;
    };
  };
}

declare interface LogoVariants {
  flame: {
    default: {
      fill: string;
    };
    'red-white': {
      fill: string;
    };
    dive: {
      fill: string;
    };
    night: {
      fill: string;
    };
    snow: {
      fill: string;
    };
    maple: {
      fill: string;
    };
  };
  word: {
    default: {
      fill: string;
    };
    'red-white': {
      fill: string;
    };
    dive: {
      fill: string;
    };
    night: {
      fill: string;
    };
    snow: {
      fill: string;
    };
    maple: {
      fill: string;
    };
  };
}

declare interface RadioStyles {
  background: string;
  border: string;
  color: string;
  focus: {
    boxShadow: string;
  };
  checked: {
    background: string;
    border: string;
  };
  description: {
    color: string;
  };
  label: {
    color: string;
  };
}
declare interface SelectStyles {
  backgroundColor: string;
  background: string;
  border: string;
  color: string;
  focusBorder: string;
  disabledColor: string;
  disabledBackground: string;
}
declare interface SwitchStyles {
  on: {
    background: string;
    border: string;
    color: string;
    focusBorder: string;
    errorBorder: string;
    checkedBorder: string;
  };
  off: {
    background: string;
    border: string;
    color: string;
  };
  slider: {
    border: string;
    background: string;
    shadow: string;
  };
  icons: {
    checkmarkBackground: string;
    crossBackground: string;
  };
}
declare interface TagStyles {
  main: {
    background: string;
    hoverBackground: string;
    activeBackground: string;
    focusBorder: string;
    color: string;
    boxShadow: string;
  };
  remove: {
    background: string;
    hoverBackground: string;
    activeBackground: string;
    icon: {
      background: string;
      details: string;
      hoverBackground: string;
      focusBackground: string;
      focusBoxShadow: string;
      activeBackground: string;
    };
  };
}
declare interface TooltipStyles {
  light: {
    background: string;
    border: string;
    color: string;
  };
  dark: {
    background: string;
    border: string;
    color: string;
  };
}
declare interface ModalStyles {
  overlay: {
    background: string;
  };
  modal: {
    background: string;
    color: string;
  };
  header: {
    border: string;
    color: string;
  };
  footer: {
    background: string;
    border: string;
  };
}
declare interface ProgressStyles {
  background: string;
  progressBar: {
    background: string;
    backgroundSize: string;
  };
  progressBarStatic: {
    background: string;
  };
}
declare interface PopoverStyles {
  boxShadow: string;
  arrowColor: string;
  light: {
    background: string;
  };
  dark: {
    background: string;
  };
}
declare interface TextStyles {
  color: string;
  link: {
    color: string;
  };
}
declare interface BoneStyles {
  background: string;
}
declare interface GroupStyles {
  addon: {
    background: string;
    borderColor: string;
  };
}
declare interface WordmarkStyles {
  border: string;
  light: {
    color: string;
  };
  dark: {
    color: string;
  };
}
declare interface TableStyles {
  progress: {
    background: string;
    backgroundSize: string;
    loadingBackground: string;
  };
  tr: {
    hover: {
      background: string;
    };
    borderColor: string;
  };
  dropdown: {
    hover: {
      background: string;
    };
  };
  sortable: {
    button: {
      background: string;
    };
  };
}
declare interface SidebarStyles {
  background: string;
  borderColor: string;
  iconDetails: string;
  sidebarLink?: {
    focus: {
      background: string;
    };
    active: {
      background: string;
    };
  };
  header?: {
    color: string;
  };
  menulink: {
    normal: {
      color: string;
    };
    danger: {
      color: string;
    };
  };
  shopButton?: {
    background: string;
    active: {
      background: string;
    };
    hover: {
      background: string;
    };
  };
  lockButton: {
    borderColor: string;
  };
}
declare interface NpsStyles {
  text: {
    dimmed: string;
  };
}

declare interface FlameUI {
  colors: Record<any, any>;
  alertVariants: AlertVariants;
  alertInCardVariants?: any;
  badgeVariants: BadgeVariants;
  nextBadgeVariants: any;
  buttonVariants: ButtonVariants;
  buttonIconVariants: ButtonIconVariants;
  cardStyles: CardStyles;
  cardVariants: CardVariants;
  checkboxStyles: CheckboxStyles;
  dividerStyles: DividerStyles;
  inputStyles: InputStyles;
  logoVariants: LogoVariants;
  radioStyles: RadioStyles;
  selectStyles: SelectStyles;
  switchStyles: SwitchStyles;
  tagStyles: TagStyles;
  tooltipStyles: TooltipStyles;
  modalStyles: ModalStyles;
  progressStyles: ProgressStyles;
  popoverStyles: PopoverStyles;
  textStyles: TextStyles;
  boneStyles: BoneStyles;
  groupStyles: GroupStyles;
  wordmarkStyles: WordmarkStyles;
  tableStyles: TableStyles;
  sidebarStyles: SidebarStyles;
  npsStyles: NpsStyles;
  toasterVariants: any;
}
