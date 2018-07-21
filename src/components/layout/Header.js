import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Box, Button, ButtonLink, Logotype, Grid, Cell } from 'components';
import { absolute } from 'utils/mixins';
import { ZINDEXBASE, SIZES } from 'utils/constants';

const HeaderInner = styled.header`
  ${absolute({ top: 0, left: 0 })}
  height: ${SIZES.NAVBAR}px;
  width: 100%;
  padding: 0 60px;
  z-index: ${ZINDEXBASE + 30};
`;

const LogoLink = styled(Link)`
  margin: auto;
`;

const Header = ({ isMenuOpened, onToggleMenu }) => (
  <HeaderInner>
    <Grid
      rows={`${SIZES.NAVBAR}px`}
      height="100%"
      columns={'100px 1fr 100px'}
      gap="0"
    >
      <Cell middle>
        <Box>
          <Button
            onClick={onToggleMenu}
            label={isMenuOpened ? 'fermer' : 'menu'}
          />
        </Box>
      </Cell>
      <Cell middle>
        <LogoLink to="/">
          <Logotype color="gray.dark" />
        </LogoLink>
      </Cell>
      <Cell middle>
        <Box textAlign="right">
          <ButtonLink label="contact" to="/contact" />
        </Box>
      </Cell>
    </Grid>
  </HeaderInner>
);

export default Header;
