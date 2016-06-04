var widthControl;
var message;
var veces = 1;

function setup() {
  var canvas = createCanvas(400, 300);
  canvas.parent('pluma');
  var maxWidth = document.getElementById('pluma').offsetWidth;
  println(maxWidth);
  resizeCanvas(maxWidth, 300);
  textFont("Open Sans");
  background(30,126,157);
  noStroke();
  fill(255);
  text("Clic y mueve el cursor para dibujar. Presiona 'r' para comenzar de nuevo", 10, 25);
  
  widthControl = createSlider(2, 60, 2);
  widthControl.position(10, 35);
  cursor(ARROW);
  fill(255);
  rect(10, m-10, width - 20, height - m);
}
  var m = 65;
function insidePage(){

  if (mouseX > 20 && mouseX < width - 20 && mouseY > m && mouseY < height - 20 ){return true;}else{return false;}
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
