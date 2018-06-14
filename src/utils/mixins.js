import styled, { css } from 'styled-components';
import fonts from '../fonts';
import { TRANSITION } from 'utils/constants';

export const getFontFace = (
  name,
  fontWeight = 'Regular',
  fontStyle = 'normal'
) => {
  const woff = fonts[`${name}${fontWeight}WOFF`];
  const woff2 = fonts[`${name}${fontWeight}WOFF2`];

  const getWeight = fontWeight => {
    switch (fontWeight) {
      case 'SemiBold':
        return 600;
      case 'Bold':
        return 700;
      default:
        return 400;
    }
  };

  return css`
    @font-face{
      font-family: "${name}";
      font-style: ${fontStyle};
      font-weight: ${getWeight(fontWeight)};
      src: url(${woff2}) format("woff2"),
      url(${woff}) format("woff");
    }
  `;
};

export const absolute = ({
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
}) => css`
  position: absolute;
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
`;

export const transition = ({
  property,
  duration = TRANSITION.DURATION,
  timingFunction = TRANSITION.FUNCTION,
  delay = 0,
}) => css`
  transition-property: ${property};
  transition-duration: ${duration};
  transition-timing-function: ${timingFunction};
  transition-delay: ${delay};
`;

export const resetSpace = () => css`
  margin: 0;
  padding: 0;
`;
export const resetList = () => css`
  ${resetSpace};
  list-style: none;
`;
export const resetButton = () => css`
  ${resetSpace};
  border: none;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;
`;
