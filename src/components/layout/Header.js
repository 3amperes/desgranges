import React from 'react';
import styled from 'styled-components';
import { Button, CtaLink, Logotype } from 'components';
import { AnimatedLink } from 'components/layout/AnimatedScreen';
import { media } from 'utils/mixins';
import { SIZES, ZINDEXBASE } from 'utils/constants';

const padding = 60;

const Wrapper = styled.header`
  height: ${SIZES.NAVBAR}px;
  width: 100%;
  display: grid;
  padding: 0 ${padding}px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  padding-right: ${props => props.scrollWidth + padding}px;
  position: relative;
  z-index: ${ZINDEXBASE + 30};

  .menu-btn {
    &-mobile {
      ${media.tablet`display: none;`};
    }

    &-desktop {
      display: none;
      justify-self: start;
      ${media.tablet`display: inline-block;`};
    }
  }

  .contact-btn {
    display: none;
    justify-self: end;
    transform: translateX(${padding}px);
    ${media.tablet`display: inline-block;`};
    ${media.desktop`transform: none;`};
  }
`;

const LogoLink = styled(AnimatedLink)`
  display: block;
  text-align: center;
  margin: auto;
  justify-self: center;
  grid-column: 2 / 2;
`;

const MenuButtonWrapper = styled.button`
  border: 0;
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
  <Wrapper scrollWidth={scrollWidth}>
    <MenuButton
      className="menu-btn-mobile"
      isMenuOpened={isMenuOpened}
      onClick={onToggleMenu}
    />
    <Button
      className="menu-btn-desktop"
      onClick={onToggleMenu}
      label={isMenuOpened ? 'fermer' : 'menu'}
    />
    <LogoLink to="/">
      <Logotype color="gray.dark" />
    </LogoLink>
    <CtaLink className="contact-btn" label="Contactez-moi" to="/contact" />
  </Wrapper>
);

export default Header;
