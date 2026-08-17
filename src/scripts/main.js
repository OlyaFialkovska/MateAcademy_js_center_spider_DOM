'use strict';

// write code here
const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const topWall = wall.clientHeight / 2 - spider.offsetHeight / 2;

const leftWall = wall.clientWidth / 2 - spider.offsetWidth / 2;

wall.style.position = 'relative';

spider.style.position = 'absolute';

spider.style.top = `${topWall}px`;

spider.style.left = `${leftWall}px`;
