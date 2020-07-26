'use strict';
module.exports = hexo => {
  if(!hexo.theme.config.lazyload || !hexo.theme.config.lazyload.enable) {
    return;
  }
  hexo.extend.filter.register('after_render:html', data => {
    const loadingImg = hexo.theme.config.lazyload.loadingImg || 'data:image/svg+xml,%3Csvg%20xmlns="http://www.w3.org/2000/svg"%20viewBox="0%200%20300%20300"%3E%3C/svg%3E';
    const result = data.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, p2, p3) => {
      if(/class="(.*?)"/gi.test(str)) {
        str = str.replace(/class="(.*?)"/, (classStr, p1) => classStr.replace(p1, `class="${p1} lazyload"`));
      }
      return str.replace(p3, `${p3} srcset="${loadingImg}" data-src="${p2}"`);
    });
    return result;
  });
};