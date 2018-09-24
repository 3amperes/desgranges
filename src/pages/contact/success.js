import React from 'react';
import { AnimatedLink } from 'components/layout/AnimatedScreen';
import { Box, Heading } from 'components';

const ContactSuccessPage = () => (
  <Box textAlign="center">
    <Heading>Votre message va m'être transmis hyper vite.</Heading>
    <AnimatedLink to="/">Retour à l'accueil</AnimatedLink>
  </Box>
);

export default ContactSuccessPage;
