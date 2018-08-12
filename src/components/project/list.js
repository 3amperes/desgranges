import React, { Component } from 'react';
import { Container, Default, Mobile } from 'components';
import ProjectItem from './item';

const ProjectListContainer = ({ children }) => (
  <React.Fragment>
    <Mobile>{children}</Mobile>
    <Default>
      <Container rows="repeat(3, 50px auto)">{children}</Container>
    </Default>
  </React.Fragment>
);
class ProjectList extends Component {
  render() {
    return (
      <ProjectListContainer>
        {this.props.projects.map(({ node }, i) => (
          <ProjectItem project={node} index={i} key={node.id} />
        ))}
      </ProjectListContainer>
    );
  }
}

export default ProjectList;
