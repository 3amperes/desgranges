import React from 'react';
import { navigateTo } from 'gatsby-link';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { Button, Logotype } from 'components/common';
import { Box } from 'components/tools';
import { absolute } from 'utils/mixins';
import { ZINDEXBASE, SIZES } from 'utils/constants';

const HeaderInner = styled.header`
  ${absolute({ top: 0, left: 0 })}
  height: ${SIZES.NAVBAR}px;
  width: 100%;
  padding: 0 60px;
  z-index: ${ZINDEXBASE + 20};
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
        <Logotype m="auto" color="gray.dark" />
      </Cell>
      <Cell middle>
        <Box textAlign="right">
          <Button label="contact" onClick={() => navigateTo('/contact')} />
        </Box>
      </Cell>
    </Grid>
  </HeaderInner>
);

export default Header;
