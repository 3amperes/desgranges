import React from 'react';
import { Button, CenterSection, Heading } from 'components';

const ContaCta = () => (
  <CenterSection height="400px">
    <Heading is="h2">Envie d'en parler ?</Heading>
    <Button label="Contactez moi" onClick={() => navigateTo('/contact')} />
  </CenterSection>
);

export default ContaCta;
