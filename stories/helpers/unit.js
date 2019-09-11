const defaultPixelSize = 16;

export function isRem(string) {
  if (typeof string === 'string' && string.endsWith('rem')) {
    return true;
  }

  return false;
}

export function getRemFromString(string) {
  let toParse = string;

  if (isRem(string)) {
    toParse = string.replace('rem', '');
  }

  return Number(toParse, 10);
}

export function remToPx(number) {
  return number * defaultPixelSize;
}

export function remToPxFromString(string) {
  return remToPx(getRemFromString(string));
}

export function withPx(val) {
  return `${val}px`;
}
