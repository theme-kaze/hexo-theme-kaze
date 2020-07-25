const isObj = data => (data && typeof data === 'object' && !Array.isArray(data));
const mergeConfig = (result, ...data) => {
  data.forEach(file => Object.keys(file).forEach(item => {
    if(file[item] === null || file[item] === undefined) {
      return;
    }
    if(isObj(file[item]) && isObj(result[item])) {
      mergeConfig(result[item], file[item]);
    } else {
      result[item] = file[item];
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
  hexo.theme.config = mergeConfig({}, dataConfig, hexo.theme.config);
};