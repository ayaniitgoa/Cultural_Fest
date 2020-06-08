function moveFunction() {
  var x = document.getElementById('rocketimg');
  var y = document.getElementById('rocket');
  x.style.position = 'absolute';
  x.style.bottom = '100vh';
  y.style.opacity = '0';
}

var y = document.getElementById('rocket');
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById('rocket').style.display = 'none';
}