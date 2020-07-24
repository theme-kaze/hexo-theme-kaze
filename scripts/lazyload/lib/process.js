/* eslint-disable */
'use strict';
const fs = require('hexo-fs');
function lazyProcess(htmlContent) {
  let loadingImage = this.config.lazyload.loadingImg || "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20300%20300'%3E%3C/svg%3E";
  return htmlContent.replace(/<img(\s*?)data-src="(.*?)"(.*?)>/gi, (str, p1, p2, p3) => {
    if (/class="(.*?)"/gi.test(str)) {
      str = str.replace(/class="(.*?)"/gi, (classStr, p1) => {
        return classStr.replace(p1, `${p1} loaded`);
      });
      return str.replace(p3, `${p3} srcset="${loadingImage}" data-srcset="${p2}"`);
    }
    return str.replace(p3, `${p3} class="loaded" srcset="${loadingImage}" data-srcset="${p2}"`);
  });
}

module.exports.processPost = function (data) {
  data.content = lazyProcess.call(this, data.content);
  return data;
};

module.exports.processSite = function (htmlContent) {
  return lazyProcess.call(this, htmlContent);
};