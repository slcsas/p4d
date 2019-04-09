// Shauna Cross
// IGME-609
// HW2 Animated and Interactive Scene
// February 26, 2019

// Declare the global variables
var yLocationBubble; // y location for the bubbles
var canvasSize; // canvas size
var mouseIsOverFish; // Boolean for the rollover effect

function setup() 
{   
  // Canvas size
  canvasSize=400;  
  
  // Intialize bubble variable and start it on the bottom
  yLocationBubble = canvasSize;

  //Create the canvas size using the variable
  createCanvas(canvasSize, canvasSize);
  
  // Initalize the rollover variable
  // declare that mouse is not over fish to begin
  mouseIsOverFish = false; 
} 
 

function draw() 
{   
  //  background color of water redrawn every time
  background(66,134,244);
  
  // Declare parameters for fish rollover state variable
  if(mouseX > 75 && mouseX < 175 
  && mouseY > 150 && mouseY < 250)
    {
    // / Use Boolean variable to store rollover position
    // The mouse is over the fish  
    mouseIsOverFish = true;
    }
  else
  {
    // The mouse is not over the fish
    mouseIsOverFish = false;
  }

  // Change the background when rolling over fish
  if(mouseIsOverFish == true)
  {
  // Set the background color for when rolled over
  background(255);
  textSize(20); 
  fill(255,23,2)
  text("YOU CAUGHT ME", 200, 210);
  }
  else
  {
  // Go back to original background color
  background(66,134,244);
  }
   
  
  // draw seaweed across page
  drawSeaweed(0);
  drawSeaweed(canvasSize/3);
  drawSeaweed(canvasSize/6);
  drawSeaweed(canvasSize/2);
  drawSeaweed(canvasSize/1);

  // draw fish
  drawFish(0);
  
  // draw bubbles across page
  drawBubble(0);
  drawBubble(50);
  drawBubble(150);
  drawBubble(250);
  drawBubble(350);
  
}


// Bubble Shape
function drawBubble(offset)
{
  // Bubbles start at the bottom and float up
  fill(0, 249, 120);
  ellipse(0+offset,yLocationBubble--,10,10);
    
  // if bubbles reach the top 
  // then start bubbles at the bottom again
  if (yLocationBubble == 0) {
    yLocationBubble = canvasSize;
  }  
}


// Draw Fish
function drawFish() 
{
	fill(244,208,65); // fish body
  noStroke();
  beginShape();
  curveVertex(75,200);
  curveVertex(125,150);
  curveVertex(150,200);
  curveVertex(175,175);
  curveVertex(175,225);
  curveVertex(150,200);
  curveVertex(125,250);
  endShape(CLOSE);
  
  fill(0); // draw fish eye
  ellipse(100,200,10);
  
  // IF framecount is less than 5 seconds 
  // display "FISH IS FULL" on screen
  if (frameCount < 300) {
  	textSize(20);    
  	text("I AM HUNGRY", 50, 50);
  }
  // ELSE if framecount is more than 6 seconds
  // display "FEED ME" on screen
  else
  {    
    textSize(20);    
    fill(7,45,86);
    text("PLEASE FEED ME", 200, 50);
  }
}

// Seaweed shape  
function drawSeaweed(offset)
{
	fill(83,232,115);
  noStroke();
  beginShape();
  curveVertex(52+offset,286);
  curveVertex(60+offset,300);
  curveVertex(75+offset,326);
  curveVertex(68+offset,370);
  curveVertex(74+offset,400);
  curveVertex(59+offset,400);
  curveVertex(51+offset,369);
  curveVertex(61+offset,325);
  curveVertex(53+offset,287);
  endShape(CLOSE);
}
