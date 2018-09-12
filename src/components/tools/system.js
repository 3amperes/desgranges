import system from 'system-components';

export const Box = system(
  { blacklist: ['overflowHidden', 'isOver', 'scrollWidth'] },
  'space',
  'width',
  'height',
  'minHeight',
  'color',
  'textAlign',
  'position'
);

export const Text = system(
  {
    fontFamily: 'WorkSans',
    fontSize: 2,
    lineHeight: 1,
    letterSpacing: 0,
    fontWeight: '400',
    blacklist: ['isUppercase', 'isLowercase', 'lineHeight'],
  },
  props => ({
    textTransform: props.isUppercase
      ? 'uppercase'
      : props.isLowercase
        ? 'lowercase'
        : 'none',
  }),
  'space',
  'display',
  'textAlign',
  'color'
);

export const Heading = system(
  {
    is: 'h1',
    fontFamily: 'UntitledSerif',
    fontWeight: '700',
    lineHeight: 0,
    letterSpacing: 0,
    fontSize: [7, 8],
    mt: 0,
    mb: 4,
  },
  'textAlign'
);
