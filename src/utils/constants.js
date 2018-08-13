export const ZINDEXBASE = 100;

const NAVBAR = 120;
export const SIZES = {
  NAVBAR,
  INTRO: `calc(100vh - ${NAVBAR}px)`,
};

export const TRANSITION = {
  DURATION: '250ms',
  FUNCTION: 'cubic-bezier(0.8, 0.2, 0.2, 1)',
};

export const GRID = {
  MOBILE: {
    COLUMNS: 'repeat(6, 38px)',
    GAP: '15px',
  },
  TABLET: {
    COLUMNS: 'repeat(12, 50px)',
    GAP: '15px',
  },
  DESKTOP: {
    COLUMNS: 'repeat(12, minmax(30px, 90px))',
    GAP: '38px',
  },
};
