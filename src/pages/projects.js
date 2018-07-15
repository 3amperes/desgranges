import React from 'react';
import {
  Container,
  Cell,
  Heading,
  Paragraph,
  ProjectList,
  ContaCta,
} from 'components';

const ProjectPage = ({ data }) => {
  const projects =
    data && data.allContentfulProject && data.allContentfulProject.edges;
  return (
    <div>
      <Container height="200px">
        <Cell center width={6} left={4}>
          <Heading>Projets</Heading>
          <Paragraph>
            Une sélection de projets réalisés sur les 3 dernières années en
            freelance et en agence.
          </Paragraph>
        </Cell>
      </Container>
      <ProjectList projects={projects} />
      <ContaCta />
    </div>
  );
};

export default ProjectPage;

export const query = graphql`
  query allProjectsQuery {
    allContentfulProject(sort: { fields: [order], order: ASC }) {
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
