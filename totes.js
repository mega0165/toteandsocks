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

// Tote bag picture and image container color changing on hover

let tote = document.querySelectorAll("#tote");
let allBoxes = document.querySelectorAll(".box");


console.log(tote);


function changeColor(){
   this.style.backgroundColor = "#4e9130";
}


function colorReturn(){
   this.style.backgroundColor = "#de9dae";
}


function changeTote1(){
   tote[0].src = "images/tote1-int.jpg";
   tote[0].srcset = "images/tote1-int.jpg";
}
function gobackTote1(){
   tote[0].src="images/tote1.jpg";
   tote[0].srcset="images/tote1-2x.jpg";
}


function changeTote2(){
   tote[1].src = "images/tote2-int.jpg";
   tote[1].srcset = "images/tote2-int.jpg";
}
function gobackTote2(){
   tote[1].src="images/tote2.jpg";
   tote[1].srcset="images/tote2-2x.jpg";
}


function changeTote3(){
   tote[2].src = "images/tote3-int.jpg";
   tote[2].srcset = "images/tote3-int.jpg";
}
function gobackTote3(){
   tote[2].src="images/tote3.jpg";
   tote[2].srcset="images/tote3-2x.jpg";
}


function changeTote4(){
   tote[3].src = "images/tote4-int.jpg";
   tote[3].srcset = "images/tote4-int.jpg";
}
function gobackTote4(){
   tote[3].src="images/tote4.jpg";
   tote[3].srcset="images/tote4-2x.jpg";
}


//


function changeTote5(){
   tote[4].src = "images/tote5-int.jpg";
   tote[4].srcset = "images/tote5-int.jpg";
}
function gobackTote5(){
   tote[4].src="images/tote5.jpg";
   tote[4].srcset="images/tote5-2x.jpg";
}


function changeTote6(){
   tote[5].src = "images/tote6-int.jpg";
   tote[5].srcset = "images/tote6-int.jpg";
}
function gobackTote6(){
   tote[5].src="images/tote6.jpg";
   tote[5].srcset="images/tote6-2x.jpg";
}


function changeTote7(){
   tote[6].src = "images/tote7-int.jpg";
   tote[6].srcset = "images/tote7-int.jpg";
}
function gobackTote7(){
   tote[6].src="images/tote7.jpg";
   tote[6].srcset="images/tote7-2x.jpg";
}


function changeTote8(){
   tote[7].src = "images/tote8-int.jpg";
   tote[7].srcset = "images/tote8-int.jpg";
}
function gobackTote8(){
   tote[7].src="images/tote8.jpg";
   tote[7].srcset="images/tote8-2x.jpg";
}
function changeTote9(){
   tote[8].src = "images/tote9-int.jpg";
   tote[8].srcset = "images/tote9-int.jpg";
}
function gobackTote9(){
   tote[8].src="images/tote9.jpg";
   tote[8].srcset="images/tote9-2x.jpg";
}


tote[0].onmouseover = changeTote1;
tote[0].onmouseout = gobackTote1;
tote[1].onmouseover = changeTote2;
tote[1].onmouseout = gobackTote2;
tote[2].onmouseover = changeTote3;
tote[2].onmouseout = gobackTote3;
tote[3].onmouseover = changeTote4;
tote[3].onmouseout = gobackTote4;
tote[4].onmouseover = changeTote5;
tote[4].onmouseout = gobackTote5;
tote[5].onmouseover = changeTote6;
tote[5].onmouseout = gobackTote6;
tote[6].onmouseover = changeTote7;
tote[6].onmouseout = gobackTote7;
tote[7].onmouseover = changeTote8;
tote[7].onmouseout = gobackTote8;
tote[8].onmouseover = changeTote9;
tote[8].onmouseout = gobackTote9;


for (let i = 0; i < allBoxes.length; i++){


   let currentButton = allBoxes[i]
   currentButton.addEventListener('mouseover', changeColor);
   currentButton.addEventListener('mouseout', colorReturn);
}


