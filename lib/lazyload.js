/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
'use strict';
module.exports = hexo => {
  if(!hexo.theme.config.lazyload || !hexo.theme.config.lazyload.enable) {
    return;
  }
  hexo.extend.filter.register('after_post_render', data => {
    const loadingImg = hexo.theme.config.lazyload.loadingImg || "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20300%20300'%3E%3C/svg%3E";
    data.content = data.content.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, p2, p3) => {
      if(/class="(.*?)"/gi.test(str)) {
        str = str.replace(/class="(.*?)"/gi, (classStr, p1) => classStr.replace(p1, `${p1} lozad post-image`));
        return str.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, p2, p3) => {
          return str.replace(p3, `${p3} srcset="${loadingImg}" data-src="${p2}"`);
        });
      }
      if(p3) {
        return str.replace(p3, `${p3} srcset="${loadingImg}" data-src="${p2}" class="lozad post-image"`);
      } else {
        return str.replace(p1, `${p1} srcset="${loadingImg}" data-src="${p2}" class="lozad post-image"`);
      }
    });
  });
};