import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Toggle } from 'react-powerplug';
import Navigation from './navigation';
import { absolute } from '../../../utils/mixins';

import { ZINDEXBASE } from '../../../utils/constants';

const HeaderInner = styled.header`
  ${absolute({ top: 0, left: 0 })};
  height: 50px;
  width: 100%;

  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: ${ZINDEXBASE + 20};
`;

const Header = ({ siteTitle }) => (
  <Toggle initial={false}>
    {({ on, toggle, set }) => (
      <div>
        <HeaderInner>
          <button onClick={toggle}>{on ? 'fermer' : 'menu'}</button>
          <Link to="/">{siteTitle}</Link>
          <Link to="/">contact</Link>
        </HeaderInner>
        <Navigation isOpened={on} onClose={() => set(false)} />
      </div>
    )}
  </Toggle>
);

export default Header;
