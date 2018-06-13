import React from 'react';
import Link from 'gatsby-link';
import { Box, Heading } from 'components/tools';

const ContactErrorPage = () => (
  <Box textAlign="center">
    <Heading>Désolé, une erreur s'est produite.</Heading>
    <Link to="/">Retour à l'accueil</Link>
  </Box>
);

export default ContactErrorPage;
