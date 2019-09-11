const colorsMap = {
  maple: '#ed5153',
  'maple-100': '#fee3e3',
  'maple-200': '#b93435',
  'maple-300': '#872525',
  dive: '#232a3b',
  'dive-100': '#3c7797',
  'dive-200': '#32637e',
  'dive-300': '#34495e',
  night: '#0c0d0d',
  'night-100': '#383d3d',
  'night-200': '#212424',
  'night-300': '#181a1a',
  snow: '#fff',
  'snow-100': '#fcfcfc',
  'snow-200': '#f3f3f3',
  'snow-300': '#e1e4e5',
  blue: '#2875c6',
  'blue-100': '#e9fafe',
  'blue-200': '#5187e0',
  'blue-300': '#1d5794',
  green: '#35b858',
  'green-100': '#e0f8e6',
  'green-200': '#3dd164',
  'green-300': '#26853f',
  orange: '#e69524',
  'orange-100': '#fdebd0',
  'orange-200': '#f39c26',
  'orange-300': '#996318',
  yellow: '#f1f326',
  'yellow-100': '#fdfcd4',
  'yellow-200': '#ecde36',
  'yellow-300': '#9e941f',
  gray: '#494c4c',
  'gray-100': '#c4cacc',
  'gray-200': '#abb3b3',
  'gray-300': '#848a8a',
  seal: '#737883',
  'seal-100': '#9ba0ab',
  'seal-200': '#505765',
  'seal-300': '#393f4c',
};

const colors = Object.keys(colorsMap).reduce((obj: Record<string, string>, color) => {
  // eslint-disable-next-line no-param-reassign
  obj[color] = `${(colorsMap as Record<string, string>)[color]}`;
  return obj;
}, {});

export { colorsMap, colors };
