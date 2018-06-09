import React from 'react';
import styled from 'styled-components';
import { Box, Section, Title, Paragraph, Strong } from '../components/tools';
import { SIZES } from '../utils/constants';

const HeroWrapper = styled.header`
  min-height: calc(100vh - ${SIZES.NAVBAR}px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hero = ({ children, title }) => (
  <HeroWrapper>
    <Box textAlign="center">
      <Title isMain>{title}</Title>
      {children}
    </Box>
  </HeroWrapper>
);

const IndexPage = () => (
  <div>
    <Hero title="Découvrez mon travail">
      <Paragraph>
        <Strong fontWeight="700">Vous êtes une entreprise,</Strong>
        <br />
        et vous souhaitez revoir ou décliner vos supports de communication print
        et web ?
      </Paragraph>
      <Paragraph>
        <Strong fontWeight="700">Vous êtes une agence,</Strong>
        <br />
        avec des besoins en création et/ou exécution print et web ?
      </Paragraph>
    </Hero>
    <Section mb={6}>
      <Title>Marquer et se faire remarquer</Title>
      <Paragraph isBold>
        Pour une entreprise l’image est primordiale, alors comment bien diffuser
        votre message et vos valeurs ?
      </Paragraph>
      <Paragraph>
        En travaillant son image et ses supports de communication de manière
        originale et pertinente. Un logo et une charte graphique, un site
        internet, une documentation print et pdf, des slides de présentation…
        autant de moyens pour vous de diffuser l’adn de votre entreprise.
      </Paragraph>
    </Section>
    <Section mb={6}>
      <Title>Votre guide</Title>
      <Paragraph isBold>
        C’est mieux de savoir à qui on parle, ou plutôt qui vous parle !
      </Paragraph>
      <Paragraph>
        Je me présente, Romain Desgranges, 35 ans, designer graphique print et
        web à Rennes. Je vous accompagne sur la création graphique de tous vos
        supports de communication.
      </Paragraph>
    </Section>
    <Section>
      <Title textAlign="center">Et donc voilà ce que ça peut donner :</Title>
    </Section>
  </div>
);

export default IndexPage;
