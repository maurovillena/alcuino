var m = 65;
var colE = 0;
var colX = 0;
var colP = 0;
//var borde = (268, 61, 100);

function setup() {
  var canvas = createCanvas(400, 300);
  canvas.parent('inter005');
  var maxWidth = document.getElementById('inter005').offsetWidth;
  println(maxWidth);
  resizeCanvas(maxWidth, 300);
  
}

function draw() {
  background(30,126,157);
  textFont('Open Sans');
  textSize(12);
  fill(255);
  text('Posiciona el cursor sobre cada letra para descubir su rebarba', 10, 20);
//  text(message, 10, 20);
  noStroke();
  fill(255);
  rect(10, m-10, width - 20, height - m);
  // 
  
  if(mouseX > 40 & mouseX < 130 & mouseY > 76 & mouseY < 280){
    noStroke();
    fill(30,126,157);
    rect(40, 76, 90, 191);
    colE = 255;
  }
  else{
    colE = 0;
  }
  if(mouseX > 137 & mouseX < 226 & mouseY > 76 & mouseY < 280){
    noStroke();
    fill(30,126,157);
    rect(137, 76, 110, 191);
    colX = 255;
  }
  else{
    colX = 0;
  }
  if(mouseX > 252 & mouseX < 370 & mouseY > 76 & mouseY < 280){
    noStroke();
    fill(30,126,157);
    rect(252, 76, 112, 191);
    colP = 255;
  }
  else{
    colP = 0;
  }
  
  //stroke(borde);
  stroke(268, 61, 100);
  noFill();
  
  rect(40, 76, 90, 191);
  line(40, 113, 130, 113);
  line(40, 220, 130, 220);
  
  rect(136, 76, 110, 191);
  line(136, 113, 246, 113);
  line(136, 220, 246, 220);
  
  rect(253, 76, 110, 191);
  line(253, 113, 363, 113);
  line(253, 220, 363, 220);
  
  textSize(200);
  fill(colE);
  text('E', 25, 220);
  fill(colX);
  text('x', 135, 220);
  fill(colP);
  text('p', 242, 220);
}

function mouseReleased() {
println(mouseX);
}