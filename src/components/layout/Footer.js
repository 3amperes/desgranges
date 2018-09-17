import React from 'react';
import styled from 'styled-components';
import Logotype from '../Logotype';
import { Box, Text } from 'components';
import { resetLink, resetList, transition, gridContainer } from 'utils/mixins';
import { themeGet } from 'styled-system';

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

const Wrapper = styled(Box)`
  ${gridContainer('420px')};

  > * {
    grid-column: 1 / -1;
  }
  .footer--address {
    font-style: normal;

    &--phone {
      font-weight: 600;
    }
  }
  .footer--socials {
    ${resetList};
    text-align: center;
    display: flex;

    li + li {
      margin-left: ${themeGet('space.5')}px;
    }
  }
`;

const Footer = () => (
  <Wrapper bg="sea" color="black">
    <Logotype className="footer--logo" color="gray.dark" />
    <Text
      className="footer--address"
      is="address"
      fontSize={1}
      lineHeight={1}
      textAlign="center"
    >
      Romain Desgranges <br />
      <Link href="mailto:romain.desgranges@gmail.com">
        romain.desgranges@gmail.com
      </Link>
      <br />
      <span className="footer--address--phone">06 59 24 73 17</span>
    </Text>
    <ul className="footer--socials">
      <li className="footer--social">
        <Link
          className="footer--social linkedin"
          isUppercase
          href="http://www.linkedin.com"
        >
          Linkedin
        </Link>
      </li>
      <li className="footer--social">
        <Link
          className="footer--social"
          isUppercase
          href="http://www.twitter.com"
        >
          Twitter
        </Link>
      </li>
      <li className="footer--social">
        <Link
          className="footer--social"
          isUppercase
          href="http://www.instagram.com"
        >
          instagram
        </Link>
      </li>
    </ul>
  </Wrapper>
);

export default Footer;
