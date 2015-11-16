function setup() {
  var myCanvas = createCanvas(windowWidth-windowWidth/4, windowHeight/2);
  myCanvas.parent('inter001');
  background(224, 224, 224);
  println(width);
}

function draw() {

	
	stroke(0, 100, 200);
	strokeWeight(2);
	line(0, height/1.5, width, height/1.5);
	
	textFont("Merriweather Sans", 14);
	textSize(140);
	fill(0);
	noStroke();
	text("Axñdp", width/4, height/1.5);


	
}