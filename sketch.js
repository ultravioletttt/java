var t = 255; //variable for the text's transparency which will change based on the user's action

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(0,0,76); //an RGB color for the canvas' background (dark blue)
  //moon
  fill(255,200); //white, 200 level of transparency (min = 0, max = 255)
  noStroke();
  ellipse(width/2, height/2,400,400); //center of the canvas, 400px dia
  //text
  textSize(20);
  textAlign(RIGHT);
  textFont("Palatino");
  fill(255,255,127,t); // yellow, t refers to the transparency (set to fully opaque (255) at the beginning (see variable a the top of the sketch))
  text("good night",width-20, height-20);
  if(mouseIsPressed) //making the text disappear when the mouse is down
  	t = t-3; // decrease the opacity of the text (see variable at the top of the sketch)
  	if (t<=0){ //if the text is completely transparent, reset it
  		t=255;
  	}
  //firefly
  fill(255,255,127,200); //white, semi-transparent
  ellipse(mouseX+50,mouseY+50,10,10); // follows the mouse, 10px dia
  //sparkly sky (points are redrawn randomly on the canvas everytime we go through the draw function
  stroke(255);
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
}