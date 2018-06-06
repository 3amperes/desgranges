const {
  NODE_ENV,
  // TODO certfier le domaine
  URL: NETLIFY_SITE_URL = 'http://desgranges.rocks',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
// TODO remplacer 'isNetlifyProduction' pour indexer le site
// const isNetlifyProduction = NETLIFY_ENV === 'production';
const isNetlifyProduction = false;
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl: 'http://desgranges.rocks',
    title: 'Desgranges',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: isNetlifyProduction
        ? { policy: [{ userAgent: '*' }] }
        : {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
    },
  ],
};
