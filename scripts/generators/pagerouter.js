/* eslint-disable no-undef */

// generate categories router
hexo.extend.generator.register('_categories', function(locals) {
  return {
    path  : 'categories/index.html',
    data  : locals.theme,
    layout: 'categories'
  };
});

// generate tags router
hexo.extend.generator.register('_tags', function(locals) {
  return {
    path  : 'tags/index.html',
    data  : locals.theme,
    layout: 'tags'
  };
});


// generate links router
hexo.extend.generator.register('_links', function(locals) {
  return {
    path  : 'links/index.html',
    data  : locals.theme,
    layout: 'links'
  };
});

// generate about router
// about page should be created by users
/*hexo.extend.generator.register('_about', function(locals) {
  return {
    path  : 'about/index.html',
    data  : locals.theme,
    layout: 'index'
  };
});*/