// control reverse button
const reverseDarkList = {
  dark: 'light',
  light: 'dark'
};
// reverse button
const darkControlButton = document.getElementById('dark');
// get the data of css prefers-color-scheme
const getCssMediaQuery = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
// reverse current darkmode setting function
const reverseDarkModeSetting = () => {
  let setting = localStorage.getItem('user-color-scheme');
  if(reverseDarkList[setting]) {
    setting = reverseDarkList[setting];
  } else if(setting === null) {
    setting = reverseDarkList[getCssMediaQuery()];
  } else {
    return;
  }
  localStorage.setItem('user-color-scheme', setting);
  return setting;
};
// apply current darkmode setting
const setDarkmode = mode => {
  const setting = mode || localStorage.getItem('user-color-scheme');
  if(setting === getCssMediaQuery()) {
    document.documentElement.removeAttribute('data-user-color-scheme');
    localStorage.removeItem('user-color-scheme');
  } else if(reverseDarkList[setting]) {
    document.documentElement.setAttribute('data-user-color-scheme', setting);
  } else {
    document.documentElement.removeAttribute('data-user-color-scheme');
    localStorage.removeItem('user-color-scheme');
  }
};
setDarkmode();
darkControlButton.addEventListener('click', () => {
  setDarkmode(reverseDarkModeSetting());
});