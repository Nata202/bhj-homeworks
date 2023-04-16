'use strict'

let windowMain = document.getElementById("modal_main");
let windowClose = div.getElementsByClassName("modal__close");
let windowSuccess = a.getElementsByClassName("show-success");

console.log(windowMain);
//Array.from(windowMain);

windowClose.oneclick = function() {
    windowMain.close();
}

windowSuccess.oneclick = function() {
    console.log(document.getElementById("modal_success"));
}