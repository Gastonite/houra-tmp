const Path = require('path');
const Recipe = require('../../houra/lib/recipe');

module.exports = Recipe('tmp', {
  cwd: Path.join(__dirname, '..'),
  steps: [
    'vision as views',
    'gna:self'
  ]
});

console.log(module.exports)