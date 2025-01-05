var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var red = rootStyles.getPropertyValue('--red')
console.log('red: ', 'red')
root.styles.setProperty('--red','red')