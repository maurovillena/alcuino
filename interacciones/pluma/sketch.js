var widthControl;
var message;
var veces = 20;

function setup() {
  var canvas = createCanvas(600, 300);
  canvas.parent('inter002');
  //createCanvas(800, 600);
  background(224);
  textFont("Merriweather");
  widthControl = createSlider(2, 60, 2);
  widthControl.position(25, 25);
  noStroke();
  textSize(16);
  text("Presiona 'r' para comenzar de nuevo", 10, 25);
  cursor(ARROW);
}

function draw(){

  if (mouseIsPressed){
  stroke(0);
  strokeWeight(9);
  strokeCap(ROUND);
     for (var i = 0; i < veces; i++){
      //line(mouseX + random(-2,2), mouseY + random(-2,2), mouseX+20 + random(-2,2),mouseY+20 + random(-2,2));
      line(mouseX, mouseY, mouseX + widthControl.value(), mouseY + widthControl.value());
     }
    }
}

function keyReleased(){
 if (key = ' r ') setup();
}
