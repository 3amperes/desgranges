import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import { Header, Box } from '../components';
import { getFontFace } from '../utils/mixins';

// sanitize styles
import 'sanitize.css/sanitize.css';

// definr fonts
injectGlobal`
  ${getFontFace('WorkSans')};
  ${getFontFace('WorkSans', 'SemiBold')};
  ${getFontFace('WorkSans', 'Bold')};
  ${getFontFace('UntitledSerif', 'Bold')};

  body {
    font-family: 'WorkSans';
  }
`;

const Layout = ({ children, data }) => (
  <Box p={2} pt="50px">
    <Header siteTitle={data.site.siteMetadata.title} />
    <div> {children()} </div>
  </Box>
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
