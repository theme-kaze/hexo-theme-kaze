const reversePopButton = () => {
  const scrollButton = document.getElementById('scrollbutton')  as HTMLElement
  const menuButton = document.getElementById('menubutton') as HTMLElement
  const reverseButton = document.getElementById('popbutton') as HTMLElement
  const scrollWidth =
    document.body.scrollWidth || document.documentElement.scrollWidth
  if (scrollButton.style.opacity === '1') {
    scrollButton.style.bottom = '32px'
    scrollButton.style.opacity = '0'
    reverseButton.style.transform = 'none'
  } else {
    reverseButton.style.transform = 'rotate(90deg)'
    scrollButton.style.bottom = '85px'
    scrollButton.style.opacity = '1'
  }
  const mobileToc = document.getElementById('mobiletoc')
  if (scrollWidth <= 862 && mobileToc) {
    if (menuButton.style.opacity === '1') {
      menuButton.style.right = '32px'
      menuButton.style.opacity = '0'
    } else {
      menuButton.style.right = '85px'
      menuButton.style.opacity = '1'
    }
  }
  const darkButton = document.querySelector('.darkwidget') as HTMLElement
  const searchButton = document.querySelector('.searchwidget') as HTMLElement
  if (scrollWidth <= 742) {
    if (darkButton.style.opacity === '1') {
      darkButton.style.bottom = '32px'
      darkButton.style.opacity = '0'
      darkButton.style.transform = 'none'
    } else {
      darkButton.style.display = 'flex'
      reverseButton.style.transform = 'rotate(90deg)'
      darkButton.style.bottom = '138px'
      darkButton.style.opacity = '1'
    }

    if (searchButton.style.opacity === '1') {
      searchButton.style.bottom = '32px'
      searchButton.style.opacity = '0'
      searchButton.style.transform = 'none'
    } else {
      searchButton.style.display = 'flex'
      searchButton.style.transform = 'rotate(90deg)'
      searchButton.style.bottom = '191px'
      searchButton.style.opacity = '1'
    }
  }
}
setTimeout(() => {
  (document
    .getElementById('popbutton') as HTMLElement)
    .addEventListener('click', reversePopButton)
}, 0)
