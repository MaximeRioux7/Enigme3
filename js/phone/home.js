import * as Main from "./main.js";
import * as Home from "./home.js";
import * as Texts from "./texts.js";
import * as Browser from "./browser.js";

export function Load(){
    Main.UpdateBackButton(Home.Load);
    Main.UnloadPage();

    let homeContainer = document.createElement("div");
    homeContainer.classList.add("app-window");
    homeContainer.classList.add("accueil");

    AddHomeIcons(homeContainer);

    Main.appElement.append(homeContainer);
}

function AddHomeIcons(homeContainer){
    // Texts
    let icon = document.createElement("span");
    icon.classList.add("textButton");
    icon.classList.add("menuButton");
    icon.innerHTML = "<span><i class=\"fas fa-sms\"></i><p class=\"desc\">Messagerie</p></span>";
    icon.addEventListener("click", ()=>{
        Texts.Load(null);
    });
    homeContainer.append(icon);

    // Firefox
    icon = document.createElement("span");
    icon.classList.add("textButton");
    icon.classList.add("menuButton");
    icon.innerHTML = "<span><i class=\"fab fa-firefox\"></i><p class=\"desc\">Firefox</p></span>";
    icon.addEventListener("click", ()=>{
        Browser.Load();
    });
    homeContainer.append(icon);
}