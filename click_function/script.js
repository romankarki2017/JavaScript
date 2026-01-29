// function changeHeading() {
//   var element = document.getElementById('mainBox')[0];
//   element.firstChild.nodeValue = 'New Heading jcbjdb hbdjb ';
// }

// function changeBody() {
//   var element = document.getElementById('mainBox')[0];
//   element.addEventListener('click', changeBody);
// }

// document.addEventListener('DOMContentLoad',changeBody)


function changeDiv2() {
  var div2 = document.getElementById('div2');
  div2.style.height = '400px';
  div2.style.width = '400px';

  var circleOpacity = parseFloat(div2.style.opacity) || 1;

  circleOpacity = circleOpacity - 0.1;
  if (circleOpacity < 0) circleOpacity = 0;

  div2.style.opacity = circleOpacity;
  console.log(circleOpacity);
}

function setClick() {
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');

  div2.style.opacity = '1'; 
  div1.addEventListener('click', changeDiv2);
}

document.addEventListener('DOMContentLoaded', setClick);

function myInterval() {
  console.log('myInterval called');
}

setInterval(myInterval, 1000);
