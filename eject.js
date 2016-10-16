const fs = require('fs');

module.exports = function eject() {
  fs.createReadStream(require.resolve('./styleguide.config'))
    .pipe(fs.createWriteStream('styleguide.config.js'))
    .on('close', () => {
      console.log('Configuration file was ejected successfully!');
      console.log('One more step to go: remove this package and install react-styleguidist directly')
      console.log('')
      console.log('   npm uninstall react-app-styleguidist --save-dev && npm install react-styleguidist --save-dev')
      console.log('')
    });
}
