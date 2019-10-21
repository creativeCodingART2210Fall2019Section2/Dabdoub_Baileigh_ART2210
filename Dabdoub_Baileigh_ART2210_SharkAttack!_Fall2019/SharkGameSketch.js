let swimmers = [];
let img;
function preload(){
  img=loadImage('shark.png');
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < 25; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(25, 70);
    let b = new Swimmer(x, y, r);
    swimmers.push(b);
  }


}

function mousePressed() {
  for (let i = swimmers.length - 1; i >= 0; i--) {
    if (swimmers[i].contains(mouseX, mouseY)) {
      swimmers.splice(i, 1);
    }
  }
}

function draw() {
  background(0,0,255);
  for (let i = 0; i < swimmers.length; i++) {
    if (swimmers[i].contains(mouseX, mouseY)) {
      swimmers[i].changeColor(255,0,0);
    } else {
      swimmers[i].changeColor(255);
    }
    swimmers[i].move();
    swimmers[i].show();
  }
  imageMode(CENTER);
  scale(.9);
  image(img,mouseX, mouseY);

}

class Swimmer {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-15, 15);
    this.y = this.y + random(-15, 15);
  }

  show() {
    noStroke();
    fill(255,228,181);
    ellipse(this.x, this.y, this.r * 2);
  }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

}