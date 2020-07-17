/* eslint-disable no-undef */

// generate categories router
hexo.extend.generator.register('_categories', function(locals) {
  return {
    path  : 'categories/index.html',
    data  : locals.theme,
    layout: 'index'
  };
});
// generate tags router
hexo.extend.generator.register('_tags', function(locals) {
  return {
    path  : 'tags/index.html',
    data  : locals.theme,
    layout: 'index'
  };
});

// generate about router
hexo.extend.generator.register('_about', function(locals) {
  return {
    path  : 'about/index.html',
    data  : locals.theme,
    layout: 'index'
  };
});