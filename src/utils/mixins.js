import styled, { css } from 'styled-components';

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
