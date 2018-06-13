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
