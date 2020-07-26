'use strict';
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
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
  let dataConfig = {};
  if(hexo.locals.get) {
    const data = hexo.locals.get('data');
    if(data && data.kaze_config) {
      dataConfig = data.kaze_config;
    }
  }
  const themeConfigPath = path.join(__dirname, '../_config.yml');
  const themeConfig = yaml.safeLoad(fs.readFileSync(themeConfigPath, 'utf-8'));
  hexo.theme.config = mergeConfig({}, themeConfig, dataConfig, hexo.theme.config);
};