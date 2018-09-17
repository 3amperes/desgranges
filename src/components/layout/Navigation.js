import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { TimelineLite, Elastic } from 'gsap';
import styled from 'styled-components';
import { color, themeGet } from 'styled-system';
import { Container, Cell, Text, Link, Default, Mobile } from 'components';
import { transition } from 'utils/mixins';
import { ZINDEXBASE } from 'utils/constants';

const NavWrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 100vw;
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

class NavItem extends Component {
  renderNav = () => {
    const { label, innerRef, ...linkProps } = this.props;
    return (
      <div ref={innerRef} style={defaultStyle}>
        <Text fontWeight="700" letterSpacing="4px" fontSize={3} isUppercase>
          <Link {...linkProps}>{label}</Link>
        </Text>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Mobile>
          <Cell height={1} width={6} center middle>
            {this.renderNav()}
          </Cell>
        </Mobile>
        <Default>
          <Cell height={1} width={8} left={3} center middle>
            {this.renderNav()}
          </Cell>
        </Default>
      </React.Fragment>
    );
  }
}
class Navigation extends Component {
  scrollWidth = 0;

  onEnter = () => {
    this.scrollWidth = this.props.scrollWidth;

    const animation = new TimelineLite();
    animation.from(this.wrapper, 0.25, { opacity: 0 });
    animation.staggerFrom(
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
    animation.play();
  };

  onExit = () => {
    const animation = new TimelineLite();
    if (this.scrollWidth) {
      animation.set(navItems.map(item => this[item.ref]), {
        x: -(this.scrollWidth / 2),
      });
      this.scrollWidth = 0;
    }
    animation.staggerTo(
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
    animation.to(this.wrapper, 0.25, { opacity: 0 });
    animation.play();
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
              <Container height="100%" rows="repeat(5, 64px)">
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
