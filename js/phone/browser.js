import * as Main from "./main.js";
import * as Home from "./home.js";
import * as Data from "./data.js";

let browser = Data.Get().browser;

let menuButton;

export function Load(page = null){
    Main.UpdateBackButton(Home.Load);
    Main.UnloadPage();

    let browserContainer = document.createElement("div");
    browserContainer.classList.add("browser-app");
    Main.appElement.append(browserContainer);

    AddBar(browserContainer);
    AddContent(page, browserContainer);
    AddBrowserMenu(browserContainer);
}

function AddBar(container){
    let bar = document.createElement("div");
    bar.classList.add("browser-bar");
    container.append(bar);

    let icon = document.createElement("span");
    icon.classList.add("icon");
    icon.innerHTML = "<i class=\"fab fa-firefox\"></i>";
    bar.append(icon);

    let navBar = document.createElement("p");
    navBar.classList.add("nav-bar");
    navBar.innerHTML = ":erreur";
    bar.append(navBar);

    menuButton = document.createElement("span");
    menuButton.classList.add("burger-button");
    menuButton.innerHTML = "<i class=\"fas fa-bars\"></i>";
    bar.append(menuButton);
}

function AddBrowserMenu(container){
    let menu = document.createElement("div");
    menu.classList.add("browser-menu");
    container.append(menu);

    menuButton.addEventListener("click", ()=>{
        menu.classList.toggle("menu-open");
    });

    let menuItems = document.createElement("ul");
    menu.append(menuItems);

    let item = document.createElement("li");
    item.innerHTML = "Nouvel onglet";
    menuItems.append(item);

    item = document.createElement("li");
    item.innerHTML = "Nouvel onglet privé";
    menuItems.append(item);

    item = document.createElement("span");
    item.classList.add("separator");
    menuItems.append(item);

    item = document.createElement("li");
    item.innerHTML = "Historique";
    item.addEventListener("click", ()=>{
        Load("history");
    });
    menuItems.append(item);

    item = document.createElement("li");
    item.innerHTML = "Téléchargements";
    menuItems.append(item);

    item = document.createElement("span");
    item.classList.add("separator");
    menuItems.append(item);

    item = document.createElement("li");
    item.innerHTML = "Quitter";
    item.classList.add("quit");
    item.addEventListener("click", Home.Load);
    menuItems.append(item);
}

function AddContent(page, container){
    let contentContainer = document.createElement("div");
    contentContainer.classList.add("browser-content");
    container.append(contentContainer);

    if(page == null) LoadNoInternet(contentContainer);
    else if(page == "history") LoadHistory(contentContainer);
}

function LoadNoInternet(container){
    Main.UpdateBackButton(Home.Load);

    let content = document.createElement("div");
    content.classList.add("no-internet");
    content.innerHTML = "<p>Aucune connexion à Internet trouvée!</p><i class=\"fas fa-plug\"></i>";
    container.append(content);
}

function LoadHistory(container){
    Main.UpdateBackButton(Load);

    AddTitleBar("Historique", container);

    let list = document.createElement("div");
    list.classList.add("history");
    container.append(list);

    browser.history.forEach(link => {
        switch(link.type){
            case "date":
                let dateItem = document.createElement("span");
                dateItem.classList.add("history-date");
                dateItem.innerHTML = link.text;
                list.append(dateItem);
                break;
            default:
                let historyItem = document.createElement("span");
                historyItem.classList.add("history-item");
                list.append(historyItem);

                let item = document.createElement("span");
                item.innerHTML = (link.time ? link.time : "0:00AM");
                historyItem.append(item);

                item = document.createElement("a");
                item.innerHTML = link.text;
                item.href = (link.url ? link.url : link.text);
                item.target = "_blank";
                historyItem.append(item);
                break;
        }
    });
}

function AddTitleBar(title, container){
    let item = document.createElement("span");
    item.classList.add("page-title");
    item.innerHTML = title;
    container.append(item);
}