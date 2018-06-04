import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';

export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Label = styled.label`
  ${fontSize};
  display: block;
`;
