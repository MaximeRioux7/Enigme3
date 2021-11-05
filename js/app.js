(()=>{
    document.addEventListener("DOMContentLoaded", ()=>{

        let mainAppElement = document.querySelector(".main-app");

        document.querySelector(".menu-circle").parentElement.addEventListener("click", LoadHome);

        LoadHome();
        console.log("test");

        function LoadHome(){
            UnloadPage();

            let accueil = document.createElement("p");
            accueil.innerHTML = "Page d'accueil<br/><br/>";
            mainAppElement.append(accueil);

            let textButton = document.createElement("span");
            textButton.classList.add("textButton");
            textButton.classList.add("menuButton");
            textButton.innerHTML = "<span>Textos</span>";
            textButton.addEventListener("click", LoadTexts);
            mainAppElement.append(textButton);
        }

        function LoadTexts(){
            UnloadPage();

            let textos = document.createElement("p");
            textos.innerHTML = "Page des textos<br/><br/>Maman: Où est-tu?<br/><br/>???: Viens à l'addresse suivante: blablabla.";
            mainAppElement.append(textos);
        }

        function UnloadPage(){
            mainAppElement.innerHTML = "";
        }
    });
})();