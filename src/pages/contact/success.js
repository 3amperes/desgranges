import React from 'react';
import Link from 'gatsby-link';
import { Box, Heading } from 'components/tools';

const ContactSuccessPage = () => (
  <Box textAlign="center">
    <Heading>Votre message va m'être transmis hyper vite.</Heading>
    <Link to="/">Retour à l'accueil</Link>
  </Box>
);

export default ContactSuccessPage;
