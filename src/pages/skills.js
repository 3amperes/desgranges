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
  Button,
} from 'components';
import { themeGet } from 'styled-system/dist/util';
import { Box } from '../components';

const Description = Text.extend`
  p {
    margin: 0;
    margin-bottom: ${themeGet('space.3')}px;
  }
`;
const Section = ({
  children,
  height,
  title,
  surtitle,
  nextSection,
  onNextSection,
}) => (
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
        {!!nextSection && (
          <Cell width={6} center middle>
            <Box mt={20}>
              <Button label={nextSection} onClick={onNextSection} />
            </Box>
          </Cell>
        )}
      </Container>
    </Mobile>
    <Default>
      <Container
        height={height}
        alignContent="center"
        rows={`300px auto${nextSection ? ' auto' : ''}`}
      >
        <Cell width={6} left={4} middle>
          <SurTitle label={surtitle} />
          <Heading mb={0} textAlign="center">
            {title}
          </Heading>
        </Cell>
        <Cell width={4} left={5} middle>
          {children}
        </Cell>
        {!!nextSection && (
          <Cell width={4} left={5} center>
            <Box mt={20}>
              <Button label={nextSection} onClick={onNextSection} />
            </Box>
          </Cell>
        )}
      </Container>
    </Default>
  </React.Fragment>
);

class SkillsPage extends React.Component {
  constructor(props) {
    super(props);

    this.sectionRefs = {};
    this.setSectionRef = this.setSectionRef.bind(this);
    this.onNextSection = this.onNextSection.bind(this);
  }

  setSectionRef(section) {
    return ref => (this.sectionRefs[section] = ref);
  }

  onNextSection(section) {
    return () => {
      if (this.sectionRefs[section]) {
        const y =
          this.sectionRefs[section].getBoundingClientRect().top +
          window.scrollY;
        window.scroll({
          top: y,
          behavior: 'smooth',
        });
      }
    };
  }

  render() {
    const { data } = this.props;
    const skills = data.allContentfulSkills.edges;
    const expandedSkills = skills.filter(skill => skill.node.expand);
    const otherSkills = skills
      .filter(skill => !skill.node.expand)
      .map(skill => skill.node.title);

    return (
      <div>
        {expandedSkills.map(({ node }, index) => {
          const { title, baseline, description, expand } = node;
          const nextSection =
            expandedSkills.length > index + 1
              ? expandedSkills[index + 1].node.title
              : otherSkills.length > 0
                ? 'et aussi'
                : null;

          return (
            <Box
              key={title}
              py={6}
              minHeight="100vh"
              innerRef={this.setSectionRef(title)}
            >
              <Section
                surtitle={title}
                title={baseline || ''}
                height="100%"
                nextSection={nextSection}
                onNextSection={this.onNextSection(nextSection)}
              >
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
          <Box
            key="otherSkills"
            innerRef={this.setSectionRef('et aussi')}
            height="100vh"
          >
            <Section
              surtitle="et aussi"
              title="D'autres disciplines comme :"
              height="100%"
            >
              <SkillsLeft width="20%" />
              <SkillsRight width="20%" />
              <Paragraph fontWeight="700">
                {otherSkills.join(', ')} ...
              </Paragraph>
            </Section>
          </Box>
        )}
        <ContaCta />
      </div>
    );
  }
}

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
