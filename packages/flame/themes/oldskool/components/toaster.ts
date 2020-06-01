const toasterVariants = {
  success: {
    '.fl-toaster__container': {
      bg: 'green-100',
    },
    '.fl-toaster__countdown': {
      bg: 'primary',
    },
    '.fl-toaster__dismiss-btn svg': {
      fill: 'gray-300',
    },
    '.fl-toast__action-btn': {
      color: 'blue-300',
    },
  },
  error: {
    '.fl-toaster__container': {
      bg: 'maple-100',
    },
    '.fl-toaster__countdown': {
      bg: 'danger',
    },
    '.fl-toaster__dismiss-btn svg': {
      fill: 'gray-300',
    },
    '.fl-toast__action-btn': {
      color: 'blue-300',
    },
  },
};

export { toasterVariants };
