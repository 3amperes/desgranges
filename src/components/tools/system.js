import system from 'system-components';

export const Box = system(
  { blacklist: ['overflowHidden'] },
  'space',
  'width',
  'color',
  'textAlign'
);

export const Text = system(
  {
    fontFamily: 'WorkSans',
    fontSize: 2,
    lineHeight: 1,
    letterSpacing: 0,
    fontWeight: '400',
    blacklist: ['isUppercase', 'lineHeight'],
  },
  props => ({
    textTransform: props.isUppercase ? 'uppercase' : 'none',
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
    fontSize: 8,
    mt: 0,
    mb: 4,
  },
  'textAlign'
);