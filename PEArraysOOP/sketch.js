// PE – Ojects
// IGME-609
// Shauna Cross  


// First bouncing ball that is higher in the canvas
// and is moving slower than "largeBall"
var smallBall = {
  size: 30,
  x: 100,
  y: 100,
  speed: 2,
  
  bounce: function(){
    // Reverse the speed when the ball reaches the
    // left or right side of the canvas
    if(this.x > width || this.x < 0)
    {
      this.speed = this.speed*-1;
    } 
  },
    
  display: function() {
    // draw the ball
    ellipse(this.x, this.y, this.size);
  },
    
  move: function() {
    // Move the ball (by adding speed to its X position
    this.x = this.x + this.speed;
  },
};



// Second bouncing ball that is lower in the canvas
// and is moving faster than "smallBall"
var largeBall = {
  size: 70,
  x: 100,
  y: 200,
  speed: 7,
  
  bounce: function(){
    // Reverse the speed when the ball reaches the
    // left or right side of the canvas
    if(this.x > width || this.x < 0)
    {
      this.speed = this.speed*-1;
    } 
  },
    
  display: function() {
    // draw the ball
    ellipse(this.x, this.y, this.size);
  },
    
  move: function() {
    // Move the ball (by adding speed to its X position
    this.x = this.x + this.speed;
  },
};



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  smallBall.display();
  smallBall.bounce();
  smallBall.move();
  largeBall.display();
  largeBall.bounce();
  largeBall.move();
  
}