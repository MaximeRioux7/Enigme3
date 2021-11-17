import * as Home from "./home.js";
export let appElement;

export function UnloadPage(){
    appElement.innerHTML = "";
}

export function UpdateBackButton(){
    let button = document.querySelector(".menu-arrow");
    button.parentElement.replaceWith(button.parentElement.cloneNode(true));

    let func = Array.prototype.shift.apply(arguments);

    button = document.querySelector(".menu-arrow");
    button.parentElement.addEventListener("click", ()=>{
        func.apply(this, arguments);
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    appElement = document.querySelector(".main-app")

    document.querySelector(".menu-circle").parentElement.addEventListener("click", Home.Load);
    document.querySelector(".menu-arrow").parentElement.addEventListener("click", Home.Load);

    Home.Load();
});