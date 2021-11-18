import * as Home from "./home.js";
export let appElement;

export function UnloadPage(){
    appElement.innerHTML = "";
}

let backButtonAction = null;
export function UpdateBackButton(){
    backButtonAction = Array.prototype.shift.apply(arguments);
}

function EnableBackButton(){
    let backButton = document.querySelector(".menu-arrow");
    backButton.parentElement.addEventListener("click", ()=>{
        backButtonAction.apply(this, arguments);
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    appElement = document.querySelector(".main-app")

    document.querySelector(".menu-circle").parentElement.addEventListener("click", Home.Load);
    UpdateBackButton(Home.Load);
    EnableBackButton();

    Home.Load();
});

/*export function UpdateBackButton(){
    let button = document.querySelector(".menu-arrow");

    button.parentElement.replaceWith(button.parentElement.cloneNode(true));
    button = document.querySelector(".menu-arrow");

    let func = Array.prototype.shift.apply(arguments);
    button.parentElement.addEventListener("click", ()=>{
        func.apply(this, arguments);
    });
}*/