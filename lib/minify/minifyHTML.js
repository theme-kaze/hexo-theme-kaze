/* eslint-disable no-undef */
'use strict';
const htmlminify = require('html-minifier').minify;
module.exports = hexo => {
  hexo.extend.filter.register('after_render:html', function(str){
    const result = htmlminify(str, {
      collapseWhitespace: true,
      minifyURLs: true,
      sortAttributes: true,
      sortClassName: true,
      minifyJS: true,
      minifyCSS: true
    });
    return result;
  });
};