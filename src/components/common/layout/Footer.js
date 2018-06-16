import React from 'react';
import Logotype from '../Logotype';
import { Cell } from 'styled-css-grid';
import { Box, Text } from 'components/tools';
import { Container } from 'components/common';

const Footer = () => (
  <Box bg="sea" color="white">
    <Container height="400px">
      <Cell width={12} center>
        <Logotype mx="auto" mb={4} color="gray.dark" />
        <Text fontSize={1} lineHeight={1}>
          Romain Desgranges <br /> romain.desgranges@gmail.com <br /> 06 59 24
          73 17
        </Text>
      </Cell>
    </Container>
  </Box>
);

export default Footer;
