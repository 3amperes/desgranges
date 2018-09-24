import React, { Component } from 'react';
import {
  Container,
  Cell,
  Paragraph,
  ContaCta,
  Text,
  Heading,
  Default,
  Mobile,
} from 'components';

const Strong = ({ text }) => (
  <Text is="strong" fontWeight="700">
    {text}
  </Text>
);

class AboutPage extends Component {
  renderTitle = (props = {}) => (
    <Heading {...props}>Je suis designer graphique</Heading>
  );

  renderContent = () => (
    <div>
      <Paragraph fontWeight="700">
        Je m’appelle Romain Desgranges, j’ai 35 ans, pas beaucoup de cheveux et
        je vis à Rennes.
      </Paragraph>
      <Paragraph>
        Je suis formé et doublement diplômé en conception de supports de
        communication print et en webdesign.
      </Paragraph>
      <Paragraph>
        Travailler en <Strong text="mode projet" /> avec ou sans équipe mais
        toujours en étant <Strong text="à l’écoute du client" /> et en phase
        avec <Strong text="ses objectifs" /> me parait primordial.
      </Paragraph>
      <Paragraph>
        Mes précédentes collaborations m’ont amenées à travailler sur des
        projets pour{' '}
        <Strong
          text="William Peel, Alpine, Tudor, Carrefour, Bioderma, Point P,
        Veolia, Edf, Danone"
        />{' '}
        entre autres…
      </Paragraph>
    </div>
  );

  render() {
    return (
      <div>
        <Container height="auto">
          <Mobile>
            <Cell center middle width={6}>
              {this.renderTitle()}
            </Cell>
            <Cell width={6}>{this.renderContent()}</Cell>
          </Mobile>
          <Default>
            <Cell center middle width={6} left={4}>
              {this.renderTitle({ mb: 0 })}
            </Cell>
            <Cell width={4} left={5}>
              {this.renderContent()}
            </Cell>
          </Default>
        </Container>
        <ContaCta />
      </div>
    );
  }
}

export default AboutPage;
