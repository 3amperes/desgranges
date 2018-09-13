import React from 'react';
import {
  Box,
  CtaLink,
  DecoratedContainer,
  Heading,
  Paragraph,
} from 'components';

const ContaCta = () => (
  <Box pb={[4, 6, 7]}>
    <DecoratedContainer>
      <Box textAlign="center">
        <Heading is="h2">Envie d'en parler ?</Heading>
        <Paragraph>
          Une interrogation sur un projet, une question ou tout simplement des
          disponibilités ?
        </Paragraph>
        <CtaLink label="Contactez-moi" to={'/contact'} />
      </Box>
    </DecoratedContainer>
  </Box>
);

export default ContaCta;
