import React from 'react';
import { Text } from '../tools';

const H1 = Text.withComponent('h1');
const H2 = Text.withComponent('h2');
const H3 = Text.withComponent('h3');
const P = Text.withComponent('p');
export const Strong = Text.withComponent('strong');

export const Title = ({ text, isBig }) => (
  <H1
    fontFamily="UntitledSerif"
    fontSize={isBig ? '64px' : '52px'}
    lineHeight="1"
    fontWeight="700"
    letterSpacing="0"
  >
    {text}
  </H1>
);

export const Paragraph = ({ children, isChapo }) => (
  <P
    fontSize="16px"
    lineHeight="26px"
    fontWeight={isChapo ? 700 : 400}
    letterSpacing="0"
  >
    {children}
  </P>
);
