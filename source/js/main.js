// function to control scroll-up
function smoothScrollToTop() {
  let yTopValve = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
  if (yTopValve > 1) {
    window.requestAnimationFrame(smoothScrollToTop);
    scrollTo(0, Math.floor(yTopValve * 0.94));
  } else {
    scrollTo(0, 0);
  }
}
document.getElementById('scrollbutton').onclick = smoothScrollToTop;