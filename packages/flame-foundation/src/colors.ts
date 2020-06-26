/**
 * The color key controls all the following properties
 *
 * color, background-color, border-color, caret-color, border-top-color,
 * border-bottom-color, border-left-color, border-right-color,
 * outline-color, fill, stroke
 */

const colors: Record<string, any> = {
  white: '#fff',
  black: '#000',
  'maple-50': '#FFF5F5',
  'maple-100': '#FDD6D7',
  'maple-200': '#FBB9BB',
  'maple-300': '#F58286',
  'maple-400': '#ED5153',
  'maple-500': '#DE2E37',
  'maple-600': '#CC1820',
  'maple-700': '#B30A11',
  'maple-800': '#950307',
  'maple-900': '#710003',
  'maple-1000': '#4D0001',
  'blue-50': '#F5F7FF',
  'blue-100': '#D6DFFD',
  'blue-200': '#B9C8FB',
  'blue-300': '#829FF5',
  'blue-400': '#537DEC',
  'blue-500': '#2E61DE',
  'blue-600': '#1844CC',
  'blue-700': '#0A2BB3',
  'blue-800': '#031795',
  'blue-900': '#000A71',
  'blue-1000': '#00034D',
  'green-50': '#F5FFF6',
  'green-100': '#D8FCDC',
  'green-200': '#BCFAC5',
  'green-300': '#88F398',
  'green-400': '#5BE873',
  'green-500': '#38DA57',
  'green-600': '#1FC641',
  'green-700': '#0EAD30',
  'green-800': '#059118',
  'green-900': '#006F07',
  'green-1000': '#014D00',
  'orange-50': '#FFFBF5',
  'orange-100': '#FFEDD4',
  'orange-200': '#FFDFB4',
  'orange-300': '#FCC37A',
  'orange-400': '#F5A647',
  'orange-500': '#EA891E',
  'orange-600': '#D5730C',
  'orange-700': '#BB5C02',
  'orange-800': '#9A4800',
  'orange-900': '#743300',
  'orange-1000': '#4D2000',
  'gray-50': '#F2F5F8',
  'gray-100': '#D7DCE1',
  'gray-200': '#BCC4CA',
  'gray-300': '#A3ABB3',
  'gray-400': '#8B939B',
  'gray-500': '#737B83',
  'gray-600': '#5C626A',
  'gray-700': '#464A51',
  'gray-800': '#2F3137',
  'gray-850': '#232429',
  'gray-900': '#18191D',
  'gray-950': '#111214',
  'gray-1000': '#020203',
};

// Aliasing
colors.primary = '#0EAD30';
colors.secondary = '#2E61DE';
colors.danger = '#DE2E37';
colors.warning = '#EA891E';
colors.textBody = '#464A51';
colors.textHeading = '#020203';
colors.textDimmed = '#5C626A';
colors.dimmed = '#F2F5F8';
colors.disabled = '#D7DCE1';
colors.bodyBg = '#F2F5F8';

// Modes
colors.mode = {};

export { colors };
