let mx = 1;
let my = 1;
let easing = 0.05;
let radius = 24;
let edge = 100;
let inner = edge + radius;

function setup() {
  createCanvas(500,500);
  noStroke();
  ellipseMode(RADIUS);
  rectMode(CORNERS);    
} 

function draw() {
  background("#4EE5A9"); 

    if (abs(mouseX - mx) > 0.1) {
    mx = mx + (mouseX - mx) * easing;
  }
    if (abs(mouseY - my) > 0.1) {
    my = my + (mouseY - my) * easing;
  }
    
  ellipse(mx, my, 60, 60);
  fill("#461C1C");

  ellipse(mx + 200, my, 60, 60);
  fill("#461C1C");  
    
  arc(250, 300, 40, 40, PI, TWO_PI);
  fill("#461C1C"); 
}