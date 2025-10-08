var chippy=0;
var chips=250;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas

}

//The draw function happens over and over again
function draw() {
  background(50,51,74); //an RGB color for the canvas' background
//circle
  stroke(0,0,0,255); // an RGB color for the circle's border
  strokeWeight(2);
  fill(0,0,0,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20); // center of canvas, 20px dia

//back left box
  fill(38,25,4);
  stroke(38,25,4);
  rect(150,80,80,240);

//back left shadow
  fill(0,0,0,150);
  stroke(0,0,0,0);
  rect(59,275,90,45);

//light
  fill(240,240,192,80);
  stroke(240,240,192,0);
  triangle(350,0,450,400,150,400,245,245,223);

//back right box
  fill(38,25,4);
  stroke(38,25,4);
  rect(450,100,80,240);

//front left box hightlight
  fill(163,138,41);
  stroke(163,138,41);
  rect(0,250,100,250);

//front left box
  fill(135,92,19);
  stroke(135,92,19);
  rect(0,260,90,240);

//front right box
  fill(163,138,41);
  stroke(163,138,41);
  rect(400,250,100,250);

  //front right box highlight
  fill(135,92,19);
  stroke(135,92,19);
  rect(410,260,100,250);

//bottom shadow
  fill(0,0,0,150);
  stroke(0,0,0,0);
  rect(101,450,297,205);
  
  


}


