/**
* Shauna Cross
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/

// Shauna Cross
// IGME-609 Project 1
// Self Portrait
// January 31, 2019


function setup() {
  createCanvas(600, 600);
}

function draw() {
  strokeWeight(0);
  background(145,29,141);
  
// Geometric Background 
  fill(244,168,14);    //Orange Rectangle
  rect(50,350,500,250);

  fill(206,190,18);    // Yellow Quad
  quad(50,30,550,30,550,384,50,315);
  
// Sweater
  fill(35,24,66);
  beginShape();
	vertex(233,437);
	vertex(397,418);
	vertex(548,470);
	vertex(600,480);
	vertex(600,600);
	vertex(20,600);
  vertex(33,556);
  vertex(129,486);
  vertex(201,459);
	endShape(CLOSE);
  
  // Ear
  fill(247,216,156);
  beginShape();
  vertex(444,269);
  vertex(446,294);
  vertex(440,312);
  vertex(430,335);
  vertex(428,343);
  vertex(428,358);
  vertex(422,364);
  vertex(414,363);
  vertex(426,321);
  vertex(440,276);
  endShape(CLOSE);
  
// Face
  fill(247,216,156);
  arc(310,300,230,355,3,2,CHORD);

  
// Hair 
  fill(150);  // dark gray left
  beginShape();
	vertex(220,92);
	vertex(238,85);
	vertex(303,127);
	vertex(232,181);
	vertex(202,242);
	vertex(180,242);
  vertex(192,169);
  vertex(198,130);
	endShape(CLOSE);
  
  fill(200);  // light gray center
  beginShape();
	vertex(220,92);
	vertex(253,57);
	vertex(325,45);
	vertex(367,68);
	vertex(375,93);
	vertex(368,108);
  vertex(340,130);
  vertex(303,127);
  vertex(238,85);
	endShape(CLOSE);
  
	fill(150);  // dark gray right
  beginShape();
	vertex(367,68);
	vertex(384,66);
	vertex(411,89);
	vertex(438,147);
	vertex(447,198);
	vertex(436,240);
  vertex(418,242);
  vertex(400,210);
  vertex(395,189);
  vertex(390,170);  
  vertex(341,130);  
  vertex(368,108);
  vertex(375,93);  
  vertex(367,69);  
	endShape(CLOSE);
  
  
// Glasses
  fill(35,24,66); 
	beginShape();  // Outline of glasses
	vertex(173,247);
	vertex(181,244);
	vertex(210,242);
	vertex(226,242);
	vertex(251,246);
	vertex(273,251);
	vertex(298,260);
	vertex(321,260);
	vertex(345,252);
	vertex(380,244);
	vertex(412,242);
	vertex(435,244);
	vertex(448,245);
	vertex(446,262);
	vertex(444,264);
	vertex(442,268);
	vertex(440,270);
	vertex(429,310);
	vertex(420,320);
	vertex(407,328);
	vertex(364,330);
	vertex(345,325);
	vertex(336,316);
	vertex(324,298);
	vertex(319,284);
	vertex(315,275);
	vertex(298,275);
	vertex(291,296);
	vertex(283,311);
	vertex(269,324);
	vertex(257,329);
	vertex(232,330);
	vertex(196,320);
	vertex(189,311);
	vertex(186,302);
	vertex(180,277);
	vertex(179,272);
	vertex(175,268);
	vertex(171,266);
	vertex(172,247);
	endShape(CLOSE);
  
  fill(247,216,156);
	beginShape();  // Inside left glasses
	vertex(193,257);
	vertex(222,253);
	vertex(247,253);
	vertex(272,259);
	vertex(288,268);
	vertex(292,273);
	vertex(292,279);
	vertex(286,294);
	vertex(279,308);
	vertex(266,319);
	vertex(255,324);
	vertex(242,325);
	vertex(228,325);
	vertex(214,320);
	vertex(199,311);
	vertex(193,303);
	vertex(189,294);
	vertex(189,285);
	vertex(191,272);
	endShape(CLOSE);
  
  fill(247,216,156);
	beginShape();  // Inside right glasses
	vertex(326,269);
	vertex(339,259);
	vertex(360,255);
	vertex(415,252);
	vertex(425,254);
	vertex(432,259);
	vertex(435,267);
	vertex(432,281);
	vertex(424,306);
	vertex(415,315);
	vertex(401,322);
	vertex(386,326);
	vertex(359,321);
	vertex(340,311);
	vertex(332,302);
	vertex(328,293);
	vertex(326,282);
	vertex(327,271);
	endShape(CLOSE);

   
// Eyes
  fill(255);  // left white eye
  strokeWeight(2);
  beginShape();
  vertex(224,277);
  vertex(231,272);
  vertex(241,268);
	vertex(250,267);
  vertex(259,269);
  vertex(269,276);
  vertex(273,280);
  vertex(273,283);
  vertex(259,286);
  vertex(249,288);
  vertex(239,287);
  vertex(229,282);
  endShape(CLOSE);
  
  fill(66,33,11);  // left brown eye
  ellipse(250,277,22,20);
  
  fill(0);  // left pupil
  ellipse(250,277,6);
  
  fill(255); // right white eye
  beginShape();
  vertex(344,281);
  vertex(360,266);
  vertex(379,271);
  vertex(383,273); 
  vertex(389,279);
  vertex(384,283); 
  vertex(375,288);
  vertex(358,289);
  vertex(347,286);
  vertex(340,285);
  vertex(334,283);
  endShape(CLOSE);
  
  fill(66,33,11); //  right brown eye
  ellipse(364,277,20,20);
  
  fill(0); // right pupil
  ellipse(364,277,6);

  
//  Nose
	noFill();
  stroke(140,121,84);
  beginShape();
	vertex(288,318);
	vertex(283,327);
	vertex(276,336);
	vertex(271,342);
	vertex(272,347);
	vertex(276,352);
	vertex(285,356);
	vertex(304,366);
	vertex(311,366);
	vertex(323,363);
	vertex(337,356);
	vertex(345,347);
	vertex(344,343);
	vertex(341,340);
	vertex(334,334);
	vertex(330,330);
	vertex(329,324);
	vertex(329,317);
	endShape();
  
  
// Mouth
  fill(255,0,255);  // Upper lip
  stroke(0);
	beginShape();
	vertex(259,392);
	vertex(275,391);
	vertex(283,389);
	vertex(292,391);
	vertex(306,393);
	vertex(312,392);
	vertex(317,393);
	vertex(324,394);
	vertex(344,396);
	vertex(351,395);
	vertex(355,394); 
	vertex(340,399);
	vertex(326,400);
	vertex(316,399);
	vertex(313,401);
	vertex(307,402);
	vertex(308,401);
	vertex(293,399);
	vertex(286,397);
	vertex(279,396);
	vertex(270,396);
	vertex(264,394);
	vertex(259,391);
	endShape(CLOSE);

  fill(255,0,255);
	beginShape();  // Bottom lip
  vertex(259,391);
  vertex(264,394);
  vertex(270,396);
  vertex(279,396);
  vertex(286,397);
  vertex(293,399);
  vertex(308,401);
  vertex(307,402);
  vertex(313,401);
  vertex(316,399);
  vertex(326,400);
  vertex(340,399);
  vertex(355,394);
  vertex(345,402);
  vertex(333,408);
  vertex(316,412);
  vertex(300,414);
  vertex(285,412);
  vertex(274,407);
  vertex(266,400);
  vertex(260,393);
  endShape(CLOSE);
  
}
