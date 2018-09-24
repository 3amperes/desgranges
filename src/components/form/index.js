import React from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { Box, Text } from 'components';

const inputStyle = css`
  border: none;
  outline: 0;
  width: 100%;
  font-size: ${themeGet('fontSizes.2', '16px')};
  line-height: 30px;
  border-bottom: 1px solid ${themeGet('colors.black', 'black')};
  color: ${themeGet('colors.black', 'black')};

  &::placeholder {
    opacity: 0.4;
  }
`;

const FielLabel = ({ text, htmlFor }) => (
  <Text
    htmlFor={htmlFor}
    display="block"
    fontSize="16px"
    fontWeight="bold"
    color="black"
    pb="5px"
    is="label"
  >
    {text}
  </Text>
);

const Input = styled.input`
  ${inputStyle};
`;

export const Textearea = styled.textarea`
  ${inputStyle};
`;

export const Field = ({ id, label, children, ...othersInputProps }) => (
  <Box mb="30px">
    <FielLabel text={label} htmlFor={id} />
    {children ? children : <Input id={id} {...othersInputProps} />}
  </Box>
);
