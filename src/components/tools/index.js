import React from 'react';
import styled from 'styled-components';
import GLink from 'gatsby-link';
import system from 'system-components';

export const Box = system('space', 'width', 'color', 'textAlign');

export const Text = system(
  'space',
  'display',
  'textAlign',
  'lineHeight',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'color'
);

export const Heading = system({
  is: 'h1',
  fontFamily: 'UntitledSerif',
  fontWeight: 700,
  lineHeight: 0,
  letterSpacing: 0,
  fontSize: 8,
  mt: 0,
  mb: 4,
});

export const Paragraph = ({ children, mb = 3, isBold, ...props }) => (
  <Text
    is="p"
    display="block"
    mb={mb}
    fontSize={2}
    lineHeight={1}
    fontWeight={isBold ? 700 : 400}
    letterSpacing="0"
    {...props}
  >
    {children}
  </Text>
);

export const Link = styled(GLink)`
  text-decoration: none;
  color: currentColor;
  text-transform: uppercase;
`;
