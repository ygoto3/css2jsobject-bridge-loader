'use strict';

const fs = require('fs');
const path = require('path');
const css2jsobject = require('css2jsobject');

module.exports = function (filelist) {
  const source = path.resolve(this.context, filelist.trim());
  const content = fs.readFileSync(source).toString();
  const jsobj = css2jsobject(content);
  return `module.exports = ${JSON.stringify(jsobj)};`;
}
