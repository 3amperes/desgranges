import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Cell, Box, Text } from 'components';
import { absolute, transition } from 'utils/mixins';

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

const ProjectLink = styled.a`
  position: relative;
  display: block;
  z-index: 10;

  img {
    max-width: 100%;
  }
`;

class ProjectItem extends Component {
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
    const { index, project } = this.props;
    return (
      <React.Fragment>
        <Cell width={4} left={index % 2 ? 0 : 3} height={2}>
          <ProjectLink
            href={`/projets/${project.slug}`}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <Img resolutions={project.thumbnail.resolutions} />
            <Description
              isOver={this.state.isOver}
              title={project.title}
              tag={project.tag}
            />
          </ProjectLink>
        </Cell>
        {index === 0 && <Cell width={4} />}
      </React.Fragment>
    );
  }
}

export default ProjectItem;
