/* eslint-disable no-undef */
// console.js
console.log(String.raw`
          _____                    _____                    _____                    _____          
         /\    \                  /\    \                  /\    \                  /\    \         
        /::\____\                /::\    \                /::\    \                /::\    \        
       /:::/    /               /::::\    \               \:::\    \              /::::\    \       
      /:::/    /               /::::::\    \               \:::\    \            /::::::\    \      
     /:::/    /               /:::/\:::\    \               \:::\    \          /:::/\:::\    \     
    /:::/____/               /:::/__\:::\    \               \:::\    \        /:::/__\:::\    \    
   /::::\    \              /::::\   \:::\    \               \:::\    \      /::::\   \:::\    \   
  /::::::\____\________    /::::::\   \:::\    \               \:::\    \    /::::::\   \:::\    \  
 /:::/\:::::::::::\    \  /:::/\:::\   \:::\    \               \:::\    \  /:::/\:::\   \:::\    \ 
/:::/  |:::::::::::\____\/:::/  \:::\   \:::\____\_______________\:::\____\/:::/__\:::\   \:::\____\
\::/   |::|~~~|~~~~~     \::/    \:::\  /:::/    /\::::::::::::::::::/    /\:::\   \:::\   \::/    /
 \/____|::|   |           \/____/ \:::\/:::/    /  \::::::::::::::::/____/  \:::\   \:::\   \/____/ 
       |::|   |                    \::::::/    /    \:::\~~~~\~~~~~~         \:::\   \:::\    \     
       |::|   |                     \::::/    /      \:::\    \               \:::\   \:::\____\    
       |::|   |                     /:::/    /        \:::\    \               \:::\   \::/    /    
       |::|   |                    /:::/    /          \:::\    \               \:::\   \/____/     
       |::|   |                   /:::/    /            \:::\    \               \:::\    \         
       \::|   |                  /:::/    /              \:::\____\               \:::\____\        
        \:|   |                  \::/    /                \::/    /                \::/    /        
         \|___|                   \/____/                  \/____/                  \/____/         
see theme at https://github.com/0x4qE/hexo-theme-Kaze
`);
// darkmode.js
// reverse button
const darkControlButton = document.getElementById('dark');
darkControlButton.addEventListener('click', () => {
  setDarkmode(reverseDarkModeSetting());
});
// scroll-up.js
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