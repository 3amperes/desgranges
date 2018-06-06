import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Text } from '../../tools';

const inputStyle = css`
  border: none;
  padding: 5px;
  outline: 0;
  width: 100%;
`;

const Label = Text.withComponent('label');

const FielLabel = ({ text, htmlFor }) => (
  <Label
    htmlFor={htmlFor}
    display="block"
    fontSize="16px"
    fontWeight="bold"
    color="pink"
    pb="5px"
  >
    {text}
  </Label>
);

const Input = styled.input`
  ${inputStyle};
  border-bottom: 1px solid #ccc;
`;

export const Textearea = styled.textarea`
  ${inputStyle};
  border: 2px dotted #ccc;
`;

export const Field = ({ id, label, children, ...othersInputProps }) => (
  <Box mb="15px">
    <FielLabel text={label} htmlFor={id} />
    {children ? children : <Input id={id} {...othersInputProps} />}
  </Box>
);