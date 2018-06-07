import styled, { css } from 'styled-components';
import fonts from '../fonts';

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
  bottom: ${top};
  left: ${left};
`;
