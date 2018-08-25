import React from 'react';
import { CtaLink, CenterSection, Heading, Paragraph } from 'components';

const ContaCta = () => (
  <CenterSection height="400px">
    <Heading is="h2">Envie d'en parler ?</Heading>
    <Paragraph fontWeight="700">
      Une interrogation sur un projet, une question ou tout simplement des
      disponibilités ?
    </Paragraph>
    <CtaLink label="Contactez-moi" to={'/contact'} />
  </CenterSection>
);

export default ContaCta;
