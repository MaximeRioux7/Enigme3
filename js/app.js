import texts from "../data/enigme3.js";
(()=>{
    document.addEventListener("DOMContentLoaded", ()=>{

        let mainAppElement = document.querySelector(".main-app");

        document.querySelector(".menu-circle").parentElement.addEventListener("click", LoadHome);
        document.querySelector(".menu-arrow").parentElement.addEventListener("click", LoadHome);

        LoadHome();

        function LoadHome(){
            UnloadPage();

            let accueilContainer = document.createElement("div");
            accueilContainer.classList.add("app-window");

            let accueil = document.createElement("p");
            accueil.innerHTML = "Page d'accueil<br/><br/>";

            let textButton = document.createElement("span");
            textButton.classList.add("textButton");
            textButton.classList.add("menuButton");
            textButton.innerHTML = "<span>Textos</span>";
            textButton.addEventListener("click", ()=>{
                LoadTexts(null);
            });

            accueilContainer.append(accueil);
            accueilContainer.append(textButton)
            mainAppElement.append(accueilContainer);
        }

        function UnloadPage(){
            mainAppElement.innerHTML = "";
        }

        /* *************************************************
            TEXTS
        ************************************************* */

        function LoadTexts(page = null){
            UnloadPage();

            let textsContainer = document.createElement("div");
            textsContainer.classList.add("texts-app");
            mainAppElement.append(textsContainer);

            let top_bar = document.createElement("div");
            top_bar.classList.add("texts-bar");
            top_bar.innerHTML = "Messagerie";

            textsContainer.append(top_bar);

            let meta = {
                container: textsContainer,
                top_bar: top_bar
            }

            LoadTextPage(page, meta);
        }

        function LoadTextPage(page = null, meta){
            switch(page){
                case null:
                    UpdateBackButton(LoadHome);
                    Object.entries(texts).forEach(entry => {
                        const [key, value] = entry;
                        let textElement = document.createElement("div");
                        textElement.classList.add("recipient");
                        textElement.innerHTML = key;

                        textElement.addEventListener("click", ()=>{
                            meta.container.innerHTML = "";
                            meta.container.append(meta.top_bar);
                            LoadTextPage(key, meta);
                        });
                        meta.container.append(textElement);
                    });
                    break;
                default:
                    UpdateBackButton(LoadTexts)
                    Object.entries(texts[page]).forEach(entry => {
                        const [key, value] = entry;
                        let textElement = document.createElement("p");

                        if(value[1]) textElement.classList.add("self");
                        textElement.innerHTML = value[0];
                        
                        meta.container.append(textElement);
                    });
                    break;
            }
        }

        function UpdateBackButton(args){
            let button = document.querySelector(".menu-arrow");
            button.parentElement.replaceWith(button.parentElement.cloneNode(true));

            let func = Array.prototype.shift.apply(arguments);

            button = document.querySelector(".menu-arrow");
            button.parentElement.addEventListener("click", ()=>{
                func.apply(this, arguments);
            });
        }
    });
})();

/*

let button = document.querySelector(".menu-arrow");
let buttonClone = button.cloneNode(true);

let func = Array.prototype.shift.apply(arguments);

button.parentNode.replaceChild(buttonClone, button);

button = buttonClone;
button.parentElement.addEventListener("click", ()=>{
    console.log(arguments[0]);
    func.apply(arguments);
});

*/