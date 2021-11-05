(()=>{
    document.addEventListener("DOMContentLoaded", ()=>{

        let mainAppElement = document.querySelector(".main-app");

        document.querySelector(".menu-circle").addEventListener("click", LoadHome);

        LoadHome();
        console.log("test");

        function LoadHome(){
            UnloadPage();

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
            textos.innerHTML = "Blablabla";
            mainAppElement.append(textos);
        }

        function UnloadPage(){
            mainAppElement.innerHTML = "";
        }
    });
})();