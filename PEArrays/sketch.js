// PE – Arrays
// IGME-609
// Shauna Cross  

// Output
// This program shows rising bubbles that wrap once 
// they reach the top of the canvas.  
// Bubbles start from the bottom of the canvas
// And are animated by moving “up”

//Arrays: 
  //You’ll need 4 total arrays:  
  // X and Y positions of each bubble,
  // Bubble size, and Bubble alpha
  // Each array should be empty upon declaration


var fillBubbleXPos = [];
var fillBubbleYPos = [];
var fillBubbleSize = [];
var fillBubbleAlpha = [];

function setup() 
{
  createCanvas(400, 400);

  bubbleLocations();
  bubbleSize();
  bubbleAlpha();
}

function draw() 
{
  background(170, 225, 225);
  drawAllBubbles();
  bubbleRise();

}

// This function will iterate 100 times (once for 
// each bubble) and assign each element in the
// bubbleXPos and bubbleYPos arrays a random
// starting value that is within the dimensions of 
// the canvas.

function bubbleLocations() 
{
  for (var i = 0; i < 100; i++) 
  {
    fillBubbleXPos[i] = random(0, width);
    fillBubbleYPos[i] = random(0, height);
  }
}

// This function will iterate 100 times and assign a 
// random bubble size to the bubbleSize array
// Pseudocode: for 100 bubbles assign a random value
// to the bubble size array

function bubbleSize() 
{
  for (var i = 0; i < 100; i++) 
  {
    fillBubbleSize[i] = random(5, 20);
  }
}

// This function will iterate 100 times and assign 
// a random bubble alpha value to the 
// bubbleAlpha array
// Pseudocode:for( 100 bubbles )
// assign a random value to the bubble alpha array

function bubbleAlpha() 
{
  for (var i = 0; i < 100; i++) 
  {
    fillBubbleAlpha[i] = random(5, 30);
  }
}

// This function will animate each rising bubble. 
// It should also wrap each bubble when it reaches
// the top of the canvas.
// Pseudocode: for( 100 bubbles ) Decrease Y value
// If bubble has reached top of window, wrap the bubble

function bubbleRise() 
{
  for (var i = 0; i < 100; i++) 
  {
    fillBubbleYPos[i]--;
    if (fillBubbleYPos[i] < 0) 
    {
    fillBubbleYPos[i] = height;
   }
  }
}

// This function will iterate 100 times and assign a // random bubble alpha value to the bubbleAlpha 
// array
// Pseudocode: for( 100 bubbles )
// fill with bubble’s alpha using value from alpha // array (and any color you want)
// Draw each bubble using values from location 
// and size arrays

function drawAllBubbles() 
{
  for (var i = 0; i < 100; i++) 
    {
      fill(fillBubbleAlpha[i], 120, 163,120);
      ellipse(fillBubbleXPos[i], fillBubbleYPos[i],   
      fillBubbleSize[i], fillBubbleSize[i]);
    }
}