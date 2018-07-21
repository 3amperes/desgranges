import React from 'react';
import styled from 'styled-components';
import {
  ButtonLink,
  Paragraph,
  Container,
  Cell,
  ContaCta,
  Heading,
  Cocktail,
  Lunettes,
  VegetationLeft,
  VegetationRight,
  ProjectList,
} from 'components';

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;

  div:first-child {
    z-index: 10;
  }
`;

const VegetationLeftWrapper = styled.div`
  position: absolute;
  left: -40px;
  top: 0;
  z-index: 0;
  height: 100%;
`;

const VegetationRightWrapper = styled.div`
  position: absolute;
  right: -40px;
  top: 0;
  z-index: 0;
  height: 100%;
`;

const IndexPage = ({ data }) => {
  const projects =
    data && data.allContentfulProject && data.allContentfulProject.edges;
  return (
    <div>
      <ContentWrapper>
        <Container height="85vh" rows={'auto auto 40%'} alignContent="end">
          <Cell width={12} center middle>
            <Heading fontSize={9} mb={0}>
              Création web & print
            </Heading>
          </Cell>
          <Cell width={4} left={5} center middle>
            <Paragraph mb={0}>
              Je suis Romain Desgranges, designer graphique spécialisé dans la
              création d’interfaces web et de supports print.
            </Paragraph>
          </Cell>
          <Cell width={12} center middle>
            <div>
              <ButtonLink label="Découvrir" to="/about" />
            </div>
          </Cell>
        </Container>
        <VegetationLeftWrapper>
          <VegetationLeft height="100%" />
        </VegetationLeftWrapper>
        <VegetationRightWrapper>
          <VegetationRight height="100%" />
        </VegetationRightWrapper>
      </ContentWrapper>
      <Container>
        <Cell width={3} left={3}>
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
            <strong>Vous êtes une agence,</strong> et vous avez besoin de
            visibilité sur vos projets en vous appuyant sur un freelance
            disponible rapidement ?
          </Paragraph>
          <ButtonLink label="je suis à votre disposition" to="/contact" />
        </Cell>
        <Cell width={3} left={8} middle>
          <Lunettes />
        </Cell>
      </Container>
      <Container>
        <Cell width={3} left={3} middle>
          <Cocktail />
        </Cell>
        <Cell width={3} left={8}>
          <Heading is="h2">Le cocktail idéal</Heading>
          <Paragraph is="strong" fontWeight="700">
            Webdesign, print, identités visuelles, formation, illustration,
            lettering, motion design…
          </Paragraph>
          <Paragraph>
            J’ai les ingrédients qui me permettent de vous proposer le cocktail
            idéal pour vos créations graphiques.
          </Paragraph>

          <ButtonLink label="découvrir mes compétences" to="/skills" />
        </Cell>
      </Container>
      {!!projects && <ProjectList projects={projects} />}
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
            resolutions(width: 390, height: 390) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`;
