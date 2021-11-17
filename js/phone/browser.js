import * as Main from "./main.js";

export function Load(){
    Main.UnloadPage();

    let browserContainer = document.createElement("div");
    browserContainer.classList.add("browser-app");
    Main.appElement.append(browserContainer);

    AddBar(browserContainer);
    AddWebPageContent(browserContainer);
}

function AddBar(browserContainer){
    let bar = document.createElement("div");
    bar.classList.add("browser-bar");
    browserContainer.append(bar);

    let icon = document.createElement("span");
    icon.classList.add("icon");
    icon.innerHTML = "<i class=\"fab fa-firefox\"></i>";
    bar.append(icon);

    let navBar = document.createElement("p");
    navBar.classList.add("nav-bar");
    navBar.innerHTML = ":erreur";
    bar.append(navBar);

    let menuButton = document.createElement("span");
    menuButton.classList.add("burger-button");
    menuButton.innerHTML = "<i class=\"fas fa-bars\"></i>";
    bar.append(menuButton);
}

function AddWebPageContent(browserContainer){
    let contentContainer = document.createElement("div");
    contentContainer.classList.add("browser-content");
    contentContainer.innerHTML = "<p>Aucune connexion à Internet trouvée!</p><i class=\"fas fa-plug\"></i>";
    browserContainer.append(contentContainer);
}