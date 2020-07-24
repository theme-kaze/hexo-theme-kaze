/* eslint-disable no-undef */
hexo.extend.helper.register('preload_css', (url, isCross) => `<link rel="preload" href="${url}" as="style" ${isCross ? 'crossorigin' : ''}>`);

hexo.extend.helper.register('preload_js', url => `<link rel="preload" href="${url}" as="script">`);

hexo.extend.helper.register('prefetch_js', url => `<link rel="prefetch" href="${url}" as="script">`);
