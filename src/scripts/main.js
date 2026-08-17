'use strict';

// write code here
const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

wall.style.position = 'relative';

spider.style.cssText = `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)`;
