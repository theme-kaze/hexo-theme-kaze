/* eslint-disable no-undef */
'use strict';
hexo.extend.tag.register('note', (args, content) => {
  if(!args) {
    args = ['default'];
  }
  return `<div class="post-note note-${args.join('')}">${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}</div>`;
}, { ends: true });