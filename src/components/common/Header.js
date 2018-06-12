import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Logotype from './Logotype';
import { absolute } from '../../utils/mixins';
import { ZINDEXBASE, SIZES } from '../../utils/constants';

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
    <button onClick={onToggleMenu}>{isMenuOpened ? 'fermer' : 'menu'}</button>
    <Logotype color="gray.dark" />
    <Link to="/contact">contact</Link>
  </HeaderInner>
);

export default Header;
