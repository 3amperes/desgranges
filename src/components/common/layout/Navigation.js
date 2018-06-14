import React from 'react';
import styled from 'styled-components';
import { color, themeGet } from 'styled-system';
import { Cell } from 'styled-css-grid';
import { Text, Link, GridContainer } from 'components/tools';
import { ZINDEXBASE } from 'utils/constants';

const NavWrapper = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  ${color}

  z-index: ${ZINDEXBASE + 10};
`;

const NavItem = ({ label, ...linkProps }) => {
  return (
    <Cell height={1} width={8} left={3} center middle>
      <Text fontWeight="700" letterSpacing="4px" fontSize={3} isUppercase>
        <Link {...linkProps}>{label}</Link>
      </Text>
    </Cell>
  );
};

const Navigation = ({ isOpened, onClose }) => {
  return isOpened ? (
    <NavWrapper color="black" bg="salmon">
      <GridContainer
        height="100%"
        flow="column"
        rows="repeat(5, 64px)"
        alignContent="center"
      >
        <NavItem onClick={onClose} to="/" label="Accueil" />
        <NavItem onClick={onClose} to="/projects" label="Projets" />
        <NavItem onClick={onClose} to="/skills" label="Compétences" />
        <NavItem onClick={onClose} to="/about" label="À propos" />
        <NavItem onClick={onClose} to="/contact" label="Contact" />
      </GridContainer>
    </NavWrapper>
  ) : null;
};

export default Navigation;
