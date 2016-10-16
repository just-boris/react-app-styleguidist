const path = require('path');
const exists = require('path-exists').sync;
const title = require(path.resolve('package.json')).name;
const components = process.argv[3];

module.exports = {
  title: title + ' – Styleguide',
  components: components || './src/App.js',
  resolver: require('react-docgen').resolver.findAllExportedComponentDefinitions,
  updateWebpackConfig(webpackConfig) {
    const sourceDir = path.resolve(__dirname, 'src');
    const craConfig = require('react-scripts/config/webpack.config.dev');
    if(exists('./src/index.css')) {
      webpackConfig.entry.push('./src/index.css');
    }

    const babelLoader = craConfig.module.loaders.find(config => config.loader === 'babel');
    craConfig.module.loaders.forEach(config => config.include = babelLoader.include);

    webpackConfig.module.loaders.push(...craConfig.module.loaders);
    return webpackConfig;
  }
};
