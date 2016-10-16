#!/usr/bin/env node
const styleguidist = require('react-styleguidist');
const fs = require('fs');
const path = require('path');
const script = process.argv[2];

const guide = styleguidist(require('../styleguide.config'));

switch (script) {
case 'build':
  return guide.build(e => e && console.error(e));
case 'server':
  return guide.server(e => e && console.error(e));
case 'eject':
  return require('../eject')();
default:
  console.log('Unknown command "' + script + '".');
  process.exit(1);
}
