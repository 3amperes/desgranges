import React from 'react';
import styled from 'styled-components';
import Logotype from '../Logotype';
import { Container, Cell, Box, Text } from 'components';
import { resetLink, transition } from 'utils/mixins';
import { themeGet } from 'styled-system';
import { Mobile, Default } from '../tools/base';

const Link = styled.a`
  ${resetLink};
  font-size: ${themeGet('fontSizes.1', '14')}px;
  font-weight: 600;
  letter-spacing: ${props => (props.isUppercase ? 2 : 0)}px;
  text-transform: ${props => (props.isUppercase ? 'uppercase' : 'none')};

  ${transition({ property: 'color' })};

  &:hover,
  &:focus {
    color: ${themeGet('colors.black')};
  }
`;

const Footer = () => {
  const linkedin = (
    <div>
      <Link isUppercase href="http://www.linkedin.com">
        Linkedin
      </Link>
    </div>
  );
  const twitter = (
    <div>
      <Link isUppercase href="http://www.twitter.com">
        Twitter
      </Link>
    </div>
  );
  const instagram = (
    <div>
      <Link isUppercase href="http://www.instagram.com">
        instagram
      </Link>
    </div>
  );
  return (
    <Box bg="sea" color="white">
      <Container
        height="400px"
        alignContent="center"
        columns={'repeat(3, auto)'}
        gap="50px"
      >
        <Cell width={3} center>
          <Logotype color="gray.dark" />
        </Cell>
        <Cell width={3} center>
          <Text fontSize={1} lineHeight={1}>
            Romain Desgranges <br />
            <Link href="mailto:romain.desgranges@gmail.com">
              romain.desgranges@gmail.com
            </Link>
            <br />
            06 59 24 73 17
          </Text>
        </Cell>
        <Mobile>
          <Cell width={3} center>
            {linkedin}
            {twitter}
            {instagram}
          </Cell>
        </Mobile>
        <Default>
          <Cell center>{linkedin}</Cell>
          <Cell center>{twitter}</Cell>
          <Cell center>{instagram}</Cell>
        </Default>
      </Container>
    </Box>
  );
};

export default Footer;
