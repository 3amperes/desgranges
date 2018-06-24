import React from 'react';
import { Button, CenterSection, Heading, Paragraph } from 'components';
import { navigateTo } from 'gatsby-link';

const ContaCta = () => (
  <CenterSection height="400px">
    <Heading is="h2">Envie d'en parler ?</Heading>
    <Paragraph fontWeight="700">
      Une interrogation sur un projet, une question ou tout simplement des
      disponibilités ?
    </Paragraph>
    <Button label="Contactez moi" onClick={() => navigateTo('/contact')} />
  </CenterSection>
);

export default ContaCta;
