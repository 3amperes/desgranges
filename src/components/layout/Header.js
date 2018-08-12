import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  ButtonLink,
  Logotype,
  Grid,
  Cell,
  Default,
  Mobile,
} from 'components';
import { AnimatedLink } from 'components/layout/AnimatedScreen';
import { absolute } from 'utils/mixins';
import { ZINDEXBASE, SIZES } from 'utils/constants';

const HeaderInner = styled.header`
  ${absolute({ top: 0, left: 0 })}
  height: ${SIZES.NAVBAR}px;
  width: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${props => props.scrollWidth + 60}px;
  z-index: ${ZINDEXBASE + 30};
`;

const LogoLink = styled(AnimatedLink)`
  margin: auto;
`;

const MenuButton = props => (
  <svg width={46} height={46} {...props}>
    <circle fill="#F99E78" cx={23} cy={23} r={23} />
    <path
      fill="#111"
      d="M12.432 14.997h19.95v3h-19.95zM12.432 21.432h19.95v3h-19.95zM12.432 27.591h19.95v3h-19.95z"
    />
  </svg>
);

const Header = ({ isMenuOpened, onToggleMenu, scrollWidth }) => (
  <HeaderInner scrollWidth={scrollWidth}>
    <Mobile>
      <MenuButton onClick={onToggleMenu} />
      <LogoLink to="/">
        <Logotype color="gray.dark" />
      </LogoLink>
    </Mobile>
    <Default>
      <Box width="100%">
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
      </Box>
    </Default>
  </HeaderInner>
);

export default Header;
