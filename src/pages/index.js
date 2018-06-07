import React from 'react';
import { Title, Paragraph, Strong } from '../components/common';

const IndexPage = () => (
  <div>
    <Title big text="Découvrez mon travail" />
    <Paragraph>
      <Strong fontWeight="700">Vous êtes une entreprise,</Strong>
      <br />
      et vous souhaitez revoir ou décliner vos supports de communication print
      et web ?
    </Paragraph>
    <Paragraph>
      <Strong fontWeight="700">Vous êtes une agence,</Strong>
      <br />
      avec des besoins en création et/ou exécution print et web ?
    </Paragraph>
  </div>
);

export default IndexPage;
