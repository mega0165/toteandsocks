//Background image changing based on day of the week

let day = new Date().getDay();


if (day == 1){
    document.body.style.backgroundImage = "url(images/background.jpg)"
} 
else if (day ==2) {
    document.body.style.backgroundImage = "url(images/background_2.jpg)"
}
else if (day==3) {
    document.body.style.backgroundImage = "url(images/background_3.jpg)"
}
else if (day==4){
    document.body.style.backgroundImage = "url(images/background_4.jpg)"
}
else if (day==5) {
    document.body.style.backgroundImage = "url(images/background_5.jpg)"
}
else if (day==6) {
    document.body.style.backgroundImage = "url(images/background_6.jpg)"
} else {
    document.body.style.backgroundImage = "url(images/background_7.jpg)"
}

//Images and text color changing on hover

let homeTotes = document.getElementById("hometote");
let homeSocks = document.getElementById("homesocks");
let texts = document.querySelectorAll("p");

function changeTote(){
    homeTotes.src = "images/firsttote-int.png";
    homeTotes.srcset = "images/firsttote-int.png";
}

function changeToteBack(){
    homeTotes.src = "images/firsttote.png";
    homeTotes.srcset = "images/firsttote-2x.png";
}

function changeSocks(){
    homeSocks.src = "images/firstsocks-int.png";
    homeSocks.srcset = "images/firstsocks-int.png";
}
function changeSocksBack(){
    homeSocks.src = "images/firstsocks.png";
    homeSocks.srcset = "images/firstsocks-2x.png";
}

function changeColor(){
    this.style.color = "#4e9130";
}
function changeColorBack(){
    this.style.color = "black";
}

homeTotes.onmouseover = changeTote;
homeSocks.onmouseover = changeSocks;
homeTotes.onmouseout = changeToteBack;
homeSocks.onmouseout = changeSocksBack;

for (let i = 0; i < texts.length; i++){


    let currentButton = texts[i]
    currentButton.addEventListener('mouseover', changeColor);
    currentButton.addEventListener('mouseout', changeColorBack);
 }