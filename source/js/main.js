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
const smoothScrollToTop = () => {
  let yTopValve = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
  if (yTopValve > 1) {
    window.requestAnimationFrame(smoothScrollToTop);
    scrollTo(0, Math.floor(yTopValve * 0.85));
  } else {
    scrollTo(0, 0);
  }
};
setTimeout(() => {
  document.getElementById('scrollbutton').onclick = smoothScrollToTop;
}, 0);
// popbutton.js
const reversePopButton = () => {
  const scrollButton = document.getElementById('scrollbutton');
  const menuButton = document.getElementById('menubutton');
  const reverseButton = document.getElementById('popbutton');
  const scrollWidth = document.body.scrollWidth || document.documentElement.scrollWidth;
  if (scrollButton.style.display === 'flex') {
    scrollButton.style.bottom = '32px';
    scrollButton.style.opacity = '0';
    reverseButton.style.transform = 'none';
    setTimeout(() => {
      scrollButton.style.display = 'none';
    }, 100);
  } else {
    scrollButton.style.display = 'flex';
    reverseButton.style.transform = 'rotate(90deg)';
    setTimeout(() => {
      scrollButton.style.bottom = '85px';
      scrollButton.style.opacity = '1';
    }, 100);
  }
  const mobileToc = document.getElementById('mobiletoc');
  if (scrollWidth <= 862 && mobileToc) {
    if (menuButton.style.display === 'flex') {
      menuButton.style.right = '32px';
      menuButton.style.opacity = '0';
      setTimeout(() => {
        menuButton.style.display = 'none';
      }, 100);
    } else {
      menuButton.style.display = 'flex';
      setTimeout(() => {
        menuButton.style.right = '85px';
        menuButton.style.opacity = '1';
      }, 100);
    }
  }
};
setTimeout(() => {
  document.getElementById('popbutton').onclick = reversePopButton;
}, 0);
// menuButton.js
function menuClick(event) {
  const target = event.target;
  const mobileToc = document.getElementById('mobiletoc');
  if (!mobileToc) {
    return;
  }
  if (!mobileToc.contains(target)) {
    mobileToc.style.display = 'none';
    document.body.removeChild(mask);
    document.removeEventListener('click', menuClick);
  }
}
const clickMenuButton = () => {
  const mobileToc = document.getElementById('mobiletoc');
  if (!mobileToc) {
    return;
  }
  mobileToc.style.display = 'block';
  const mask = document.createElement('div');
  mask.id = 'mask';
  document.body.appendChild(mask);
  setTimeout(() => {
    document.addEventListener('click', menuClick);
  }, 0);
};
setTimeout(() => {
  document.getElementById('menubutton').onclick = clickMenuButton;
}, 0);
