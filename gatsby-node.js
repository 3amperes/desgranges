/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

// You can delete this file if you're not using it
exports.modifyWebpackConfig = ({ config = {}, stage }) => {
  return config.merge({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/project.js`);
    // Query for project nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create blog post pages.
        result.data.allContentfulProject.edges.forEach(edge => {
          createPage({
            path: `/projets/${edge.node.slug}`, // required
            component: projectTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });

        return;
      })
    );
  });
};
