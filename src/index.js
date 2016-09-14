'use strict';

const fs = require('fs');
const path = require('path');
const css2jsobject = require('css2jsobject');

module.exports = function (filelist) {
  const files = filelist.split(/\r\n|\r|\n/);
  const jsobj = files
    .filter(isFile)
    .map(createFiles2jsobject(this.context))
    .reduce(jsobjects2jsobject, {})
    ;
  return `module.exports = ${JSON.stringify(jsobj)};`;
}

function isFile(file) {
  return !!file;
}

function createFiles2jsobject(context) {
  return file => {
    let source = file.trim();
    if (source[0] === '.') {
      source = path.resolve(context, source);
    }
    const content = fs.readFileSync(source).toString();
    return css2jsobject(content);
  };
}

function jsobjects2jsobject(objs, obj) {
  return Object.assign(objs, obj);
}
