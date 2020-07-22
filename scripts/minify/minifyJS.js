/* eslint-disable no-undef */
const UglifyJS = require('uglify-es');

hexo.extend.filter.register('after_render:js', function(str){
  const res = UglifyJS.minify(str);
  return res.code;
});

