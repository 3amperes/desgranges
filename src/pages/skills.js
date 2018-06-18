import React from 'react';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';
import { Container, Paragraph, ContaCta, SurTitle } from 'components/common';
import { Box, Text, Heading } from 'components/tools';
import { themeGet } from 'styled-system/dist/util';

const Description = Text.extend`
  p {
    margin: 0;
    margin-bottom: ${themeGet('space.3')}px;
  }
`;
const Section = ({ children, height, title, surtitle }) => (
  <Container height={height} alignContent="center" gap="38px">
    <Cell width={8} left={3} middle>
      <SurTitle label={surtitle} />
      <Heading mb={0} textAlign="center">
        {title}
      </Heading>
    </Cell>
    <Cell width={6} left={4} middle>
      {children}
    </Cell>
  </Container>
);

const SkillsPage = ({ data }) => {
  const skills = data.allContentfulSkills.edges;

  return (
    <div>
      {skills.map(({ node: skill }, index) => (
        <Section
          key={skill.title}
          surtitle={skill.title}
          title={skill.baseline}
          height={index === 0 ? '85vh' : '100vh'}
        >
          <Description
            dangerouslySetInnerHTML={{
              __html: skill.description.childMarkdownRemark.html,
            }}
          />
        </Section>
      ))}}
    </div>
  );
};

export default SkillsPage;

export const query = graphql`
  query SkillsQuery {
    allContentfulSkills {
      edges {
        node {
          title
          baseline
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
