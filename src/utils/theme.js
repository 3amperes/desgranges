const colors = {
  white: '#fff',
  black: '#111',
  gray: {
    light: '#f3f0f0',
    dark: '#1d1d1b',
    blue: '64b8b4',
  },
  peach: 'f99e78',
  sea: '2f97a4',
  salmon: 'fdc2aa',
  pine: '2c5a40',
};
// Breakpoints
const breakpoints = ['40em', '52em', '64em'];
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

// Typographic Scale (numbers are converted to px values)
const fontSizes = [12, 14, 16, 22, 24, 26, 32, 38, 52, 64];
const lineHeights = [1, 1.625];

// Spacing Scale (used for margin and padding)
const space = [0, 4, 6, 26, 36, 60, 100, 150, 200, 300];

export default {
  colors,
  breakpoints,
  fontSizes,
  lineHeights,
  space,
};
