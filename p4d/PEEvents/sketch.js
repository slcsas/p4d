// PE – Events
// IGME-609
// Shauna Cross
// Global variables that the program will need
var bg;
var score = 0;
var ballX;
var ballY;
var ballSize;
var ballColor;
var xspeed;
var yspeed;
// Create the canvas and setup the game
function setup() {
  createCanvas(400, 400);
  reset();
}
// In each frame, paint the background, bounce the ball,
// and draw the score
function draw() {
  background(bg);
  bouncingBall();
  textSize(20);
  fill(0);
  text("Score: " + score, 30, 30);
}
// ------------------------------------------
// Custom "helper" functions
// ------------------------------------------
// Resets the background and ball attributes
function reset() {
  bg = getRandomColor();
  ballColor = getRandomColor();
  xspeed = 1;
  yspeed = -2;
  ballX = width / 2;
  ballY = height / 2;
  ballSize = width / 3;
  score = 0;
}

// Move/bounce the ball and then draw it
function bouncingBall() {
  push();
  ballX += xspeed;
  ballY += yspeed;
  if (ballX > width - ballSize || ballX < ballSize) {
    xspeed = -xspeed;
  }
  if (ballY > height - ballSize || ballY < ballSize) {
    yspeed = -yspeed;
  }
  fill(ballColor);
  circle(ballX, ballY, ballSize);
  pop();
}
// Level up by increasing the score, speeding up by 5%, 
// shrinking the ball by 5%, and getting new background and
// ball colors.
function levelUp() {
  score++ 
  xspeed = xspeed*1.05;
  yspeed = yspeed*1.05;
  ballSize = ballSize*.95;
  bg = getRandomColor();
  ballColor = getRandomColor();
}

// Return a new random color
function getRandomColor() {
  return color(random(255), random(255), random(255));
}

// Returns true if the mouse is currently in the ball
function mouseInBall() {
  return dist(mouseX, mouseY, ballX, ballY) < ballSize;
  
}
// ------------------------------------------
// Event handlers
// ------------------------------------------
// If the left mouse button is clicked and the mouse
// is in the ball, level up.
function mouseClicked() {
  if (mouseButton == LEFT && mouseInBall()){
    console.log("mouse clicked");
  levelUp();
  }
}

function keyPressed() {
if (key == 'r') {
  clear();
}
}
// ADD THE APPROPRIATE EVENT HANDLER CODE HERE
// If the "r" key is pressed, reset everything
// ADD THE APPROPRIATE EVENT HANDLER CODE HERE