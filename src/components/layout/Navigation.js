import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { TimelineLite, Elastic } from 'gsap';
import styled from 'styled-components';
import { color, themeGet } from 'styled-system';
import { Container, Cell, Text, Link } from 'components';
import { transition } from 'utils/mixins';
import { ZINDEXBASE } from 'utils/constants';

const NavWrapper = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  ${color}
  padding-right: ${props => props.scrollWidth}px;

  z-index: ${ZINDEXBASE + 20};

  a {
    ${transition({ property: 'color' })};
    &:hover, &:focus {
      color: ${themeGet('colors.white')};
    }
  }
`;

const navItems = [
  {
    ref: 'home',
    label: 'accueil',
    to: '/',
  },
  {
    ref: 'projetcs',
    label: 'Projets',
    to: '/projects',
  },
  {
    ref: 'skills',
    label: 'Compétences',
    to: '/skills',
  },
  {
    ref: 'about',
    label: 'À propos',
    to: '/about',
  },
  {
    ref: 'contact',
    label: 'Contact',
    to: '/contact',
  },
];

const duration = 1000;

const defaultStyle = {
  opacity: 1,
  transform: 'translate(0) skewX(0)',
};

const NavItem = ({ label, innerRef, ...linkProps }) => {
  return (
    <Cell height={1} width={8} left={3} center middle>
      <div ref={innerRef} style={defaultStyle}>
        <Text fontWeight="700" letterSpacing="4px" fontSize={3} isUppercase>
          <Link {...linkProps}>{label}</Link>
        </Text>
      </div>
    </Cell>
  );
};
class Navigation extends Component {
  animationInit = () => {
    this.animation = new TimelineLite();
    this.animation.from(this.wrapper, 0.25, { opacity: 0 });
    this.animation.staggerFrom(
      navItems.map(item => this[item.ref]),
      0.15,
      {
        x: 300,
        opacity: 0,
        skewX: '-20deg',
        ease: Elastic.easeOut.config(0.25, 1),
      },
      0.15
    );
  };
  onEnter = () => {
    this.animationInit();
    this.animation.play();
  };
  onExit = () => {
    this.animation.reverse();
  };
  render() {
    const { isOpened, onClose, scrollWidth } = this.props;
    return (
      <Transition
        in={isOpened}
        timeout={duration}
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={this.onEnter}
        onExit={this.onExit}
      >
        {state => (
          <div ref={el => (this.wrapper = el)} style={{ opacity: 1 }}>
            <NavWrapper color="black" bg="salmon" scrollWidth={scrollWidth}>
              <Container
                height="100%"
                flow="column"
                rows="repeat(5, 64px)"
                alignContent="center"
              >
                {navItems.map(item => (
                  <NavItem
                    innerRef={el => (this[item.ref] = el)}
                    key={item.ref}
                    onClick={onClose}
                    to={item.to}
                    label={item.label}
                  />
                ))}
              </Container>
            </NavWrapper>
          </div>
        )}
      </Transition>
    );
  }
}

export default Navigation;
