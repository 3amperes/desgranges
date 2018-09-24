import React from 'react';
import styled, { css } from 'styled-components';
import {
  ButtonLink,
  Paragraph,
  Container,
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

import { gridContainer, media } from 'utils/mixins';
import { SIZES } from 'utils/constants';

const HeroContainer = styled(Box)`
  ${gridContainer(SIZES.INTRO)};

  .hero--title {
    grid-column: 1 / -1;
    ${media.tablet`grid-column: 3 / -3;`};
  }
  .hero--paragraph {
    grid-column: 1 / -1;
    ${media.tablet`grid-column: 5 / -5;`};
  }
  .hero--button {
    grid-column: 1 / -1;
  }
`;

const Hero = () => (
  <HeroContainer>
    <Heading
      className="hero--title"
      textAlign="center"
      fontSize={[8, 9]}
      mb={0}
    >
      Création web & print
    </Heading>
    <Paragraph className="hero--paragraph" textAlign="center" mb={[0, 6]}>
      Je suis Romain Desgranges, designer graphique spécialisé dans la création
      d’interfaces web et de supports print.
    </Paragraph>
    <ButtonLink className="hero--button" label="Découvrir" to="/about" />
  </HeroContainer>
);

const SectionOneWrapper = styled(Box)`
  ${gridContainer('568px')};
  grid-template-rows: 350px repeat(3, auto);
  ${media.tablet`grid-template-rows: repeat(3, auto);`};
  > * {
    grid-column: 1 / -1;
  }
  .section {
    &--title {
      grid-row: 2 / 3;
      ${media.tablet`
        grid-column: 1 / 8;
        grid-row: 1 / 2;
      `};
    }
    &--content {
      grid-row: 3 / 4;
      ${media.tablet`grid-column: 2 / 7; grid-row: 2 / 3;`};
      ${media.desktop`grid-column: 3 / 6; `};
    }
    &--btn {
      grid-row: 4 / 5;
      ${media.tablet`grid-column: 1 / 8; grid-row: 3 / 4`};
    }
    &-illustration {
      grid-row: 1 / 2;
      ${media.tablet`
        grid-column: 7 / -3;
        grid-row: 1 / 4;
      `};
    }
  }
`;
const SectionTwoWrapper = styled(Box)`
  ${gridContainer('568px')};
  grid-template-rows: 350px repeat(3, auto);
  ${media.tablet`grid-template-rows: repeat(3, auto);`};
  > * {
    grid-column: 1 / -1;
  }

  .section {
    &--title {
      grid-row: 2 / 3;
      ${media.tablet`
        grid-column: -8 / -1;
        grid-row: 1 / 2;
      `};
    }
    &--content {
      grid-row: 3 / 4;
      ${media.tablet`grid-column: -7 / -2; grid-row: 2 / 3;`};
      ${media.desktop`grid-column: -6 / -3; `};
    }
    &--btn {
      grid-row: 4 / 5;
      ${media.tablet`grid-column: -8 / -1; grid-row: 3 / 4`};
    }
    &-illustration {
      grid-row: 1 / 2;
      ${media.tablet`
        grid-column: 3 / 7;
        grid-row: 1 / 4;
      `};
    }
  }
`;

const SectionOne = () => (
  <SectionOneWrapper is="section" mb={6}>
    <Heading className="section--title" is="h2" mb={0}>
      Voir et être vu
    </Heading>
    <Box className="section--content" textAlign="center">
      <Paragraph>
        <strong>
          Vous êtes une entreprise, une association ou une administration,
        </strong>{' '}
        et vous souhaitez asseoir ou accroître votre visibilité grâce à vos
        supports de communication ?
      </Paragraph>
      <Paragraph mb={0}>
        <strong>Vous êtes une agence,</strong> et vous avez besoin de visibilité
        sur vos projets en vous appuyant sur un freelance disponible rapidement
        ?
      </Paragraph>
    </Box>
    <ButtonLink className="section--btn" label="contactez-moi" to="/contact" />
    <Lunettes className="section-illustration" />
  </SectionOneWrapper>
);

const SectionTwo = () => (
  <SectionTwoWrapper is="section" mb={6}>
    <Heading className="section--title" is="h2">
      Le cocktail idéal
    </Heading>
    <Box className="section--content" textAlign="center">
      <Paragraph is="strong" fontWeight="700">
        Webdesign, print, identités visuelles, formation, illustration,
        lettering, motion design…
      </Paragraph>
      <Paragraph>
        J’ai les ingrédients qui me permettent de vous proposer le cocktail
        idéal pour vos créations graphiques.
      </Paragraph>
    </Box>

    <ButtonLink className="section--btn" label="mes compétences" to="/skills" />
    <Cocktail className="section-illustration" />
  </SectionTwoWrapper>
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

const Projects = ({ projects }) => (
  <div>
    <Box textAlign="center" mb={5}>
      <SurTitle label="Quoi de neuf ?" />
      <Heading is="h2">Les derniers projets</Heading>
    </Box>
    {!!projects && <ProjectList projects={projects} />}
  </div>
);
const IndexPage = ({ data }) => {
  const projects =
    data && data.allContentfulProject && data.allContentfulProject.edges;
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Projects projects={projects} />
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
            sizes(maxWidth: 850, maxHeight: 850) {
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
