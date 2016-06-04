var clicks;
var message;
var score;
var lines;
var results = new Array(210, 144, 121, 238);
var m = 65;

function insidePage(){

  if (mouseX > 20 && mouseX < width - 20 && mouseY > m && mouseY < height - 20 ){return true;}else{return false;}
}

function setup() {
  var canvas = createCanvas(600, 300);
  canvas.parent('inter001');
//  img = loadImage("http://maurovillena.github.io/alcuino/img/paper.jpg");
  start();
}

function start() {
  clicks = 0;
  score = 0;
  lines = new Array();
  cursor(HAND);
  var maxWidth = document.getElementById('inter001').offsetWidth;
  println(maxWidth);
  resizeCanvas(maxWidth, 300);
}

function draw() {
//  fill(30,126,157);
//  noStroke;
//  rect(0,0,999,999);
//Fondo azul
  background(30,126,157);
//Fondo Blanco
  noStroke();
  fill(255);
  rect(10, m-10, width - 20, height - m);
//Instrucciones en pantalla 
  fill(255);
//  image(img, 0, 0);
  textFont("Open Sans");

  switch (clicks) {
    
    case 0:
      message = "Ubica la línea de base";
      break;
    case 1:
      message = "Ubica la línea de altura de x";
      break;
    case 2:
      message = "Ubica la línea de altura ascendente";
      break;
    case 3:
      message = "Ubica la línea de altura descendente";
      break;
    case 4:
      if (score < 5) {
        message = "¡Felicidades, lo has conseguido!";
        //background(183, 93, 153);
        background(75, 198, 75);
        fill(255);
        rect(10, m-10, width - 20, height - m);
        //fill(255);
        $("#siguiente").attr("style","display:block");
        $("#siguiente-desactivado").attr("style","display:none");
      } else {
        message = "¡Fallaste! haz clic para volver a intentarlo";
        background(0);
        fill(255);
        rect(10, m-10, width - 20, height - m);
      }
      break;
    case 5:
      if (mouseReleased) {
        start();
      }
      break;
  }



  noStroke();

  textSize(12);
  text(message, 10, 25);

  //letras ejercicio
  fill(0);
  textFont("Libre Baskerville");
  textSize(120);
  text("Aohg", width * .1, height * .7);

  stroke(268, 61, 100);
  line(0, mouseY, width, mouseY);

  stroke(0, 180, 222);
  for (var i = 0; i < lines.length; i++) {
    line(0, lines[i], width, lines[i]);
  }
}

function mouseReleased() {
  if (clicks < 5) {
    append(lines, mouseY);


    var diff = abs(results[clicks] - lines[clicks]);
    score = +diff;

    println(mouseY);

    clicks++;
  }
}