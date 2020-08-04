/* eslint-disable no-undef */
'use strict';
hexo.on('generateBefore', () => {
  require('../lib/mergeConfig')(hexo);
  require('../lib/lazyload')(hexo);
  if (hexo.theme.config.minify.enable) {
    if (hexo.theme.config.minify.css) {
      require('../lib/minify/minifyCSS')(hexo);
    }
    if (hexo.theme.config.minify.js) {
      require('../lib/minify/minifyJS')(hexo);
    }
    if (hexo.theme.config.minify.html) {
      require('../lib/minify/minifyHTML')(hexo);
    }
  }
});