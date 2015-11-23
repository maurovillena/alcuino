
var clicks;
var message;
var score;
var lines;
var results = new Array(210, 111, 73, 255);

function setup() {
  var myCanvas = createCanvas(600, 300);
  myCanvas.parent('inter001');
  textFont("Merriweather");
  start();
}

function start() {
  clicks = 0;
  score = 0;
  lines = new Array();
  fill(0);
}

function draw() {
  background(224);


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
      if (score < 3) {
        message = "¡Felicidades, lo has conseguido!";
        background(24,127,32);
        fill(255);
      } else {
        message = "Has fracasado, haz clic para volver a intentarlo";
        background(220,30,50);
        fill(225);
      }
      break;
    case 5:
      if (mouseReleased) {
        start();
      }
      break;
  }



  noStroke();

  textSize(16);
  text(message, 10, 25);

  textSize(180);
  text("Axhp", Width * .1, Height * .7);

  stroke(0, 180, 222);
  line(0, mouseY, width, mouseY);

  stroke(200, 0, 0);
  for (var i = 0; i < lines.length; i++) {
    line(0, lines[i], width, lines[i]);
  }
}

function mouseReleased() {
  if (clicks < 5) {
    append(lines, mouseY);


    var diff = abs(results[clicks] - lines[clicks]);
    score = +diff;

    clicks++;
  }
}