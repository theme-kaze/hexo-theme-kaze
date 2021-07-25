function htmlEscape(h: string) {
  return h.replace(/[<>&"]/g, (i) => {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[
      i
    ] as string
  })
}

function searchClick(event: Event) {
  const searchContent = document.querySelector('#local-search') as HTMLElement
  if (!searchContent.contains(event.target as Node)) {
    const searchInput = document.querySelector(
      '#search-input'
    ) as HTMLInputElement
    const content = document.querySelector('#search-content') as HTMLElement
    searchInput.value = ''
    searchContent.style.display = 'none'
    content.innerHTML = ''
    window.mask.remove()
    document.removeEventListener('click', searchClick)
  }
}

setTimeout(() => {
  if (window.searchControlButton) {
    window.searchControlButton.addEventListener('click', () => {
      const mask = document.createElement('div')
      mask.id = 'mask'
      document.body.append(mask)
      const searchMain = document.querySelector('#local-search') as HTMLElement
      searchMain.style.display = 'block'
      setTimeout(() => {
        document.addEventListener('click', searchClick)
      }, 0)
    })
  }
})

// eslint-disable-next-line no-unused-vars
window.localSearch = function (path: string) {
  fetch(path)
    .then((res) => res.json())
    .then((res) => {
      let input = document.getElementById('search-input') as HTMLInputElement
      let resultContent = document.getElementById(
        'search-content'
      ) as HTMLElement

      input.addEventListener('input', function () {
        let str = '<ul class="search-result-list">'
        let keyword = htmlEscape(this.value.trim().toLowerCase())
        resultContent.innerHTML = ''
        if (this.value.trim().length <= 0) {
          return
        }
        res.forEach(function (data: any) {
          let isMatch = true
          if (!data.title || data.title.trim() === '') {
            data.title = 'Untitled'
          }
          let dataTitle = data.title.trim().toLowerCase()
          const dataContent = data.content
            .trim()
            .replace(/<[^>]+>/g, '')
            .toLowerCase()
          let firstOccur = -1
          let titleOccur = -1
          const indexTitle = dataTitle.indexOf(keyword)
          titleOccur = indexTitle
          let indexContent = 0
          if (dataContent !== '') {
            indexContent = dataContent.indexOf(keyword)
            firstOccur = indexContent
          }
          if (indexTitle < 0 && indexContent < 0) {
            isMatch = false
          }
          if (indexContent < 0) {
            firstOccur = 0
          }
          if (indexTitle < 0) {
            titleOccur = 0
          }
          if (isMatch) {
            str += `<li><a href="${data.url}" class="search-result-title" >'${dataTitle}</a>`
            const content = data.content
            if (firstOccur >= 0) {
              const start = Math.max(0, firstOccur - 12)
              const end = Math.min(content.length, firstOccur + 12)
              let matchContent = content.substr(start, end)
              matchContent = matchContent.replace(
                new RegExp(keyword, 'gi'),
                '<em class="search-keyword">' + keyword + '</em>'
              )
              str += '<p class="search-result">' + matchContent + '...</p>'
            }
            str += '</li>'
          }
        })
        str += '</ul>'
        if (str.indexOf('<li>') === -1) {
          return (resultContent.innerHTML =
            '<ul><span class="local-search-empty">没有搜索到结果<span></ul>')
        }
        resultContent.innerHTML = str
      })
    })
}
