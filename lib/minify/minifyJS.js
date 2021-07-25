/* eslint-disable no-undef */
/**
 * @deprecated
 */
'use strict';
const UglifyJS = require('uglify-es');
module.exports = hexo => {
  hexo.extend.filter.register('after_render:js', function(str){
    const res = UglifyJS.minify(str);
    return res.code;
  });
};
