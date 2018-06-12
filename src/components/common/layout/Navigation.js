import React from 'react';
import styled from 'styled-components';
import { color, themeGet } from 'styled-system';
import { Grid, Cell } from 'styled-css-grid';
import { Box, Text, Link } from '../../tools';
import { absolute, resetList } from '../../../utils/mixins';
import { ZINDEXBASE } from '../../../utils/constants';

const NavWrapper = styled.nav`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  ${color}

  z-index: ${ZINDEXBASE + 10};
`;

const NavItems = styled.ul`
  ${resetList};
  width: 100%;
`;

const NavItem = ({ label, ...linkProps }) => {
  return (
    <Text
      is="li"
      textAlign="center"
      mb={4}
      lineHeight="64px"
      letterSpacing="4px"
      fontSize={3}
      fontWeight="700"
    >
      <Link {...linkProps}>{label}</Link>
    </Text>
  );
};

const Navigation = ({ isOpened, onClose }) => {
  return isOpened ? (
    <NavWrapper color="black" bg="salmon">
      <Grid
        rows={'100vh'}
        columns={'repeat(12, 70px)'}
        gap="38px"
        justifyContent="center"
        alignContent="center"
      >
        <Cell width={8} left={3} middle>
          <NavItems>
            <NavItem onClick={onClose} to="/" label="Accueil" />
            <NavItem onClick={onClose} to="/projects" label="Projets" />
            <NavItem onClick={onClose} to="/skills" label="Compétences" />
            <NavItem onClick={onClose} to="/about" label="À propos" />
            <NavItem onClick={onClose} to="/contact" label="Contact" />
          </NavItems>
        </Cell>
      </Grid>
    </NavWrapper>
  ) : null;
};

export default Navigation;
