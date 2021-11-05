(()=>{
    document.addEventListener("DOMContentLoaded", ()=>{
        let clockElements = document.querySelectorAll(".clock");

        UpdateTime();
        window.setInterval(() =>{
            UpdateTime();
        }, 1000);

        function UpdateTime(){
            clockElements.forEach(element => {
                element.innerHTML = GetFormattedTime();
            });
        }

        function GetFormattedTime(){
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            if(minutes.toString().length < 2) minutes = "0" + minutes;
            let ampm = hours < 12 ? "AM" : "PM";
            return `${hours%12}:${minutes} ${ampm}`;
        }
    });
})();