import React, { Component } from 'react';
import { AnimatedLink } from 'components/layout/AnimatedScreen';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Cell, Box, Text, Default, Mobile } from 'components';
import { absolute, transition } from 'utils/mixins';

const Image = styled(Img)`
  display: inline-block;
  max-width: 100%;
`;

const DescriptionWrapper = Box.extend`
  ${absolute({ left: 0, top: 0, right: 0, bottom: 0 })};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  opacity: ${({ isOver }) => (isOver ? 1 : 0)};
  ${transition('opacity')};
`;

const Description = ({ title, tag, isOver }) => (
  <DescriptionWrapper isOver={isOver} bg="gray.blue" color="black">
    <Box textAlign="center">
      <Text isUppercase fontWeight={600}>
        {title}
      </Text>
      <Text isLowercase color="white">
        {tag.title}
      </Text>
    </Box>
  </DescriptionWrapper>
);

const ProjectLinkWrapper = styled(AnimatedLink)`
  position: relative;
  display: block;
  z-index: 10;

  img {
    max-width: 100%;
  }
`;

class ProjectLink extends Component {
  state = {
    isOver: false,
  };
  onMouseEnter = () => {
    this.setState({
      isOver: true,
    });
  };
  onMouseLeave = () => {
    this.setState({
      isOver: false,
    });
  };
  render() {
    const { project } = this.props;
    return (
      <ProjectLinkWrapper
        to={`/projets/${project.slug}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Image resolutions={project.thumbnail.resolutions} />
        <Description
          isOver={this.state.isOver}
          title={project.title}
          tag={project.tag}
        />
      </ProjectLinkWrapper>
    );
  }
}

const ProjectItem = ({ index, project }) => (
  <React.Fragment>
    <Mobile>
      <Box mb={3}>
        <ProjectLink project={project} />
      </Box>
    </Mobile>
    <Default>
      <Cell width={4} left={index % 2 ? 0 : 3} height={2}>
        <ProjectLink project={project} />
      </Cell>
      {index === 0 && <Cell width={4} />}
    </Default>
  </React.Fragment>
);

export default ProjectItem;
