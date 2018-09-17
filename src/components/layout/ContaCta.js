import React from 'react';
import styled from 'styled-components';
import {
  Box,
  CtaLink,
  DecoratedContainer,
  Heading,
  Paragraph,
} from 'components';

import { gridContainer } from 'utils/mixins';

const Wrapper = styled(Box)`
  ${gridContainer('480px')};

  > * {
    grid-column: 1 / -1;
  }

  .contact--paragraph {
    grid-column: 4 / -4;
  }
`;

const ContaCta = () => (
  <Wrapper>
    <Heading is="h2" mb={0}>
      Envie d'en parler ?
    </Heading>
    <Paragraph className="contact--paragraph" textAlign="center" mb={0}>
      Une interrogation sur un projet, une question ou tout simplement des
      disponibilités ?
    </Paragraph>
    <CtaLink label="Contactez-moi" to={'/contact'} />
  </Wrapper>
);

export default ContaCta;
