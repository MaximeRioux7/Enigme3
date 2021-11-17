import * as Main from "./main.js";
import * as Home from "./home.js";
import * as Texts from "./texts.js";

export function Load(){
    Main.UpdateBackButton(Home.Load);
    Main.UnloadPage();

    let accueilContainer = document.createElement("div");
    accueilContainer.classList.add("app-window");
    accueilContainer.classList.add("accueil");

    let accueil = document.createElement("p");

    let textButton = document.createElement("span");
    textButton.classList.add("textButton");
    textButton.classList.add("menuButton");
    textButton.innerHTML = "<span><i class=\"fas fa-sms\"></i><p class=\"desc\">Messagerie</p></span>";
    textButton.addEventListener("click", ()=>{
        Texts.Load(null);
    });

    accueilContainer.append(accueil);
    accueilContainer.append(textButton)
    Main.appElement.append(accueilContainer);
}