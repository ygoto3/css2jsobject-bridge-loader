'use strict';

const test = require('tape');
const fs = require('fs');
const rmdir = require('rmdir');
const loader = require('./index.js');

const temp = `${__dirname}/temp`;

test('css2jsobject-bridge-loader', t => {
  if ( !fs.existsSync(temp) ) {
    fs.mkdirSync(temp);
  }
  fs.writeFileSync(`${temp}/styles.css`, `
    .list {
      background-color: #00ff00;
    }
  `);
  const mockContext = { context: temp };

  const actual = loader.call(mockContext, './styles.css');
  const expected = 'module.exports = {".list":{"background-color":"#00ff00"}};';

  t.equal(actual, expected, 'css2jsobject-bridge-loader should convert css contents in a specified file to a JavaScript Object for WebPack to load');

  rmdir(temp);

  t.end();
});
