#!/usr/bin/env node
const styleguidist = require('react-styleguidist');
const exists = require('path-exists').sync;
const path = require('path');
const script = process.argv[2];
const components = process.argv[3];

const title = require(path.resolve('package.json')).name;

const guide = styleguidist({
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
});

switch (script) {
case 'build':
  return guide.build(e => e && console.error(e));
case 'server':
  return guide.server(e => e && console.error(e));
default:
  console.log('Unknown command "' + script + '".');
  process.exit(1);
}
