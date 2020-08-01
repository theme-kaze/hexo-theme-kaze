'use strict';
const path = require('path');
const { hexo: { version } } = require(path.normalize('../../../package.json'));
const isObj = data => (data && typeof data === 'object' && !Array.isArray(data));
const mergeConfig = (result, ...data) => {
  data.forEach(file => Object.keys(file).forEach(item => {
    if(file[item] !== null && file[item] !== undefined) {
      if(isObj(file[item]) && isObj(result[item])) {
        mergeConfig(result[item], file[item]);
      } else {
        result[item] = file[item];
      }
    }
  }));
  return result;
};
module.exports = hexo => {
  if(parseInt(version[0]) >= 5) {
    return;
  }
  let dataConfig = {};
  if(hexo.locals.get) {
    const data = hexo.locals.get('data');
    if(data && data.kaze_config) {
      dataConfig = data.kaze_config;
    }
  }
  hexo.theme.config = mergeConfig({}, hexo.theme.config, dataConfig);
};