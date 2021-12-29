const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin')

const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = args => {
  const { actions, node } = args

  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [new LoadablePlugin()]
  });
};
