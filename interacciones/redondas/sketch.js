var letters = new Array('o', '3', 'g', 'k', 'f', 'Q');
var clicks = 0;
var margin = 0;
var xSpace = new Array();
var yHeights = new Array();

function setup() {
  myCanvas = createCanvas(600, 300);
  myCanvas.parent('inter002');
  textFont("Merriweather");
  assigXwidths();
}

function assigXwidths() {
  textSize(180);
  for (var i = 0; i < letters.length; i++) {
    xSpace[i] = textWidth(letters[i]);
    if(i > 0){
      xSpace[i] += xSpace[i-1];
    }
  }

}

function draw() {
  background(224);
  stroke(0, 180, 222);
  line(0, 200, width, 200);

  noStroke();
  textSize(180);
  fill(0);
  text(letters[clicks], margin + xSpace[clicks], mouseY);

  for (var i = 0; i < clicks; i++) {
    fill(200, 0, 0);
    text(letters[clicks-1], margin + xSpace[clicks-1], yHeights[clicks-1]);
  }

}

function mouseReleased() {
  append(yHeights, mouseY);
  clicks++;
  clicks %= letters.length;
}