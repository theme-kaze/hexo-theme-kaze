interface Window {
  setDarkmode: Function
  reverseDarkModeSetting: Function
  searchControlButton: Element | null
}
const scrollWidth =
  document.body.scrollWidth || document.documentElement.scrollWidth
let darkControlButton = null
window.searchControlButton = null
if (scrollWidth <= 742) {
  darkControlButton = document.getElementsByClassName('darkwidget')[0]
  window.searchControlButton = document.getElementsByClassName('searchwidget')[0]
} else {
  darkControlButton = document.getElementsByClassName('darknavbar')[0]
  window.searchControlButton = document.getElementsByClassName('searchnavbar')[0]
}

darkControlButton.addEventListener('click', () => {
  window.setDarkmode(window.reverseDarkModeSetting())
})
