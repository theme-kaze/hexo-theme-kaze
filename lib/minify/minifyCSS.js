/* eslint-disable no-undef */
'use strict'
const cleancss = require('clean-css')
module.exports = (hexo) => {
  hexo.extend.filter.register('after_render:css', function (str) {
    const result = new cleancss({}).minify(str).styles
    return result
  })
}
