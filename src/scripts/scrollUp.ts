const smoothScrollToTop = () => {
  let yTopValve =
    window.pageYOffset ||
    document.body.scrollTop ||
    document.documentElement.scrollTop
  if (yTopValve > 1) {
    window.requestAnimationFrame(smoothScrollToTop)
    scrollTo(0, Math.floor(yTopValve * 0.85))
  } else {
    scrollTo(0, 0)
  }
}
setTimeout(() => {
  const scrollButton = document.getElementById('scrollbutton')
  scrollButton
    ? (scrollButton.onclick = smoothScrollToTop)
    : void 0
}, 0)
