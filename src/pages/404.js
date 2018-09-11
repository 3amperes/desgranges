import React from 'react';
import {
  Box,
  Heading,
  SurTitle,
  ButtonLink,
  Container,
  Cell,
} from 'components';

const NotFoundPage = () => (
  <Container alignContent="top">
    <Cell center middle width={12}>
      <SurTitle label="Erreur 404" />
      <Heading>Perdu ?</Heading>
    </Cell>
    <Cell center middle width={12}>
      <Box mt={5}>
        <ButtonLink to="/" label="Retour à l'accueil" />
      </Box>
    </Cell>
  </Container>
);

export default NotFoundPage;
