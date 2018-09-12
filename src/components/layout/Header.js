import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  CtaLink,
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

const MenuButtonWrapper = styled.div`
  position: absolute;
  left: 15px;
`;

const MenuButton = ({ isMenuOpened, ...otherProps }) => (
  <MenuButtonWrapper {...otherProps}>
    <svg width={46} height={46}>
      <circle fill="#F99E78" cx={23} cy={23} r={23} />
      {isMenuOpened ? (
        <g fill="#111">
          <path d="M16.914 14.68l14.107 14.107-2.121 2.121-14.107-14.107z" />
          <path d="M14.793 28.787L28.9 14.68 31.02 16.8 16.914 30.908z" />
        </g>
      ) : (
        <path
          fill="#111"
          d="M12.432 14.997h19.95v3h-19.95zM12.432 21.432h19.95v3h-19.95zM12.432 27.591h19.95v3h-19.95z"
        />
      )}
    </svg>
  </MenuButtonWrapper>
);

const Header = ({ isMenuOpened, onToggleMenu, scrollWidth }) => (
  <HeaderInner scrollWidth={scrollWidth}>
    <Mobile>
      <MenuButton isMenuOpened={isMenuOpened} onClick={onToggleMenu} />
      <LogoLink to="/">
        <Logotype color="gray.dark" />
      </LogoLink>
    </Mobile>
    <Default>
      <Box width="100%">
        <Grid
          rows={`${SIZES.NAVBAR}px`}
          height="100%"
          columns={'205px 1fr 205px'}
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
            <Box>
              <CtaLink label="Contactez-moi" to="/contact" />
            </Box>
          </Cell>
        </Grid>
      </Box>
    </Default>
  </HeaderInner>
);

export default Header;
