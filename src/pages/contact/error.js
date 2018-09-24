import React from 'react';
import { AnimatedLink } from 'components/layout/AnimatedScreen';
import { Box, Heading } from 'components';

const ContactErrorPage = () => (
  <Box textAlign="center">
    <Heading>Désolé, une erreur s'est produite.</Heading>
    <AnimatedLink to="/">Retour à l'accueil</AnimatedLink>
  </Box>
);

export default ContactErrorPage;
