import React from 'react';
import {
  Container,
  Cell,
  Heading,
  Paragraph,
  ProjectList,
  ContaCta,
  Default,
  Mobile,
} from 'components';

const Intro = () => (
  <React.Fragment>
    <Mobile>
      <Container height="100vh">
        <Cell center middle width={6}>
          <Heading>Projets</Heading>
          <Paragraph>
            Une sélection de projets réalisés sur les 3 dernières années en
            freelance et en agence.
          </Paragraph>
        </Cell>
      </Container>
    </Mobile>
    <Default>
      <Container height="200px">
        <Cell center width={6} left={4}>
          <Heading>Projets</Heading>
          <Paragraph>
            Une sélection de projets réalisés sur les 3 dernières années en
            freelance et en agence.
          </Paragraph>
        </Cell>
      </Container>
    </Default>
  </React.Fragment>
);

const ProjectPage = ({ data }) => {
  const projects =
    data && data.allContentfulProject && data.allContentfulProject.edges;
  return (
    <div>
      <Intro />
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
