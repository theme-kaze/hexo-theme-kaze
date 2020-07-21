/* eslint-disable */
hexo.extend.filter.register('after_render:html', (data) => {
  // delete <figure>, remain the <pre><code>...</code></pre>
  data = data.replace(/<figure(.*?)<table>(.*?)<\/pre>(.*?)<pre>/g, '<pre class="highlight">');
  data = data.replace(/<\/pre><\/td>(.*?)<\/table><\/figure>/g, '</pre>')
  return data
});