import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';
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

const ContentWrapper = Box.extend`
  padding-right: ${props => props.scrollWidth}px;
`;

class Layout extends React.Component {
  state = {
    navOn: false,
    scrollWidth: 0,
  };

  onToggleNav = () => {
    this.setState(state => ({
      navOn: !state.navOn,
      scrollWidth: state.navOn
        ? 0
        : window.innerWidth - document.documentElement.clientWidth,
    }));
  };

  onCloseNav = () => {
    this.setState({ navOn: false, scrollWidth: 0 });
  };

  render() {
    const { children, data } = this.props;
    const { navOn, scrollWidth } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <AnimatedScreen>
          <MainWrapper overflowHidden={navOn} p={0} pt="120px" bg="gray.light">
            <Header
              onToggleMenu={this.onToggleNav}
              isMenuOpened={navOn}
              scrollWidth={scrollWidth}
            />
            <ContentWrapper pb={6} scrollWidth={scrollWidth}>
              {children()}
            </ContentWrapper>
            <Footer />
            <Navigation
              isOpened={navOn}
              onClose={this.onCloseNav}
              scrollWidth={scrollWidth}
            />
          </MainWrapper>
        </AnimatedScreen>
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
