const toasterVariants = {
  success: {
    '.fl-toaster__container': {
      bg: 'green-50',
    },
    '.fl-toaster__countdown': {
      bg: 'primary',
    },
    '.fl-toaster__dismiss-btn svg': {
      fill: 'gray-400',
    },
    '.fl-toast__action-btn': {
      color: 'blue-500',
    },
  },
  error: {
    '.fl-toaster__container': {
      bg: 'maple-50',
    },
    '.fl-toaster__countdown': {
      bg: 'danger',
    },
    '.fl-toaster__dismiss-btn svg': {
      fill: 'gray-400',
    },
    '.fl-toast__action-btn': {
      color: 'blue-500',
    },
  },
};

export { toasterVariants };
