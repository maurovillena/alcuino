var m = 65;

function setup() {
  var canvas = createCanvas(400, 300);
  canvas.parent('inter003');
  var maxWidth = document.getElementById('inter003').offsetWidth;
  println(maxWidth);
  resizeCanvas(maxWidth, 300);
  textFont('Open Sans');
  textSize(12);
  fill(255);
}

function draw() {
  background(30,126,157);
  text('Haz clic y desplaza el cursor para hacer zoom', 10, 20);
  noStroke();
  fill(255);
  rect(10, m-10, width - 20, height - m);
//DIBUJA LAS LETRAS

  if(mouseIsPressed){
    var tam = (16 + mouseY * 2);
  }

  fill(0)
  textSize(tam);
  text('oL8', 30, 200);
  stroke(268, 61, 100);
  line(0,200,999,200);
}