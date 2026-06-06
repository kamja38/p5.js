function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#F3FBFF");

  noStroke();
  fill("#FEF083");
  rect(265, 91, 240, 120);
  stroke(1);
  
  fill("#F396E3");
  rect(76, 63, 220, 35);
  fill("#788AEA");
  rect(76, 98, 220, 235);
  line(260, 64, 260, 98);
  line(268, 68, 290, 92);
  line(290, 68, 268, 92);
  fill("#607D8B");
  rect(86, 75, 70, 10);
  rect(167, 75, 25, 10);
  
  fill("#7ED0F5ff");
  rect(215, 130, 250, 35);
  fill("#F37167");
  rect(215, 165, 250, 115);
  line(430, 130, 430, 165);
  line(435, 136, 460, 158);
  line(460, 136, 435, 158);
  fill(255);
  rect(223, 143, 90, 10);
  rect(325, 143, 30, 10);
  
  fill("#93EEC1");
  rect(338, 302, 210, 20);
  fill("#FFFFF8FF");
  rect(338, 322, 210, 60);
  rect(350, 366, 190, 5, 10);
  fill("#5B433B");
  noStroke();
  rect(350, 366, 80, 5, 10);
  circle(428, 368.5, 9);
  stroke(1);
  triangle(431, 336, 431, 353, 448, 344);
  triangle(466, 338, 466, 349, 474, 344);
  line(479, 338, 479, 349);
  triangle(408, 338, 408, 349, 399, 344);
  line(394, 338, 394, 349);
  
  fill("#FFFFF8FF");
  rect(118, 208, 170, 45);
  fill("#FEF083");
  square(118, 208, 45);
  strokeWeight(2);
  circle(137, 227, 20);
  line(145, 233, 154, 244);
  point(200, 230);
  point(218, 230);
  point(236, 230);
  strokeWeight(1);
  
  rect(33, 300, 97, 70);
  triangle(33, 370, 81, 318, 130, 370);
  triangle(33, 300, 130, 300, 81, 343);
  fill("#F37167ff");
  circle(130, 300, 20);
  line(130, 295, 130, 306);
  line(130, 295, 126, 297);
  
  noFill();
  strokeWeight(15);
  stroke("#93EEC1FF");
  arc(478, 63, 70, 70, radians(280), radians(160));
  stroke("#5B433BFF");
  arc(478, 63, 70, 70, radians(160), radians(280));
  strokeWeight(1);
  circle(478, 63, 57);
  circle(478, 63, 86);
  
  ellipse(60, 110, 15);
  ellipse(60, 137, 15);
  ellipse(60, 164, 15);
  
  noStroke();
  fill("#5F6DBE");
  rect(199, 294, 74, 10);
  rect(183, 312, 90, 10);
  
  fill("#BE5D55");
  rect(415, 180, 35, 80, 30);
  fill("#FFFFF8");
  circle(432.5, 245, 34);
}