import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { Toggle } from 'react-powerplug';
import theme from 'utils/theme';
import { Header, Box, Footer, Navigation } from 'components/tools';
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

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Toggle initial={false}>
      {({ on, toggle, set }) => (
        <MainWrapper overflowHidden={on} p={0} pt="120px" bg="gray.light">
          <Header onToggleMenu={toggle} isMenuOpened={on} />
          <div> {children()} </div>
          <Footer />
          <Navigation isOpened={on} onClose={() => set(false)} />
        </MainWrapper>
      )}
    </Toggle>
  </ThemeProvider>
);

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
