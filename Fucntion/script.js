// function a() {
//   var box = document.getElementById("div2");
//   var leftposition=box.offsetLeft;
//   box.style.left=leftposition+20+"px";
// //   box.style.backgroundColor = "brown";
// //   var positionTop = box.offsetTop;
// //   var positionLeft = box.offsetLeft;
// //   box.style.left = positionLeft - 12 + 'px';  

// }

// function b() {
//     document.addEventListener('keydown', a);
// //   var box = document.getElementById("div2");
// //   box.style.height = "300px";
// //   box.style.width = "300px";
// //   box.style.lineHeight = "300px";
// //   a();
// }

// document.addEventListener("keydown", b);
// document.addEventListener("DOMContentLoaded", b);


//MOVES LEFT IN LEFT ARROW KEY

// document.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowLeft") {
//     const box = document.getElementById("div2");
//     box.style.left = box.offsetLeft - 20 + "px";
//   }
// });


//IN ALL FOUR KEY

// document.addEventListener("keydown", function (event) {

//   if (event.key == "ArrowLeft") {
//     box.style.left = (left - step) + "px";
//   }

//   if (event.key == "ArrowRight") {
//     box.style.left = (left + step) + "px";
//   }

//   if (event.key == "ArrowUp") {
//     box.style.top = (top - step) + "px";
//   }

//   if (event.key == "ArrowDown") {
//     box.style.top = (top + step) + "px";
//   }
// });

// //clear 
// var timer = setInterval(moveLeft, 10);
// clearInterval(timer);


// function myKeyUp(event){
//   if (event.keyCode == 37){
//     console.log('Left arrow has been realeased');
//   }
// }
// function myKeyDown(event){
//   if (event.keyCode == 37){
//     console.log('Left arrow has been pressed');
//   }
// }




// var interval = 0;
// function myKeyUp(event) {
//   if (event.keyCode == 37){
//     clearInterval(interval);
//   }
// }

// function myKeyDown(event) {
//   if (event.keyCode == 37){
//     interval= setInterval(moveLeft, 10);
//   }
// }

// function myLoadEvent() {
//   document.addEventListener('keydown', myKeyDown);
//   document.addEventListener('keyup', myKeyDown);
// }

// document.addEventListener('DOMContentLoaded', myLoadEvent);



var leftPressed = false;

function myKeyDown(event) {
  if (event.keyCode == 37) {  
    leftPressed = true;
  }
}

function myKeyUp(event) {      
  if (event.keyCode == 37) {  
    leftPressed = false;
  }
}

function moveInterval() {
  if (leftPressed) {
    var element = document.getElementById('div2'); 
    var positionLeft = element.offsetLeft;
    element.style.left = (positionLeft - 1) + 'px';
  }
}

function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
  document.addEventListener('keyup', myKeyUp); 
  setInterval(moveInterval, 10);  
}

document.addEventListener('DOMContentLoaded', myLoadEvent);

