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
  lineHeight: 1,
  letterSpacing: 0,
  fontSize,
  mt: 0,
  mb: '26px',
});

export const Title = ({ children, isMain, ...otherProps }) => (
  <H1 {...titleProps(isMain ? '64px' : '52px')} {...otherProps}>
    {children}
  </H1>
);

export const SubTitle = ({ children, ...otherProps }) => (
  <H2 {...titleProps('38px')} {...otherProps}>
    {children}
  </H2>
);

export const Paragraph = ({ children, mb = '26px', isBold, ...props }) => (
  <P
    display="block"
    mb={mb}
    fontSize="16px"
    lineHeight="26px"
    fontWeight={isBold ? 700 : 400}
    letterSpacing="0"
    {...props}
  >
    {children}
  </P>
);
