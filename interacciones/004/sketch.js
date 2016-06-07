var m = 65;
var message = 'Arrastra el cursor para ver el nombre de cada segmento';

function setup() {
  var canvas = createCanvas(400, 300);
  canvas.parent('inter004');
  var maxWidth = document.getElementById('inter004').offsetWidth;
  println(maxWidth);
  resizeCanvas(maxWidth, 300);
  textFont('Open Sans');
//  textSize(12);
//  fill(255);
}

function draw() {
  background(30,126,157);
//  text(message, 10, 20);
  noStroke();
  fill(255);
  rect(10, m-10, width - 20, height - m);
  fill(0);
  textSize(150);
  text('Suijtl', 30, 220);
  stroke(268, 61, 100);
  line(0,105,999,105);
  line(0,139,999,139);
  line(0,220,999,220);
  line(0,255,999,255);
  
  if(mouseY > 105 & mouseY < 139){
    noStroke();
    fill(30,126,157,100);
    rect(0,105,999,34);
    message = 'Segmento ascendente';
  }
  if(mouseY > 139 & mouseY < 220){
    noStroke();
    fill(30,126,157,100);
    rect(0,139,999,81);
    message = 'Segmento de x';
  }
  if(mouseY > 220 & mouseY < 255){
    noStroke();
    fill(30,126,157,100);
    rect(0,220,999,35);
    message = 'Segmento descendente';
  }
  if(mouseY > 0 & mouseY < 105){
    message = 'Arrastra el cursor para ver el nombre de cada segmento';
  }
  if(mouseY > 255){
    message = 'Arrastra el cursor para ver el nombre de cada segmento';
  }
  
  noStroke();
  textSize(12);
  fill(255);
  text(message, 10, 20);
  
}