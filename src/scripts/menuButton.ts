function menuClick(event: Event) {
  const target = event.target
  const mobileToc = document.getElementById('mobiletoc')
  if (!mobileToc) {
    return
  }
  if (target && !mobileToc.contains(target as Node)) {
    mobileToc.style.display = 'none'
    window.mask.remove()
    document.removeEventListener('click', menuClick)
  }
}
const clickMenuButton = () => {
  const mobileToc = document.getElementById('mobiletoc')
  if (!mobileToc) {
    return
  }
  mobileToc.style.display = 'block'
  const mask = document.createElement('div')
  mask.id = 'mask'
  document.body.append(mask)
  setTimeout(() => {
    document.addEventListener('click', menuClick)
  }, 0)
}
setTimeout(() => {
  const menuButton = document.getElementById('menubutton')
  menuButton ? (menuButton.onclick = clickMenuButton) : void 0
}, 0)
