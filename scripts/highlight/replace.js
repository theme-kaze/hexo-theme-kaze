/* eslint-disable */
/*
TODO: add highlight.js config 
*/
'use strict';
hexo.extend.filter.register('after_post_render', (data) => {
  // delete <figure>, remain the <pre><code>...</code></pre>
  // $4 is the fourth matchment in the RegExp below, exactly the code block
  data.content = data.content.replace(/<figure(.*?)<table>(.*?)<\/pre>(.*?)<pre>(.*?)<\/pre><\/td>(.*?)<\/table><\/figure>/g, '<pre class="highlight">$4</pre>');
});