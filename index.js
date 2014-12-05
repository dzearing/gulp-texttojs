'use strict';

var through = require('through2');
var path = require('path');
var extend = require('node.extend');
var _ = require('lodash');

module.exports = function(options) {

  options = extend({
    template: 'define([], function() { return <%= content %>; });',
    ext: '.js'
  }, options);

  var stream = through.obj(function(file, enc, callback) {

    if (file.isNull() || !file.contents || file.isStream() || !file.contents.length) {
      this.push(file);
      callback();
      return;
    }
console.log('stream' + file.path);

    try {
      var fileContent = file.contents.toString('utf8');

      file.path += options.ext;
      file.contents = new Buffer(_.template(options.template, { content: JSON.stringify(fileContent) }));      
    }
    catch (e) { console.log('error: ' + e); }
    console.log(file.path + ' converted');

    this.push(file);
    callback();
  });

  return stream;
};

