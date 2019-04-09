/**
* Shauna Cross
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
// Shauna Cross
// IGME-609 Practice
// PE Variables
// January 31, 2019

// Declare the varaible for the container holding the right rectangle x data
	var xLocationRight;

function setup() {
  createCanvas(500, 500);
  // Assign the variable the starting position
  xLocationRight = 450;
}

function draw() {
  background(200);
  
	// Draw the ellipse and increase by size and color
  fill(frameCount,0,0);
  ellipse(250,250,frameCount);
  
  // Draw the upper left rectangle and move diagonally
  fill(20,140,200);
  rect(frameCount, frameCount,50,50);
  
  // Draw the right rectangle and move diagonally
  fill(20,140,200);
  rect(xLocationRight--, frameCount,50,50);
  
}