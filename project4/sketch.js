function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#F3FBFF");

  noStroke();
  let c1 = color("#FEF083");
  let c2 = color("#FFD59E");
  let c3 = color("#FBB4C4");
  let t = (sin(frameCount * 0.02) + 1) / 2;
  let bgCol;
  if (t < 0.5) {
    bgCol = lerpColor(c1, c2, t * 2);
  } else {
    bgCol = lerpColor(c2, c3, (t - 0.5) * 2);
  }
  fill(bgCol);
  rect(265, 91, 240, 120);
  stroke(1);

  fill("#F396E3");
  rect(76, 63, 220, 35);

  let p1 = color("#788AEA");
  let p2 = color("#B07AED");
  let p3 = color("#5A9DF4");
  let pt = (sin(frameCount * 0.025) + 1) / 2;
  let purpleCol;
  if (pt < 0.5) {
    purpleCol = lerpColor(p1, p2, pt * 2);
  } else {
    purpleCol = lerpColor(p2, p3, (pt - 0.5) * 2);
  }
  fill(purpleCol);
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

  let musicCycle = 440;
  let mf = frameCount % musicCycle;
  let barMax = 190;
  let barW;
  let isPlaying;

  if (mf < 60) {
    barW = 0;
    isPlaying = false;
  } else {
    barW = map(mf, 60, musicCycle, 0, barMax);
    isPlaying = true;
  }

  rect(350, 366, barW, 5, 10);
  circle(350 + barW, 368.5, 9);

  stroke(1);

  if (isPlaying) {
    strokeWeight(2);
    line(435, 336, 435, 353);
    line(443, 336, 443, 353);
    strokeWeight(1);
  } else {
    triangle(431, 336, 431, 353, 448, 344);
  }

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

  let pulseScale = 1 + sin(frameCount * 0.08) * 0.3;
  fill("#F37167ff");
  push();
  translate(130, 300);
  scale(pulseScale);
  circle(0, 0, 20);
  line(0, -5, 0, 6);
  line(0, -5, -4, -3);
  pop();

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

  let cycle = 240;
  let f = frameCount % cycle;
  let toggleT;
  if (f < 30) {
    toggleT = map(f, 0, 30, 1, 0);
  } else if (f < 120) {
    toggleT = 0;
  } else if (f < 150) {
    toggleT = map(f, 120, 150, 0, 1);
  } else {
    toggleT = 1;
  }
  let toggleY = lerp(197, 243, toggleT);
  let toggleCol = lerpColor(color("#4CAF50"), color("#BE5D55"), toggleT);
  fill(toggleCol);
  rect(415, 180, 35, 80, 30);
  fill("#FFFFF8");
  circle(432.5, toggleY, 34);
}

// 기존 코드 맨 밑에 그대로 추가하세요!
function keyPressed() {
  if (key === 's' || key === 'S') {
    // 'my_ui_animation'이라는 파일명으로 8초 동안 녹화 후 저장
    saveGif('my_ui_animation', 8); 
  }
}