import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import { Header, Box } from '../components';
import { getFontFace } from '../utils/mixins';

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

const MainWrapper = ({ children }) => (
  <Box p={2} pt="120px" bg="gray.light">
    {children}
  </Box>
);

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <MainWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div> {children()} </div>
    </MainWrapper>
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
