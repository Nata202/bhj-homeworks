'use strict'

const cookieImage = document.getElementById("cookie");
let cookieClick = document.getElementById("clicker__counter");

cookieImage.onclick = function () {
    let currentClicks = parseInt(cookieClick.textContent);
    cookieClick.textContent = currentClicks + 1;
    
};
