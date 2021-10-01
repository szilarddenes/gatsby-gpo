const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin')

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [new LoadablePlugin()]
  });
};
