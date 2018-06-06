import React from 'react';
import PropTypes from 'prop-types';
import { Header, Box } from '../components';

import 'sanitize.css/sanitize.css';
import '../fonts/fonts.css';

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
