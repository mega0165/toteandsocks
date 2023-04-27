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

//Socks picture and image container color changing over hover
let socks = document.querySelectorAll("#socks");
let allBoxes = document.querySelectorAll(".box");

console.log(socks);

function changeColor(){
    this.style.backgroundColor = "#4e9130";
}

function colorReturn(){
    this.style.backgroundColor = "#de9dae";
}

function changeSock1(){
    socks[0].src = "images/socks1-int.jpg";
    socks[0].srcset = "images/socks1-int.jpg";
}
function gobackSock1(){
    socks[0].src="images/socks1.jpg";
    socks[0].srcset="images/socks1-2x.jpg";
}

function changeSock2(){
    socks[1].src = "images/socks2-int.jpg";
    socks[1].srcset = "images/socks2-int.jpg";
}
function gobackSock2(){
    socks[1].src="images/socks2.jpg";
    socks[1].srcset="images/socks2-2x.jpg";
}

function changeSock3(){
    socks[2].src = "images/socks3-int.jpg";
    socks[2].srcset = "images/socks3-int.jpg";
}
function gobackSock3(){
    socks[2].src="images/socks3.jpg";
    socks[2].srcset="images/socks3-2x.jpg";
}

function changeSock4(){
    socks[3].src = "images/socks4-int.jpg";
    socks[3].srcset = "images/socks4-int.jpg";
}
function gobackSock4(){
    socks[3].src="images/socks4.jpg";
    socks[3].srcset="images/socks4-2x.jpg";
}

//

function changeSock5(){
    socks[4].src = "images/socks5-int.jpg";
    socks[4].srcset = "images/socks5-int.jpg";
}
function gobackSock5(){
    socks[4].src="images/socks5.jpg";
    socks[4].srcset="images/socks5-2x.jpg";
}

function changeSock6(){
    socks[5].src = "images/socks6-int.jpg";
    socks[5].srcset = "images/socks6-int.jpg";
}
function gobackSock6(){
    socks[5].src="images/socks6.jpg";
    socks[5].srcset="images/socks6-2x.jpg";
}

function changeSock7(){
    socks[6].src = "images/socks7-int.jpg";
    socks[6].srcset = "images/socks7-int.jpg";
}
function gobackSock7(){
    socks[6].src="images/socks7.jpg";
    socks[6].srcset="images/socks7-2x.jpg";
}

function changeSock8(){
    socks[7].src = "images/socks8-int.jpg";
    socks[7].srcset = "images/socks8-int.jpg";
}
function gobackSock8(){
    socks[7].src="images/socks8.jpg";
    socks[7].srcset="images/socks8-2x.jpg";
}
function changeSock9(){
    socks[8].src = "images/socks9-int.jpg";
    socks[8].srcset = "images/socks9-int.jpg";
}
function gobackSock9(){
    socks[8].src="images/socks9.jpg";
    socks[8].srcset="images/socks9-2x.jpg";
}

socks[0].onmouseover = changeSock1;
socks[0].onmouseout = gobackSock1;
socks[1].onmouseover = changeSock2;
socks[1].onmouseout = gobackSock2;
socks[2].onmouseover = changeSock3;
socks[2].onmouseout = gobackSock3;
socks[3].onmouseover = changeSock4;
socks[3].onmouseout = gobackSock4;
socks[4].onmouseover = changeSock5;
socks[4].onmouseout = gobackSock5;
socks[5].onmouseover = changeSock6;
socks[5].onmouseout = gobackSock6;
socks[6].onmouseover = changeSock7;
socks[6].onmouseout = gobackSock7;
socks[7].onmouseover = changeSock8;
socks[7].onmouseout = gobackSock8;
socks[8].onmouseover = changeSock9;
socks[8].onmouseout = gobackSock9;

for (let i = 0; i < allBoxes.length; i++){

    let currentButton = allBoxes[i]
    currentButton.addEventListener('mouseover', changeColor);
    currentButton.addEventListener('mouseout', colorReturn);
}

