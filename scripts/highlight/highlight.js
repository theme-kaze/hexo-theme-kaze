/**
 * reference: https://daief.tech/2020-03-23/hexo-custom-code-highlight-by-prismjs.html
 * ref：https://github.com/hexojs/hexo-renderer-marked/blob/master/README.md#extensibility
 */

/* eslint-disable no-undef */
const prism = require('prismjs');
const loadLanguages = require('prismjs/components/index');
loadLanguages();

const escapeHtml = (str) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\'': '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );

hexo.extend.filter.register('marked:renderer', function (renderer) {
  renderer.code = (sourceCode, language) => {
    const codeResult =
      prism.languages[language] && sourceCode
        ? prism.highlight(sourceCode, prism.languages[language])
        : escapeHtml(sourceCode);
    return `<pre class="language-${language}"><code>${codeResult}</code></pre>`;
  };
});