import React, { Component } from 'react';
import { Container } from 'components';
import ProjectItem from './item';

class ProjectList extends Component {
  render() {
    return (
      <div>
        <Container rows="repeat(3, 80px auto)">
          {this.props.projects.map(({ node }, i) => (
            <ProjectItem project={node} index={i} key={node.id} />
          ))}
        </Container>
      </div>
    );
  }
}

export default ProjectList;
