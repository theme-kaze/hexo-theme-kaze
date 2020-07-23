/* eslint-disable no-undef */
// reverse button
const darkControlButton = document.getElementById('dark');
darkControlButton.addEventListener('click', () => {
  setDarkmode(reverseDarkModeSetting());
});