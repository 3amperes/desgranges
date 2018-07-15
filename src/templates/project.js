import React from 'react';
import Img from 'gatsby-image';
import {
  CenterSection,
  Container,
  SurTitle,
  Paragraph,
  ContaCta,
  Cell,
  Box,
  Heading,
} from 'components';

const SubTitle = ({ children }) => (
  <Heading is="h2" fontSize={7}>
    {children}
  </Heading>
);

const ProjectTemplate = ({ data }) => {
  const {
    title,
    tag,
    thumbnail,
    object,
    answer,
    main,
    footer,
  } = data.contentfulProject;
  return (
    <div>
      <CenterSection height="150px">
        {!!tag && <SurTitle label={tag.title} />}
        <Heading>{title}</Heading>
      </CenterSection>
      <Container>
        <Cell width={8} left={3}>
          <Img sizes={thumbnail.sizes} />
        </Cell>
      </Container>
      <Container height="400px">
        <Cell width={3} left={4}>
          <SubTitle>Objectif</SubTitle>
          <Paragraph>{object}</Paragraph>
        </Cell>
        <Cell width={3}>
          <SubTitle>Solution</SubTitle>
          <Paragraph>{answer}</Paragraph>
        </Cell>
      </Container>
      {!!main && (
        <Container height="auto">
          <Cell
            width={8}
            left={3}
            dangerouslySetInnerHTML={{
              __html: main.childMarkdownRemark.html,
            }}
          />
        </Container>
      )}
      {!!footer && (
        <Container height="500px">
          <Cell
            width={6}
            left={4}
            dangerouslySetInnerHTML={{
              __html: footer.childMarkdownRemark.html,
            }}
          />
        </Container>
      )}
    </div>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query projectQuery($slug: String) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      tag {
        title
      }
      thumbnail {
        sizes(maxWidth: 850) {
          ...GatsbyContentfulSizes
        }
      }
      object
      answer
      main {
        childMarkdownRemark {
          html
        }
      }
      footer {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
