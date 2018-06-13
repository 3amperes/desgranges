import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Button, Logotype } from 'components/common';
import { absolute } from 'utils/mixins';
import { ZINDEXBASE, SIZES } from 'utils/constants';

const HeaderInner = styled.header`
  ${absolute({ top: 0, left: 0 })};
  height: ${SIZES.NAVBAR}px;
  width: 100%;

  padding: 0 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: ${ZINDEXBASE + 20};
`;

const Header = ({ isMenuOpened, onToggleMenu }) => (
  <HeaderInner>
    <Button onClick={onToggleMenu} label={isMenuOpened ? 'fermer' : 'menu'} />
    <Logotype color="gray.dark" />
    <Button label="contact" />
  </HeaderInner>
);

export default Header;
