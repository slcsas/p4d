// Shauna Cross
// IGME-609
// HW3 Loops and Conditionals
// March 26, 2019

// Declare global variables
var mouseIsOverSun;
var rainY;
var canvasSize;

  function setup() {
  canvasSize=400;
  createCanvas(canvasSize, canvasSize);
  background(77,225,225);
    
  // Intialize rain variable, start at top
  rainY = 0;

  // Intialize boolean that mouse is not over the sun
  mouseIsOverSun = false;   
}

function draw() 
{  
   // Turn day into night
    if(mouseX> 270 && mouseX< 330 && mouseY> 20 && mouseY< 80)
    {
      // Use Boolean variable to store rollover state
      mouseIsOverSun= true;
    }
    else
    {
      mouseIsOverSun= false;
    }   
    // Changes for rollover
    if(mouseIsOverSun== true) 
    {
      // Set background color to night
      background(40,10,130);
    }
    else
    {
        // Default to daytime background color
        background(77,225,225);
    }
    // Draw Circle
    if(mouseIsOverSun)  
    {       
     // Draw Moon
      push();
      fill(200);
      arc(300, 50, 60, 60, 0, PI + QUARTER_PI, CHORD)
      pop();     
    }  
    else  
    {    
        // Draw sun
         for(var i=60; i>3; i=i-20)
         {
         fill(255,255,0);
         ellipse(300,50,i,i);
         }
    }
  // when the 'e' key is pressed an ellipse will show and
  // you can follow it with the mouse
  if(keyIsPressed && key=='e')
  {
    ellipse(mouseX, mouseY, 30);
  }
    
  // when the 'g' key is pressed grass is drawn
  if(keyIsPressed && key == 'g')
  { 
    push();
    fill(5,100,5);
    rect(0, height/2, width, canvasSize/2);
    pop(); 
  }
  
  // Evertime the 'r' key is pressed a rain drop falls
  if(keyIsPressed && key == 'r')
  {  
    drawRain();
  }

}

  // Rain
  function drawRain()
  {
      // Rain starts at the top at a random x location
      fill(255);
      ellipse(random(10, 300),rainY++,10,10);

      // if rain reaches the bottom then starts rain again
      if (rainY == canvasSize) 
      {
      rainY = 0;
      }  
  }
