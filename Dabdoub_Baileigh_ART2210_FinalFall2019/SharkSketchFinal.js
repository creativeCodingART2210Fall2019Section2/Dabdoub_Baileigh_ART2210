let swimmers = [];
let img;
var blood =[];
//let victims=['meal0.png','meal1.png','meal2.png','meal3.png','meal4.png','meal5.png','meal6.png'];
function preload(){
img=loadImage('shark1.png');
  
//blonde= loadImage('meal0.png');
// brody=loadImage('meal1.png');
 //diane=loadImage('meal2.png');
 //jeff=loadImage('meal3.png');
 //lady=loadImage('meal4.png');
 //dave=loadImage('meal5.png');
// richard=loadImage('meal6.png');
 
 //for (let i = 0; i < 7; i++) {
//   victims[i] = loadImage(`meal${i}.png`);
// }
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
    if(swimmers[i].contains(mouseX, mouseY)) {
      swimmers[i].changeColor(255,0,0);
    } else {
      swimmers[i].changeColor(255);
   }
    swimmers[i].move();
    swimmers[i].show();
  }

  for (let i = 0; i < blood.length; i++) {
    if (blood[i].contains(mouseX, mouseY)) {
      blood[i].changeColor(255);
    } else {
      blood[i].changeColor(0);
    }
    blood[i].move();
    blood[i].show();
  }
  
  if (blood.length > 8) {
    blood.splice(0, 1);
  }


  imageMode(CENTER);
  scale(.9);
  image(img,mouseX, mouseY);
}
function mouseDragged() {
    let r = 40;
    let b = new BloodDrop(mouseX, mouseY, r);
    blood.push(b);
  
  }

class Swimmer {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    //this.meal=random(victims);
  }

  changeColor(bright) {
    this.brightness = bright;
  }

 // clicked(px, py) {
    //if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
    //  this.meal = random(victims);
   // }
  //}
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
   // image(this.meal, this.x, this.y, this.r, this.r);
    noStroke();
   fill(255,228,181);
    ellipse(this.x, this.y, this.r * 2);
  }
}
class BloodDrop {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.brightness = 0;
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
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-2, 2);
    }
  
    show() {
      stroke(255);
      noStroke();
      fill(255,0,0,80);
      ellipse(this.x, this.y, this.r * 2);
    }
  }

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

}