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
    'gatsby-transformer-remark',
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `b542e4xl0kr3`,
        accessToken: `10646b354f907e147e390652f3305001c20e6d80d94c3f8ab7ddc45f72b4c0f1`,
      },
    },
  ],
};
