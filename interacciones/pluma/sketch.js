var widthControl;
var message;
var veces = 1;

function setup() {
  //var canvas = createCanvas(600, 300);
  //canvas.parent('inter002');
  createCanvas(800, 600);
  background(208, 61, 100);
  textFont("Merriweather");
  widthControl = createSlider(2, 60, 2);
  widthControl.position(5, 35);
  noStroke();
  fill(255);
  text("Presiona 'r' para comenzar de nuevo", 10, 25);
  cursor(ARROW);
  fill(245);
  rect(0, m, width - m, height - m);
}
  var m = 65;
function insidePage(){

  if (mouseX > m && mouseX < width - m && mouseY > m && mouseY < height - m ){return true;}else{return false;}
}

function draw(){
  if (mouseIsPressed && insidePage()){
  stroke(0);
  
  strokeWeight(9);
  strokeCap(ROUND);
     for (var i = 0; i < veces; i++){
      //line(mouseX + random(-2,2), mouseY + random(-2,2), mouseX+20 + random(-2,2),mouseY+20 + random(-2,2));
      line(mouseX, mouseY, mouseX + widthControl.value(), mouseY + widthControl.value());
     }
    }
}

function keyReleased (){
 if (key = ' r ') setup();
}
