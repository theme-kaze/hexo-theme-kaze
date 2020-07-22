/* eslint-disable */
hexo.extend.filter.register('after_render:html', (data) => {
  // delete <figure>, remain the <pre><code>...</code></pre>
  // $4 is the fourth matchment in the RegExp below, exactly the code block
  data = data.replace(/<figure(.*?)<table>(.*?)<\/pre>(.*?)<pre>(.*?)<\/pre><\/td>(.*?)<\/table><\/figure>/g, '<pre class="highlight">$4</pre>')
  return data
});