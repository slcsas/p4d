/**
* Shauna Cross
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
	background(70);
  // Hi
	line(20,20,20,100);
	line(60,20,60,100);
	line(20,60,60,60);
	line(100,20,100,100);
  
  // Smily Face
	ellipse(200,200,200);
	ellipse(200,200,15);
	ellipse(160,160,20);
	ellipse(240,160,20);
	arc(200,200,110,100,0,PI);
  
  // Circle
  ellipse(30,30,10);
  
  // TODO: add a caption at the bottom
}

 