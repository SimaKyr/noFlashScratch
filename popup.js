//3-Scratch 3.0 1-phosphorus 2-surforus
var num = parseInt(window.location.href.split('#')[0].replace(/\D+/g,""));
document.getElementById('projectid').innerHTML = num;
function change(value){localStorage.setItem('playerScratch', value);}
var phosphorus = document.getElementById('btnp');
phosphorus.addEventListener("click", function() {
  change(1);
alert("HI");
});
var flash = document.getElementById('btnf');
flash.addEventListener("click", function() {
  change(0);alert("HI");
});
var surforus = document.getElementById('btns');
surforus.addEventListener("click", function() {
  change(2);alert("HI");
});
