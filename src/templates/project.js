import React from 'react';
import Img from 'gatsby-image';
import {
  Container,
  SurTitle,
  Paragraph,
  ContaCta,
  Cell,
  Box,
  Heading,
  Mobile,
  Default,
  Tablet,
  Desktop,
} from 'components';

import { SIZES } from 'utils/constants';

const ContentcontainerWrapper = Box.extend`
  img {
    display: inline-block;
    max-width: 100%;
    margin: 50px auto;
  }
`;

const SubTitle = ({ children }) => (
  <Heading is="h2" fontSize={7}>
    {children}
  </Heading>
);

const ContentContainer = ({ html }) => (
  <ContentcontainerWrapper>
    <Container height="auto">
      <Mobile>
        <Cell
          width={6}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Mobile>
      <Tablet>
        <Cell
          width={10}
          left={2}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Tablet>
      <Desktop>
        <Cell
          width={8}
          left={3}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Desktop>
    </Container>
  </ContentcontainerWrapper>
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

  const renderObject = () => (
    <React.Fragment>
      <SubTitle>Objectif</SubTitle>
      <Paragraph>{object}</Paragraph>
    </React.Fragment>
  );
  const renderAswer = () => (
    <React.Fragment>
      <SubTitle>Solution</SubTitle>
      <Paragraph>{answer}</Paragraph>
    </React.Fragment>
  );
  return (
    <div>
      <Mobile>
        <Box textAlign="center">
          {!!tag && <SurTitle label={tag.title} />}
          <Heading>{title}</Heading>
        </Box>
        <Img sizes={thumbnail.sizes} />
        <Box py={6}>
          <Container height="auto">
            <Cell width={6}>{renderObject()}</Cell>
            <Cell width={6}>{renderAswer()}</Cell>
          </Container>
        </Box>
      </Mobile>
      <Default>
        <Container rows="150px auto" height={SIZES.INTRO}>
          <Cell width={8} left={3} center>
            {!!tag && <SurTitle label={tag.title} />}
            <Heading>{title}</Heading>
          </Cell>
          <Cell width={8} left={3}>
            <Img sizes={thumbnail.sizes} />
          </Cell>
        </Container>
        <Container height="auto">
          <Cell width={3} left={4}>
            {renderObject()}
          </Cell>
          <Cell width={3}>{renderAswer()}</Cell>
        </Container>
      </Default>
      {!!main && <ContentContainer html={main.childMarkdownRemark.html} />}
      {!!footer && <ContentContainer html={footer.childMarkdownRemark.html} />}
      <ContaCta />
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
