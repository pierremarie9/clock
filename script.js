
function changeTime(){
    var d = new Date();
    var n = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    secondBar = document.querySelector("#seconds");
    minuteBar = document.querySelector("#minutes");
    hourBar = document.querySelector("#hours");
    secondBar.style.transform=`rotate(${(n*360/60)-90}deg)`;
    minuteBar.style.transform=`rotate(${(m*360/60)-90}deg)`;
    hourBar.style.transform=`rotate(${(h*360/12)-90}deg)`;
}

window.setInterval(changeTime, 1000);