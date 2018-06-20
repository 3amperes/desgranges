import React from 'react';
import {
  Button,
  PageHeader,
  Paragraph,
  Container,
  Cell,
  ContaCta,
  Box,
  Text,
  Heading,
} from 'components';

const IndexPage = () => (
  <div>
    <Container height="85vh">
      <Cell width={8} left={3} middle>
        <PageHeader isBig title="Découvrez mon travail">
          <Paragraph>
            <Text is="strong" fontWeight="700">
              Vous êtes une entreprise,
            </Text>
            <br />
            et vous souhaitez revoir ou décliner vos supports de communication
            print et web ?
          </Paragraph>
          <Paragraph>
            <Text is="strong" fontWeight="700">
              Vous êtes une agence,
            </Text>
            <br />
            avec des besoins en création et/ou exécution print et web ?
          </Paragraph>
          <Box mt={4}>
            <Button label="suivez le guide" />
          </Box>
        </PageHeader>
      </Cell>
    </Container>
    <Container>
      <Cell width={8} left={3} height={2}>
        <Heading is="h2">Marquer et se faire remarquer</Heading>
        <Paragraph fontWeight="700">
          Pour une entreprise l’image est primordiale, alors comment bien
          diffuser votre message et vos valeurs ?
        </Paragraph>
        <Paragraph>
          En travaillant son image et ses supports de communication de manière
          originale et pertinente. Un logo et une charte graphique, un site
          internet, une documentation print et pdf, des slides de présentation…
          autant de moyens pour vous de diffuser l’adn de votre entreprise.
        </Paragraph>
      </Cell>
    </Container>
    <Container>
      <Cell width={8} left={3}>
        <Heading is="h2">Votre guide</Heading>
        <Paragraph fontWeight="700">
          C’est mieux de savoir à qui on parle, ou plutôt qui vous parle !
        </Paragraph>
        <Paragraph>
          Je me présente, Romain Desgranges, 35 ans, designer graphique print et
          web à Rennes. Je vous accompagne sur la création graphique de tous vos
          supports de communication.
        </Paragraph>
      </Cell>
    </Container>
    <Container>
      <Cell center width={8} left={3}>
        <Heading is="h2">Et donc voilà ce que ça peut donner :</Heading>
      </Cell>
    </Container>
    <ContaCta />
  </div>
);

export default IndexPage;
