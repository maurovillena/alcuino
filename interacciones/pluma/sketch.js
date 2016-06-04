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
  textSize(12);
  background(30,126,157);
  noStroke();
  fill(255);
  text("Haz clic y mueve el cursor para dibujar.", 10, 20);
  text("Presiona 'r' para comenzar de nuevo.", 10, 42);
  
//  widthControl = createSlider(2, 60, 2);
//  widthControl.position(10, 35);
  cursor(ARROW);
  fill(255);
  rect(10, m-10, width - 20, height - m);
  
}
  var m = 65;
function insidePage(){

  if (mouseX > 20 && mouseX < width - 20 && mouseY > m && mouseY < height - 20 ){return true;}else{return false;}
}

function draw(){
  textFont("Libre Baskerville");
  textSize(180);
  stroke(30,126,157);
  strokeWeight(1);
  noFill();
  text("S", 170, 240);
  line(0,100,999,100);
  line(0,145,999,145);
  line(0,240,999,240);
  line(0,285,999,285);
  
  if (mouseIsPressed && insidePage()){
  stroke(0);
  
  strokeWeight(3);
  strokeCap(ROUND);
     for (var i = 0; i < veces; i++){
      //line(mouseX + random(-2,2), mouseY + random(-2,2), mouseX+20 + random(-2,2),mouseY+20 + random(-2,2));
      // valor línea c/input slider
      //line(mouseX, mouseY, mouseX + widthControl.value(), mouseY + widthControl.value());
      }
      if (mouseY > 130 & mouseY < 220){
       line(mouseX + 15, mouseY -15, mouseX, mouseY);
      }else{
        line(mouseX + 5, mouseY -5, mouseX, mouseY);
      }
      }
     }

function keyReleased (){
 if (key = ' r ') setup();
}
