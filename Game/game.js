
// function chgHead(){
//   var head=document.getElementsByClassName('head');
//   head[0].style.backgroundImage='url(images/head1.png)';

// }
// function chgHead2(){
//   var head=document.getElementsByClassName('head');
//   head[0].style.backgroundImage='url(images/head2.png)';
  
// }

// function pgLoad(){
//   var h1=document.getElementById('head1');
//   h1.addEventListener('click',chgHead);

//   var h2=document.getElementById('head2');
//   h2.addEventListener('click',chgHead2);

// }


// function clickHead() {
//   var elements = document.getElementsByClassName('head');
//   elements[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
// }

// function myLoadFunction(){
//   var element = document.getElementById('head0');
//   element.addEventListener('click', clickHead);
  
//   var element = document.getElementById('head1');
//   element.addEventListener('click', clickHead);
  
//   var element = document.getElementById('head2');
//   element.addEventListener('click', clickHead);
  
//   var element = document.getElementById('head3');
//   element.addEventListener('click', clickHead);


//   var element = document.getElementById('head4');
//   element.addEventListener('click', clickHead);
// }

function myLoadFunction() {
  var elements = document.getElementsByTagName('li');
  elements[0].addEventListener('click', clickHead);
  elements[1].addEventListener('click', clickHead);
  elements[2].addEventListener('click', clickHead);
  elements[3].addEventListener('click', clickHead);
  elements[4].addEventListener('click', clickHead);
  
}




//player right garda right turn left garda left turn.2






