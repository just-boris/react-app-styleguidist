#!/usr/bin/env node
const styleguidist = require('react-styleguidist');
const exists = require('path-exists');
const path = require('path');
const script = process.argv[2];
const components = process.argv[3];

const guide = styleguidist({
  components,
  updateWebpackConfig(webpackConfig) {
    const sourceDir = path.resolve(__dirname, 'src');
    const craConfig = require('react-scripts/config/webpack.config.dev');
    if(exists('./src/index.css')) {
      webpackConfig.entry.push('./src/index.css');
    }

    webpackConfig.module.loaders.push(...craConfig.module.loaders);
    return webpackConfig;
  }
})

switch (script) {
case 'build':
  return guide.build();
case 'server':
  return guide.server();
default:
  console.log('Unknown command "' + script + '".');
  process.exit(1);
}
