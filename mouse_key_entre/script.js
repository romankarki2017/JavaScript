function changeDiv2() {
  var div2 = document.getElementById('div2');
  div2.style.height = '400px';
  div2.style.width = '400px';
  div2.style.borderRadius='50%'
  div2.style.backgroundColor='black';
}

function setClick() {
  var div1 = document.getElementById('div1');
  div1.addEventListener('mouseleave', changeDiv2);
  var positionTop = div1.offsetTop;
  var positionLeft= div1.offsetLeft;
  div1.style.left= positionLeft -10 + 'px';
}

document.addEventListener('DOMContentLoaded', setClick);
// key press ma opacity
// mouse enter leave ma bg VideoColorSpace, height, width