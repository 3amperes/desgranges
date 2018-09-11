import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ReactPlayer from 'react-player';
import {
  Container,
  SurTitle,
  Paragraph,
  ContaCta,
  Cell,
  Box,
  ButtonLink,
  Heading,
  Mobile,
  Default,
  Tablet,
  Desktop,
} from 'components';

import { fullWidth } from 'utils/mixins';

const ContentcontainerWrapper = Box.extend`
  img {
    display: inline-block;
    max-width: 100%;
    margin: auto;
    margin-bottom: 36px;

    &.fullwidth {
      max-width: none;
      ${fullWidth};
    }
  }
`;

const SubTitle = ({ children }) => (
  <Heading is="h2" fontSize={7}>
    {children}
  </Heading>
);

const ContentContainer = ({ html, children }) => {
  const RenderCell = ({ ...props }) =>
    html ? (
      <Cell
        {...props}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    ) : (
      <Cell {...props}>{children}</Cell>
    );
  return (
    <ContentcontainerWrapper>
      <Container height="auto">
        <Mobile>
          <RenderCell width={6} />
        </Mobile>
        <Tablet>
          <RenderCell width={10} left={2} />
        </Tablet>
        <Desktop>
          <RenderCell width={8} left={3} />
        </Desktop>
      </Container>
    </ContentcontainerWrapper>
  );
};

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ProjectTemplate = ({ data }) => {
  const {
    title,
    tag,
    thumbnail,
    object,
    answer,
    main,
    embed,
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
        <Container height="auto">
          <Cell width={6}>{renderObject()}</Cell>
          <Cell width={6}>{renderAswer()}</Cell>
        </Container>
      </Mobile>
      <Default>
        <Container height="auto" rows="auto 1fr">
          <Cell width={8} left={3} center>
            {!!tag && <SurTitle label={tag.title} />}
            <Heading>{title}</Heading>
          </Cell>
          <Cell width={8} left={3}>
            <Img sizes={thumbnail.sizes} />
          </Cell>
        </Container>
        <Box py={4}>
          <Container height="auto">
            <Cell width={3} left={4}>
              {renderObject()}
            </Cell>
            <Cell width={3}>{renderAswer()}</Cell>
          </Container>
        </Box>
      </Default>
      {!!main && <ContentContainer html={main.childMarkdownRemark.html} />}
      {!!embed && (
        <PlayerWrapper>
          <ReactPlayer
            className="react-player"
            url={embed}
            width="100%"
            height="100%"
          />
        </PlayerWrapper>
      )}
      {!!footer && <ContentContainer html={footer.childMarkdownRemark.html} />}
      <Box textAlign="center" py={5}>
        <ButtonLink label="Retour à la liste des projets" to="/projects" />
      </Box>
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
      embed
      footer {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
