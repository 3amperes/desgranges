import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { absolute } from '../../../utils/mixins';
import { ZINDEXBASE } from '../../../utils/constants';

const NavWrapper = styled.nav`
  ${absolute({ top: 0, left: 0 })};
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: palevioletred;
  color: white;

  z-index: ${ZINDEXBASE + 10};
`;

const Navigation = ({ isOpened, onClose }) => {
  return isOpened ? (
    <NavWrapper>
      <ul>
        <li>
          <Link onClick={onClose} to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link onClick={onClose} to="/projects">
            Projets
          </Link>
        </li>
        <li>
          <Link onClick={onClose} to="/skills">
            Compétences
          </Link>
        </li>
        <li>
          <Link onClick={onClose} to="/about">
            À propos
          </Link>
        </li>
        <li>
          <Link onClick={onClose} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </NavWrapper>
  ) : null;
};

export default Navigation;
