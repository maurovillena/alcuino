function setup() {
  //createCanvas(600, 300);
  var canvas = createCanvas(600, 300);
  canvas.parent('inter002');
  textFont("Merriweather");
  
}

function draw() {
  background(224);

  stroke(0, 180, 222);
  
  line(0, 115, width, 115);
  line(0, 133, width, 133);
  line(0, 180, width, 180);
  line(0, 201, width, 201);
  
  noStroke();
  
  textSize(16);
  text("message", 10, 25);
  
  textSize(85);
  textLeading(85);
  text("ABgdSepKEjf", width * .02, height * .6);
}

function mouseReleased(){
  println(mouseY);
}