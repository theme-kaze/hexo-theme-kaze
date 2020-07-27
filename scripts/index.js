/* eslint-disable no-undef */
'use strict';
hexo.on('generateBefore', () => {
  require('../lib/mergeConfig')(hexo);
  require('../lib/lazyload')(hexo);
  require('../lib/minify/minifyCSS')(hexo);
  require('../lib/minify/minifyJS')(hexo);
  require('../lib/minify/minifyHTML')(hexo);
});