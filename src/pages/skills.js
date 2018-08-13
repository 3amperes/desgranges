import React from 'react';
import {
  Container,
  Cell,
  Text,
  Heading,
  Paragraph,
  ContaCta,
  SurTitle,
  Default,
  Mobile,
  SkillsLeft,
  SkillsRight,
} from 'components';
import { themeGet } from 'styled-system/dist/util';
import { Box } from '../components';

const Description = Text.extend`
  p {
    margin: 0;
    margin-bottom: ${themeGet('space.3')}px;
  }
`;
const Section = ({ children, height, title, surtitle }) => (
  <React.Fragment>
    <Mobile>
      <Container height="auto">
        <Cell width={6} center middle>
          <SurTitle label={surtitle} />
          <Heading mb={0} textAlign="center">
            {title}
          </Heading>
        </Cell>
        <Cell width={6} middle>
          {children}
        </Cell>
      </Container>
    </Mobile>
    <Default>
      <Container height={height} alignContent="center" rows="300px auto">
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
    </Default>
  </React.Fragment>
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
          <Box key={title} py={6} minHeight="100vh">
            <Section surtitle={title} title={baseline || ''} height="100%">
              {description && (
                <div>
                  <SkillsLeft index={index} width="20%" />
                  <SkillsRight index={index} width="20%" />
                  <Description
                    dangerouslySetInnerHTML={{
                      __html: description.childMarkdownRemark.html,
                    }}
                  />
                </div>
              )}
            </Section>
          </Box>
        );
      })}
      {otherSkills.length > 0 && (
        <Section
          key="otherSkills"
          surtitle="et aussi"
          title="D'autres disciplines comme :"
          height="100vh"
        >
          <SkillsLeft width="20%" />
          <SkillsRight width="20%" />
          <Paragraph fontWeight="700">{otherSkills.join(', ')} ...</Paragraph>
        </Section>
      )}
      <ContaCta />
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
