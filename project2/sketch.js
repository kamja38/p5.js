function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#D4E797");

  noStroke();
  fill("#60462DFF");
  ellipse(310, 88, 140, 115);
  fill("#FDEAB9FF"); //얼굴
  arc(298, 125, 135, 125, radians(340), radians(200));
  arc(229, 137, 30, 40, 0, TWO_PI);
  arc(368, 134, 30, 40, 0, TWO_PI);
  fill("#60462DFF");
  ellipse(250, 95, 66, 73);
  ellipse(295, 107, 50, 50);
  ellipse(337, 105, 70, 50);
  
  stroke("#443628");
  strokeWeight(7);
  line(255, 112, 284, 108);
  line(317, 108, 348, 112);
  strokeWeight(2.5);
  point(299, 149);
  noFill();
  bezier(282, 159, 297, 169, 309, 166, 318, 159);
  noStroke();
  fill(0);
  ellipse(280, 139, 5, 10);
  ellipse(319, 139, 5, 10);

  stroke("#77BCD9"); //옷 팔부분
  fill("#90CAE2");
  beginShape();
  vertex(278, 190);
  bezierVertex(219, 211, 187, 307, 224, 320);
  endShape();
  beginShape();
  vertex(322, 190);
  bezierVertex(381, 211, 413, 307, 376, 320);
  endShape();
  noStroke();
  quad(278, 190, 324, 190, 376, 320, 224, 320);
  rect(238, 320, 123, 35);
  
  stroke("#77BCD9"); //옷
  fill("#90CAE2");
  bezier(224, 320, 242, 323, 257, 309, 275, 294);
  line(275, 294, 262, 277);
  line(262, 277, 236, 284);
  line(238, 260, 238, 282);
  bezier(376, 320, 358, 323, 343, 309, 325, 294);
  line(325, 294, 338, 277);
  line(338, 277, 364, 284);
  line(362, 260, 362, 282);
  
  noStroke(); //흰옷
  fill(255);
  rect(278, 187, 47, 40);
  rect(284, 225, 32.5, 130);
  stroke("#77BCD9"); //옷라인
  line(238, 320, 238, 355);
  line(238, 355, 282, 355);
  line(362, 320, 362, 355);
  line(362, 355, 318, 355);
  noStroke();
  
  fill("#FDEAB9FF");
  arc(301, 185, 50, 30, 0, TWO_PI);
  
  fill("#77BCD9"); //셔츠카라
  quad(277, 188, 262, 201, 270, 230, 286, 217);
  quad(323, 188, 338, 201, 330, 230, 314, 217);
  circle(278, 248, 5);
  circle(278, 336, 5);
  fill("#68A6C0");
  triangle(270, 230, 284, 227, 286, 217);
  triangle(330, 230, 316, 227, 314, 217);
  
  fill(50); //카메라
  stroke(0);
  rect(265, 264, 74, 48, 6);
  fill(80);
  rect(280, 257, 20, 12, 3);
  fill(255);
  stroke(0);
  ellipse(305, 288, 35, 35);
  fill(200);
  ellipse(305, 288, 23, 23);
  fill(100);
  ellipse(305, 288, 11, 11);
  fill(255, 255, 255, 180);
  noStroke();
  ellipse(300, 282, 6, 6);
  
  fill("#FDEAB9FF"); //손
  circle(268, 289, 27);
  circle(338, 290, 27);
}