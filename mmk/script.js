// document.getElementById("div1").onclick = function() {
//     alert(Math.floor(Math.random() * 100));
// };

// document.getElementById("div2").onclick = function() {
//     alert(Math.floor(Math.random() * 100));
// };

// document.getElementById("div3").onclick = function() {
//     alert(Math.floor(Math.random() * 100));
// };


// div.nextSibling.nextSibling.style.backgroundColor = 'red' ; 
// div.nextSibling.nextSibling.style.class = 'red';
// div.nextSibling.nextSibling.firstChild.nodeValue = 'new text content';
// div.nextSibling.nextSibling.addEventListner;



function cngText(){
    // console.log('vbhdbbvjkd');
    var nn=Math.ceil(Math.random()*6);
    this.nextSibling.nextSibling.firstChild.nodeValue =nn;
}

function pageLoad() {
    var sltblk=document.getElementsByTagName('div');
    for(var i=0;i<sltblk.length;i++){
        sltblk[i].addEventListener('click', cngText);
    }
    sltblk[0].addEventListener('click', cngText);

}

document.addEventListener('DOMContentLoaded',pageLoad);