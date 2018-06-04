import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Text } from '../../tools';

const inputStyle = css`
  border: none;
  padding: 5px;
  outline: 0;
  width: 100%;
`;

const Label = ({ text }) => (
  <Text display="block" fontSize="16px" fontWeight="bold" color="pink" pb="5px">
    {text}
  </Text>
);

const Input = styled.input`
  ${inputStyle};
  border-bottom: 1px solid #ccc;
`;

export const Textearea = styled.textarea`
  ${inputStyle};
  border: 2px dotted #ccc;
`;

export const Field = ({ label, children, ...inputProps }) => (
  <Box mb="15px">
    <label>
      <Label text={label} />
      {children ? children : <Input {...inputProps} />}
    </label>
  </Box>
);
