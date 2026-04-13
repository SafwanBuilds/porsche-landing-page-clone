
let video = document.querySelector('.vid1');
let btn = document.getElementById('pauseBtn');
let icon = document.getElementById('icon');

btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        icon.classList.replace('fa-play', 'fa-pause'); 
    } else {
        video.pause();
        icon.classList.replace('fa-pause', 'fa-play'); 
    }
});


let transbox = document.getElementById("trans-box");
let mainBox = document.querySelector(".Box");

window.addEventListener("scroll", function() {
  
    if (window.scrollY > 850 && window.scrollY <= 2800) { 
   
        mainBox.classList.add("black-mode"); 
        transbox.classList.add("white-text");
    }
    else {
        mainBox.classList.remove("black-mode");
        transbox.classList.remove("white-text");
    }
});

// function lefty(){
//   let card_911 = document.querySelector(".card-911").style.width = "50%";
//   let card_718 = document.querySelector(".card-718").style.width = "40%";

  
// }
// function righty(){
//   let card_718 = document.querySelector(".card-718").style.width = "50%";
//   let card_911 = document.querySelector(".card-911").style.width = "40%";
// }
// function resetcard(){
//   let card_911 = document.querySelector(".card-911").style.width = "42%";
//   let card_718 = document.querySelector(".card-718").style.width = "42%";
// }


function expand(cardName){
// let row = document.querySelector(".row1").children;

// let card_1 = row[0]
// let card_2 = row[1]
// let card_3 = row[2]
// let card_4 = row[3]
// let card_5 = row[4]
// let card_6 = row[5]

if(cardName == 'c1'){

    let card_911 = document.querySelector(".card-911").style.width = "50%";
    let card_718 = document.querySelector(".card-718").style.width = "40%";

    let img = document.querySelector(".pic-911");
    let video = document.querySelector(".shot-911");

    img.style.opacity = "0";      
    video.style.opacity = "1";    
    video.play();                 
}
else if(cardName == 'c2'){
    let card_718 = document.querySelector(".card-718").style.width = "50%";
    let card_911 = document.querySelector(".card-911").style.width = "40%";

    let img = document.querySelector(".pic-718");
    let video = document.querySelector(".shot-718");

    img.style.opacity = "0";      
    video.style.opacity = "1";    
    video.play(); 
}
else if(cardName == 'c3'){
    let card_taycan = document.querySelector(".card-taycan").style.width = "50%";
    let card_panamera = document.querySelector(".card-panamera").style.width = "40%";

    let img = document.querySelector(".pic-taycan");
    let video = document.querySelector(".shot-taycan");

    img.style.opacity = "0";      
    video.style.opacity = "1";    
    video.play(); 
}
else if(cardName == 'c4'){
    let card_panamera = document.querySelector(".card-panamera").style.width = "50%";
    let card_taycan = document.querySelector(".card-taycan").style.width = "40%";

    let img = document.querySelector(".pic-panamera");
    let video = document.querySelector(".shot-panamera");

    img.style.opacity = "0";      
    video.style.opacity = "1";    
    video.play(); 
}
else if(cardName == 'c5'){
    let card_macan = document.querySelector(".card-macan").style.width = "50%";
    let card_cane = document.querySelector(".card-cane").style.width = "40%";

    let img = document.querySelector(".pic-macan");
    let video = document.querySelector(".shot-macan");

    img.style.opacity = "0";      
    video.style.opacity = "1";    
    video.play(); 
}
else if(cardName == 'c6'){
    let card_cane = document.querySelector(".card-cane").style.width = "50%";
    let card_macan = document.querySelector(".card-macan").style.width = "40%";

    let img = document.querySelector(".pic-cane");
    let video = document.querySelector(".shot-cane");

    img.style.opacity = "0";      
    video.style.opacity = "1";    
    video.play(); 
}
else{
     console.log("Nothing is hovering");
}
}

function resetcards(cardName){
    // let card_911 = document.querySelector(".card-911").style.width = "42%";
    // let card_718 = document.querySelector(".card-718").style.width = "42%";

    // let card_taycan = document.querySelector(".card-taycan").style.width = "42%";
    // let card_panamera = document.querySelector(".card-panamera").style.width = "42%";

    // let card_cane = document.querySelector(".card-cane").style.width = "42%";
    // let card_macan = document.querySelector(".card-macan").style.width = "42%";

    if(cardName == 'c1'){

    let card_911 = document.querySelector(".card-911").style.width = "42%";
    let card_718 = document.querySelector(".card-718").style.width = "42%";
   
    let img = document.querySelector(".pic-911");
    let video = document.querySelector(".shot-911");

    img.style.opacity = "1";
    video.style.opacity = "0";
    video.pause();
    video.currentTime = 0;
}
else if(cardName == 'c2'){
    let card_911 = document.querySelector(".card-911").style.width = "42%";
    let card_718 = document.querySelector(".card-718").style.width = "42%";

    let img = document.querySelector(".pic-718");
    let video = document.querySelector(".shot-718");

    img.style.opacity = "1";
    video.style.opacity = "0";
    video.pause();
    video.currentTime = 0;
}
else if(cardName == 'c3'){
   
  let card_taycan = document.querySelector(".card-taycan").style.width = "42%";
  let card_panamera = document.querySelector(".card-panamera").style.width = "42%";
   
   let img = document.querySelector(".pic-taycan");
    let video = document.querySelector(".shot-taycan");

    img.style.opacity = "1";
    video.style.opacity = "0";
    video.pause();
    video.currentTime = 0;
    
}
else if(cardName == 'c4'){

  let card_taycan = document.querySelector(".card-taycan").style.width = "42%";
  let card_panamera = document.querySelector(".card-panamera").style.width = "42%";
   
   let img = document.querySelector(".pic-panamera");
   let video = document.querySelector(".shot-panamera");

    img.style.opacity = "1";
    video.style.opacity = "0";
    video.pause();
    video.currentTime = 0;
}
else if(cardName == 'c5'){

  let card_cane = document.querySelector(".card-cane").style.width = "42%";
  let card_macan = document.querySelector(".card-macan").style.width = "42%";

  let img = document.querySelector(".pic-macan");
  let video = document.querySelector(".shot-macan");

    img.style.opacity = "1";
    video.style.opacity = "0";
    video.pause();
    video.currentTime = 0;
  
}
else if(cardName == 'c6'){
  let card_cane = document.querySelector(".card-cane").style.width = "42%";
  let card_macan = document.querySelector(".card-macan").style.width = "42%";

  let img = document.querySelector(".pic-cane");
  let video = document.querySelector(".shot-cane");

    img.style.opacity = "1";
    video.style.opacity = "0";
    video.pause();
    video.currentTime = 0; 
}
else{
     console.log("Nothing is hovering");
}
}

