import React from 'react';
import { Box, Section, Title, Paragraph, Strong } from '../components/tools';

const IndexPage = () => (
  <div>
    <Box textAlign="center" py="100px">
      <Title isMain>Découvrez mon travail</Title>
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
    </Box>
    <Section mb="50px">
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
    <Section mb="50px">
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
