import React from 'react';
import { Text } from '../tools';

const H1 = Text.withComponent('h1');
const H2 = Text.withComponent('h2');
const H3 = Text.withComponent('h3');
const P = Text.withComponent('p');
export const Strong = Text.withComponent('strong');

const titleProps = fontSize => ({
  fontFamily: 'UntitledSerif',
  fontWeight: 700,
  lineHeight: 0,
  letterSpacing: 0,
  fontSize,
  mt: 0,
  mb: '26px',
});

export const Title = ({ children, isMain, ...otherProps }) => (
  <H1 {...titleProps(isMain ? 9 : 8)} {...otherProps}>
    {children}
  </H1>
);

export const SubTitle = ({ children, ...otherProps }) => (
  <H2 {...titleProps(7)} {...otherProps}>
    {children}
  </H2>
);

export const Paragraph = ({ children, mb = 3, isBold, ...props }) => (
  <P
    display="block"
    mb={mb}
    fontSize={2}
    lineHeight={1}
    fontWeight={isBold ? 700 : 400}
    letterSpacing="0"
    {...props}
  >
    {children}
  </P>
);
