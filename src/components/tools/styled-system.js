import styled from 'styled-components';
import {
  space,
  width,
  fontFamily,
  fontSize,
  color,
  lineHeight,
  textAlign,
  fontWeight,
  letterSpacing,
  display,
} from 'styled-system';

export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Text = styled.span`
  ${space}
  ${display}
  ${textAlign}
  ${lineHeight}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${color}
`;
