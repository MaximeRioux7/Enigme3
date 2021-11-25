import * as Main from "./main.js";
import * as Home from "./home.js";
import * as Data from "./data.js";

let texts = Data.Get().texts;

export function Load(page = null){
    Main.UnloadPage();

    let textsContainer = document.createElement("div");
    textsContainer.classList.add("texts-app");
    Main.appElement.append(textsContainer);

    let top_bar = document.createElement("div");
    top_bar.classList.add("texts-bar");
    top_bar.innerHTML = "Messagerie";

    textsContainer.append(top_bar);

    let meta = {
        container: textsContainer,
        top_bar: top_bar
    }

    LoadPage(page, meta);
}

function LoadPage(page = null, meta){
    switch(page){
        case null:
            Main.UpdateBackButton(Home.Load);
            Object.entries(texts).forEach(entry => {
                const [key, value] = entry;
                let textElement = document.createElement("div");
                textElement.classList.add("recipient");
                textElement.innerHTML += `<span class="icon-text ${key}"></span>`;
                textElement.innerHTML += key;

                textElement.addEventListener("click", ()=>{
                    meta.container.innerHTML = "";
                    meta.container.append(meta.top_bar);
                    LoadPage(key, meta);
                });
                meta.container.append(textElement);
            });
            break;
        default:
            Main.UpdateBackButton(Load);

            let container = document.createElement("div");
            container.classList.add("texts-container");
            meta.container.append(container);

            Object.entries(texts[page]).forEach(entry => {
                const [key, value] = entry;
                let textElement = document.createElement("p");

                if(value[1]) textElement.classList.add("self");
                textElement.innerHTML = value[0];
                
                container.append(textElement);
            });

            ScrollTop(container);
            break;
    }
}

function ScrollTop(element){
    element.scrollTop = element.scrollHeight;
}