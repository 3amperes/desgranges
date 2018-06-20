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
  const expandedSkills = skills.filter(skill => skill.node.expand);
  const otherSkills = skills
    .filter(skill => !skill.node.expand)
    .map(skill => skill.node.title);

  return (
    <div>
      {expandedSkills.map(({ node }, index) => {
        const { title, baseline, description, expand } = node;
        return (
          <Section
            key={title}
            surtitle={title}
            title={baseline || ''}
            height={index === 0 ? '85vh' : '100vh'}
          >
            {description && (
              <Description
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            )}
          </Section>
        );
      })}
      {otherSkills.length > 0 && (
        <Section
          key="otherSkills"
          surtitle="et aussi"
          title="D'autres disciplines comme :"
          height="100vh"
        >
          <Paragraph fontWeight="700">{otherSkills.join(', ')} ...</Paragraph>
        </Section>
      )}
    </div>
  );
};

export default SkillsPage;

export const query = graphql`
  query SkillsQuery {
    allContentfulSkills(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          title
          baseline
          order
          expand
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
