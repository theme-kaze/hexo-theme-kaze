/* eslint-disable no-undef */
'use strict';
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cleancss = require('clean-css');
module.exports = hexo => {
  hexo.extend.filter.register('after_render:css', function(str){
    const temp = postcss([autoprefixer]).process(str, {from: 'public/main.css', to: 'public/main.css'}).css;
    const result = new cleancss({}).minify(temp).styles;
    return result;
  });
};