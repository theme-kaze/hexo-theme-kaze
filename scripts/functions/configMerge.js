/* eslint-disable no-undef */
hexo.on('generateBefore', function () {
  if (hexo.locals.get) {
    const data = hexo.locals.get('data');
    data && data.kaze_config && (hexo.theme.config = data.kaze_config);
  }
});