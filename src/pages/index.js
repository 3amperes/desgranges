import React from 'react';
import styled, { css } from 'styled-components';
import {
  ButtonLink,
  Paragraph,
  Container,
  Section,
  SurTitle,
  Box,
  Cell,
  ContaCta,
  Heading,
  Cocktail,
  Lunettes,
  VegetationLeft,
  VegetationRight,
  ProjectList,
  Default,
  Desktop,
  Tablet,
  Mobile,
  DecorationWrapper,
} from 'components';

import { SIZES } from 'utils/constants';

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;

  div:first-child {
    z-index: 10;
  }
`;

const Intro = () => (
  <div>
    <Mobile>
      <ContentWrapper>
        <Container
          height={SIZES.INTRO}
          rows={'auto auto 80px'}
          alignContent="center"
        >
          <Cell width={6} center middle>
            <Heading fontSize={9} mb={0}>
              Création web <br /> & print
            </Heading>
          </Cell>
          <Cell width={6} center middle>
            <Paragraph mb={0}>
              Je suis Romain Desgranges, designer graphique spécialisé dans la
              création d’interfaces web et de supports print.
            </Paragraph>
          </Cell>
          <Cell width={6} center top>
            <div>
              <ButtonLink label="Découvrir" to="/about" />
            </div>
          </Cell>
        </Container>
      </ContentWrapper>
    </Mobile>
    <Default>
      <ContentWrapper>
        <Container
          height={'100vh'}
          rows={'auto auto auto'}
          alignContent="center"
        >
          <Cell width={12} center middle>
            <Heading fontSize={9} mb={0}>
              Création web & print
            </Heading>
          </Cell>
          <Cell width={4} left={5} center middle>
            <Paragraph mb={6}>
              Je suis Romain Desgranges, designer graphique spécialisé dans la
              création d’interfaces web et de supports print.
            </Paragraph>
          </Cell>
          <Cell width={12} center>
            <div>
              <ButtonLink label="Découvrir" to="/about" />
            </div>
          </Cell>
        </Container>
        <DecorationWrapper width="30%" left="-10%">
          <VegetationLeft width="100%" />
        </DecorationWrapper>
        <DecorationWrapper width="30%" right="-10%">
          <VegetationRight width="100%" />
        </DecorationWrapper>
      </ContentWrapper>
    </Default>
  </div>
);

const SectionOneContent = () => (
  <div>
    <Heading is="h2">
      Voir <br /> et être vu
    </Heading>
    <Paragraph>
      <strong>
        Vous êtes une entreprise, une association ou une administration,
      </strong>{' '}
      et vous souhaitez asseoir ou accroître votre visibilité grâce à vos
      supports de communication ?
    </Paragraph>
    <Paragraph>
      <strong>Vous êtes une agence,</strong> et vous avez besoin de visibilité
      sur vos projets en vous appuyant sur un freelance disponible rapidement ?
    </Paragraph>
    <ButtonLink label="je suis à votre disposition" to="/contact" />
  </div>
);

const SectionOne = () => (
  <React.Fragment>
    <Mobile>
      <Container height="auto" rows={'250px minmax(min-content, max-content)'}>
        <Cell width={4} left={2} middle>
          <Lunettes />
        </Cell>
        <Cell width={6} center>
          <SectionOneContent />
        </Cell>
      </Container>
    </Mobile>
    <Tablet>
      <Container height="auto" alignContent="center">
        <Cell width={6} left={2} middle>
          <SectionOneContent />
        </Cell>
        <Cell width={4} left={9} middle>
          <Lunettes />
        </Cell>
      </Container>
    </Tablet>
    <Desktop>
      <Container alignContent="center">
        <Cell width={3} left={3} middle>
          <SectionOneContent />
        </Cell>
        <Cell width={3} left={8} middle>
          <Lunettes />
        </Cell>
      </Container>
    </Desktop>
  </React.Fragment>
);

const SectionTwoContent = () => (
  <div>
    <Heading is="h2">Le cocktail idéal</Heading>
    <Paragraph is="strong" fontWeight="700">
      Webdesign, print, identités visuelles, formation, illustration, lettering,
      motion design…
    </Paragraph>
    <Paragraph>
      J’ai les ingrédients qui me permettent de vous proposer le cocktail idéal
      pour vos créations graphiques.
    </Paragraph>

    <ButtonLink label="découvrir mes compétences" to="/skills" />
  </div>
);

const SectionTwo = () => (
  <React.Fragment>
    <Mobile>
      <Box py={6}>
        <Container
          height="auto"
          rows={'250px minmax(min-content, max-content)'}
        >
          <Cell width={4} left={2} middle>
            <Cocktail />
          </Cell>
          <Cell width={6} center>
            <SectionTwoContent />
          </Cell>
        </Container>
      </Box>
    </Mobile>
    <Tablet>
      <Container height="auto" alignContent="center">
        <Cell width={4} middle>
          <Cocktail />
        </Cell>
        <Cell width={6} left={6} middle>
          <SectionTwoContent />
        </Cell>
      </Container>
    </Tablet>
    <Desktop>
      <Container alignContent="center">
        <Cell width={3} left={3} middle>
          <Cocktail />
        </Cell>
        <Cell width={3} left={8} middle>
          <SectionTwoContent />
        </Cell>
      </Container>
    </Desktop>
  </React.Fragment>
);

const RightDecoration = ({ svgRef, ...props }) => (
  <DecorationWrapper right="0" ref={svgRef} {...props}>
    <svg viewBox="0 0 211 235" width="100%">
      <path
        d="M276.08 38.155c-51.8 7.5-76.332 14.47-146.98-21.871C58.45-20.06 3.373 12.13 3.373 38.154c0 26.024 49.58 19.449 65.155 49.18 15.574 29.73-49.734 20.497-65.155 58.41-15.421 37.911 24.769 98.675 65.155 87.469 40.386-11.207 68.409-75.914 116.624-75.914 32.144 0 64.952 42.567 98.426 127.701 29.534-169.563 27.034-251.845-7.499-246.845z"
        fill="#64B8B4"
        fillRule="evenodd"
      />
    </svg>
  </DecorationWrapper>
);

const LeftDecoration = ({ svgRef, ...props }) => (
  <DecorationWrapper left="0" ref={svgRef} {...props}>
    <svg viewBox="0 0 218 268" width="100%">
      <path
        d="M-58.54 50.466c42.097-8.319 149.763-77.518 196.86-38.76 47.099 38.76-16.354 80.06-16.354 121.372S218 158.699 218 206.027c0 47.327-103.761 77.35-175.949 53.738-72.188-23.612-117.561-32.376-124.298-27.994-6.736 4.382-18.389-172.986 23.708-181.305z"
        fill="#F99E78"
        fillRule="evenodd"
      />
    </svg>
  </DecorationWrapper>
);

const IndexPage = ({ data }) => {
  const projects =
    data && data.allContentfulProject && data.allContentfulProject.edges;
  return (
    <div>
      <Intro />
      <Section>
        <Mobile>
          <RightDecoration top="-50px" width="55%" />
        </Mobile>
        <Default>
          <RightDecoration width="35%" />
        </Default>
        <SectionOne />
      </Section>
      <Section>
        <Mobile>
          <LeftDecoration top="100px" width="55%" />
        </Mobile>
        <Default>
          <LeftDecoration width="35%" />
        </Default>

        <SectionTwo />
      </Section>
      <Section>
        <Box textAlign="center" mb={5}>
          <SurTitle label="Quoi de neuf ?" />
          <Heading is="h2">Les derniers projets</Heading>
        </Box>
        {!!projects && <ProjectList projects={projects} />}
      </Section>
      <ContaCta />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query homeProjectsQuery {
    allContentfulProject(
      filter: { highlight: { ne: false } }
      sort: { fields: [order], order: ASC }
    ) {
      edges {
        node {
          id
          order
          slug
          title
          tag {
            title
          }
          highlight
          thumbnail {
            sizes(maxWidth: 400, maxHeight: 400) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulSizes
            }
            title
          }
        }
      }
    }
  }
`;
