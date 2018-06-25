import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { Toggle } from 'react-powerplug';
import theme from 'utils/theme';
import { Header, Footer, Navigation } from 'components';
import { AnimatedScreen } from 'components/layout/AnimatedScreen';
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
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Toggle initial={false}>
          {({ on, toggle, set }) => (
            <MainWrapper overflowHidden={on} p={0} bg="gray.light" pt={120}>
              <Header onToggleMenu={toggle} isMenuOpened={on} />
              <AnimatedScreen
                render={props => (
                  <Box pb={6} {...props}>
                    {children()}
                  </Box>
                )}
              />
              <Footer />
              <Navigation isOpened={on} onClose={() => set(false)} />
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

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
