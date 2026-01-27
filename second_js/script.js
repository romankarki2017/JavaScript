
// function addition() {
//     var num1 = 5;
//     var num2 = 6;
//     var num3 = num1 + num2
//     console.log(num3);
// }



// addition();
// addition();
// addition();
// addition();
// addition();
// addition();
// addition();
// addition();
function changeHeading() {
  var element = document.getElementById('mainBox');
  element.firstChild.nodeValue = 'New Heading';
}
document.addEventListener('DOMContentLoaded',changeHeading)

