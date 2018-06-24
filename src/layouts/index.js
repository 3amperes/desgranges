import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import { TransitionGroup, Transition } from 'react-transition-group';
import { TimelineLite } from 'gsap';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { Toggle } from 'react-powerplug';
import theme from 'utils/theme';
import { Header, Footer, Navigation } from 'components';
import { Box } from 'components';
import { getFontFace } from 'utils/mixins';

// sanitize styles
import 'sanitize.css/sanitize.css';

// define fonts
injectGlobal`
  ${getFontFace('WorkSans')};
  ${getFontFace('WorkSans', 'SemiBold')};
  ${getFontFace('WorkSans', 'Bold')};
  ${getFontFace('UntitledSerif', 'Bold')};

  body {
    font-family: 'WorkSans';
  }
`;

class AnimatedScreen extends React.Component {
  wrapper = React.createRef();

  animate = () => {
    const wrapper = this.wrapper.current;

    this.animation = new TimelineLite();
    this.animation
      .set(wrapper, { x: '-100%' })
      .to(wrapper, 0.4, { x: '0%' })
      .to(wrapper, 0.4, { x: '-100%' }, '+=0.4')
      .set(wrapper, { x: '-100%' });
    this.animation.play();
  };

  render() {
    return (
      <Box
        innerRef={this.wrapper}
        bg={'sea'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          transform: 'translateX(-100%)',
        }}
      />
    );
  }
}

class ViewWrapper extends React.Component {
  shouldComponentUpdate() {
    // Do not update previous screen in order to keep the content visible while transitionning to new screen
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const { state, children } = this.props;
    return (
      <Box
        pt={120}
        style={{
          position: 'absolute', // absolute is required because 2 screens can be on top of each other during the transition
          opacity: state === 'entering' ? 0 : 1,
        }}
      >
        {children}
      </Box>
    );
  }
}

const MainWrapper = Box.extend`
  height: ${props => (props.overflowHidden ? '100vh' : 'auto')};
  overflow-y: ${props => (props.overflowHidden ? 'hidden' : 'visible')};
`;

class Layout extends React.Component {
  animatedScreen = React.createRef();

  onEntering = () => {
    this.animatedScreen.current.animate();
  };

  render() {
    const { children, location, data } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Toggle initial={false}>
          {({ on, toggle, set }) => (
            <MainWrapper overflowHidden={on} p={0} bg="gray.light">
              <AnimatedScreen ref={this.animatedScreen} />
              <TransitionGroup>
                <Transition
                  key={location.pathname}
                  timeout={600}
                  onEntering={this.onEntering}
                >
                  {state => (
                    <ViewWrapper state={state} location={location}>
                      <Header onToggleMenu={toggle} isMenuOpened={on} />
                      <Box pb={6}>{children()}</Box>
                      <Footer />
                      <Navigation isOpened={on} onClose={() => set(false)} />
                    </ViewWrapper>
                  )}
                </Transition>
              </TransitionGroup>
            </MainWrapper>
          )}
        </Toggle>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default withRouter(Layout);

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
