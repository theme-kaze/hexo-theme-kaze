/* eslint-disable no-undef */
hexo.on('generateBefore', () => {
  require('../lib/mergeConfig')(hexo);
});