/**
* Shauna Cross
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
  createCanvas(900,900);
}
function draw() {
  background(16,204,204);
  
 //garden base
  fill(63,191,63);
  rect(0,550,900,350);
  
  //sky
  fill(9,48,109); // trapazoid
  quad(270,0,550,0,650,350,165,260);
  fill(66,134,244); // left
  triangle(0,0,350,550,0,550);
  fill(31,85,173); // right
  triangle(550,0,900,0,650,350);
  fill(131,168,226); // bottom
  triangle(470,317,650,350,620,550);
  
 // carrots
  fill(191,121,63); // base
  triangle(50,400,150,400,100,550);
  fill(63,191,63); // top
  triangle(80,350,120,350,100,400);
  line(55,420,140,420)
  
  fill(90,110,63); // top
  triangle(90,570,110,570,100,600);
  fill(191,121,63); // base
  quad(70,600,130,600,120,620,80,620);
  
  fill(90,110,63); // top
  triangle(90,670,110,670,100,700);
  fill(191,121,63); // base
  quad(70,700,130,700,120,720,80,720);
  
  fill(90,110,63); // top
  triangle(90,770,110,770,100,800);
  fill(191,121,63); // base
  quad(70,800,130,800,120,820,80,820);
  
  fill(191,121,63); // base row 2
  triangle(150,500,250,500,200,650);
  fill(63,191,63); // top
  triangle(180,450,220,450,200,500);
  
  fill(90,110,63); // top
  triangle(190,670,210,670,200,700);
  fill(191,121,63); // base
  quad(170,700,230,700,220,720,180,720);
  
  fill(90,110,63); // top
  triangle(190,770,210,770,200,800);
  fill(191,121,63); // base
  quad(170,800,230,800,220,820,180,820);
  
  // Raddishes
  fill(90,110,63); // top
  triangle(390,550,410,550,400,580);
  fill(255,0,0); // base
  ellipse(400,600,30,40);
  point(400,600)
  
  fill(90,110,63); // top
  triangle(490,550,510,550,500,580);
  fill(255,0,0); // base
  ellipse(500,600,30,40);
  
  fill(90,110,63); // top
  triangle(390,650,410,650,400,680);
  fill(255,0,0); // base
  ellipse(400,700,30,40);
  
  fill(90,110,63); // top
  triangle(490,650,510,650,500,680);
  fill(255,0,0); // base
  ellipse(500,700,30,40);
  
  fill(90,110,63); // top
  triangle(390,750,410,750,400,780);
  fill(255,0,0); // base
  ellipse(400,800,30,40);
  
  fill(90,110,63); // top
  triangle(490,750,510,750,500,780);
  fill(255,0,0); // base
  ellipse(500,800,30,40);
  
  // Eggplant
  fill(90,110,63); // top
  triangle(690,450,710,450,700,480);
  fill(177,0,242); // base
  ellipse(700,540,80,115);
  
  fill(90,110,63); // top
  triangle(690,650,710,650,700,680);
  fill(177,0,242); // base
  ellipse(700,740,80,115);
  
  fill(90,110,63); // top
  triangle(790,450,810,450,800,480);
  fill(177,0,242); // base
  ellipse(800,540,80,115);
  
  fill(90,110,63); // top
  triangle(790,650,810,650,800,680);
  fill(177,0,242); // base
  ellipse(800,740,80,115);
  
  // Sun
  fill(227,165,7); // back largest
  ellipse(620,150,240);
  fill(223,227,100); // second back
  ellipse(605,160,200);
  fill(223,227,10); // middle
  ellipse(630,160,150);
  fill(255,182,0); // front smallest
  ellipse(605,160,100);
  
}
 