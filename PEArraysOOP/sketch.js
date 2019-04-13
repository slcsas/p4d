var myBubbleObjects;

function setup() 
{
    createCanvas(400, 400);
    
    for(var i=0; i < 100; i++)
    {
     myBubbleObjects[i] = new Bubble();  
    }
      console.log(myBubbleObjects);
}

function draw() 
{
  background(220);
    
    for(var i = 0; i < 100; i++)
  {
    myBubbleObjects[i].display(); 
    myBubbleObjects[i].move();
  }
  
}


