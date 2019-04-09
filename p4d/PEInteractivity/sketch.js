// Shauna Cross
// IGME-609
// PE Interactivity
// February 12, 2019


function setup() 
{   
  // 1. Canvas should be 400 pixel wide x 400 pixel tall
  createCanvas(400, 400);
  
  // 2. Use any background color you like     
  background(10,50,80);
  
  // 3. Draw lines so they appear like the image    
  //    to the right. There should be 4 lines,   
  //    equally spaced down the canvas. Remember that you   
  //    you can use built in variables and do math to make   
  //    sure the spacing is correct! 
  line(0,height/5,width,width/5);
  line(0,2*height/5,width,2*width/5);
  line(0,3*height/5,width,3*width/5);
  line(0,4*height/5,width,4*width/5);

} 
 

function draw() 
{   
  // When the c key is pressed, follow the mouse with an ellipse.     
  if(keyIsPressed && key == 'c')   
  {     
    // 4. Follow the mouse with a ellipse of any size.     
    //    Be sure all of your ellipse code is within these nested curly brackets. 
    ellipse(mouseX, mouseY, 20);
 
  }   
  
  
// When the e key is pressed, erase the background.    
  if(keyIsPressed && key == 'e')   
  {     
    // 5. "Erase" the background  
    clear();
    background(10,50,80);
  }  
  
  
  // When the r key is pressed, draw a rectangle.    
  if(keyIsPressed && key == 'r')   
  {     
    // 6. Draw a rectangle from the upper left-corner of canvas     
    //    and whose width is the same as the mouse's X coordinate     
    //    and the height is the mouse's Y coordinate     
    //    It "grows" with the mouse 
    rect(0,0,mouseX,mouseY);  
  }      
  
    // When the s key is pressed, draw a line from the mouse.   
    //    to each canvas corner.    
  if(keyIsPressed && key == 's')   
  {     
    
    // 7. Draw a line from mouse to each corner of the canvas 
    line(0,height,mouseX,mouseY);
    line(width,0,mouseX,mouseY);
    line(0,0,mouseX,mouseY);
    line(width,height,mouseX,mouseY);
 
  } 
} 