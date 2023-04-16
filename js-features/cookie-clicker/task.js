'use strict'

const cookieImage = document.getElementById("cookie");
let cookieClick = document.getElementById("clicker__counter");

cookieImage.onclick = function () {
    this.style.height = '200px';
    this.style.width= '250px';

    let currentClicks = parseInt(cookieClick.textContent);
    cookieClick.textContent = currentClicks + 1;
    
};