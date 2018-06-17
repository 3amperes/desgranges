import React from 'react';
import { Cell } from 'styled-css-grid';
import { Container, Paragraph, ContaCta } from 'components/common';
import { Box, Heading } from 'components/tools';

const AboutPage = () => (
  <div>
    <Container height="400px">
      <Cell width={8} left={3}>
        <Box maxWidth="600px" pl="150px">
          <Heading mb={0}>Je suis designer graphique</Heading>
        </Box>
      </Cell>
    </Container>
    <Container height="auto">
      <Cell width={4} left={5}>
        <Paragraph>
          Je m’appelle Romain Desgranges, j’ai 35 ans, pas beaucoup de cheveux
          et je vis à Rennes.
        </Paragraph>
        <Paragraph>
          Je suis formé et doublement diplômé en conception de supports de
          communication print et en webdesign.
        </Paragraph>
        <Paragraph>
          Travailler en mode projet avec ou sans équipe mais toujours en étant à
          l’écoute du client et en phase avec ses objectifs me parait
          primordial.
        </Paragraph>
        <Paragraph>
          Mes précédentes collaborations m’ont amenées à travailler sur des
          projets pour William Peel, Alpine, Tudor, Carrefour, Bioderma, Point
          P, Veolia, Edf, Danone entre autres…
        </Paragraph>
      </Cell>
    </Container>
    <ContaCta />
  </div>
);

export default AboutPage;