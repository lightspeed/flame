/* eslint-disable import/prefer-default-export */
export function hex2rgba(hex) {
  const colorCode = hex.replace('#', '');
  const r = parseInt(colorCode.substring(0, colorCode.length / 3), 16);
  const g = parseInt(colorCode.substring(colorCode.length / 3, (2 * colorCode.length) / 3), 16);
  const b = parseInt(
    colorCode.substring((2 * colorCode.length) / 3, (3 * colorCode.length) / 3),
    16,
  );

  return `rgb(${r}, ${g}, ${b})`;
}
