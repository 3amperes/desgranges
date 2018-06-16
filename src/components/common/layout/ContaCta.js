import React from 'react';
import { Cell } from 'styled-css-grid';
import { Box, Heading } from 'components/tools';
import { Button, Container } from 'components/common';

const ContaCta = () => (
  <Container height="400px">
    <Cell width={12} center>
      <Heading is="h2">Envie d'en parler ?</Heading>
      <Button label="Contactez moi" onClick={() => navigateTo('/contact')} />
    </Cell>
  </Container>
);

export default ContaCta;
