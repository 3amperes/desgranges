import React from 'react';
import Logotype from './Logotype';
import { Box, Text } from '../tools';

const Footer = () => (
  <Box bg="sea" color="white" py={6} textAlign="center">
    <Logotype mx="auto" mb={4} color="gray.dark" />
    <Text fontSize={1} lineHeight={1}>
      Romain Desgranges <br /> romain.desgranges@gmail.com <br /> 06 59 24 73 17
    </Text>
  </Box>
);

export default Footer;
