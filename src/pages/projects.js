import React, { Component } from 'react';
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

class Intro extends Component {
  renderContent = () => (
    <div>
      <Heading>Projets</Heading>
      <Paragraph>
        Une sélection de projets réalisés sur les 3 dernières années en
        freelance et en agence.
      </Paragraph>
    </div>
  );
  render() {
    return (
      <Container height="350px">
        <Mobile>
          <Cell center middle width={4} left={2}>
            {this.renderContent()}
          </Cell>
        </Mobile>
        <Default>
          <Cell center middle width={6} left={4}>
            {this.renderContent()}
          </Cell>
        </Default>
      </Container>
    );
  }
}

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
