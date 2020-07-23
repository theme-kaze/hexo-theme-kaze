// function to control scroll-up
function smoothScrollToTop() {
  let yTopValve = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
  if (yTopValve > 1) {
    window.requestAnimationFrame(smoothScrollToTop);
    scrollTo(0, Math.floor(yTopValve * 0.85));
  } else {
    scrollTo(0, 0);
  }
}
setTimeout(() => {
  document.getElementById('scrollbutton').onclick = smoothScrollToTop;
}, 0);
