import React from 'react';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';
import { Container, Paragraph, ContaCta, SurTitle } from 'components/common';
import { Box, Text, Heading } from 'components/tools';

const Section = ({ children, height, title, surtitle }) => (
  <Container height={height} alignContent="center">
    <Cell width={8} left={3} middle>
      <SurTitle label={surtitle} />
      <Heading textAlign="center">{title}</Heading>
    </Cell>
    <Cell width={6} left={4} middle>
      {children}
    </Cell>
  </Container>
);

const AboutPage = () => (
  <div>
    <Section
      height="80vh"
      title="Il y a encore de la place sur internet."
      surtitle="Webdesign"
    >
      <Paragraph fontWeight="700">
        Ça veut dire quoi webdesign ? Et pourquoi faire appel à un webdesigner
      </Paragraph>
      <Paragraph>
        Concrètement cela signifie créer le plus beau contenant pour accueillir
        votre contenu sur internet. <br /> Plus clair ? Non ? <br /> Ok, cliquez
        sur le bouton « contactez-moi » et je me ferai un plaisir de venir vous
        présenter mon travail et ma philosophie.{' '}
      </Paragraph>
    </Section>
    <Section
      title="Il y a encore de la place sur internet."
      surtitle="Webdesign"
    >
      <Paragraph fontWeight="700">
        Ça veut dire quoi webdesign ? Et pourquoi faire appel à un webdesigner
      </Paragraph>
      <Paragraph>
        Concrètement cela signifie créer le plus beau contenant pour accueillir
        votre contenu sur internet. <br /> Plus clair ? Non ? <br /> Ok, cliquez
        sur le bouton « contactez-moi » et je me ferai un plaisir de venir vous
        présenter mon travail et ma philosophie.{' '}
      </Paragraph>
    </Section>
    <Section
      title="Il y a encore de la place sur internet."
      surtitle="Webdesign"
    >
      <Paragraph fontWeight="700">
        Ça veut dire quoi webdesign ? Et pourquoi faire appel à un webdesigner
      </Paragraph>
      <Paragraph>
        Concrètement cela signifie créer le plus beau contenant pour accueillir
        votre contenu sur internet. <br /> Plus clair ? Non ? <br /> Ok, cliquez
        sur le bouton « contactez-moi » et je me ferai un plaisir de venir vous
        présenter mon travail et ma philosophie.{' '}
      </Paragraph>
    </Section>
  </div>
);

export default AboutPage;
