function setup(){
 
    createCanvas(windowWidth,windowHeight);
  
 }
  
 function draw(){
    var text = "";
    var i = 0;
    do {
      text += "The number is " + i;
      i++;
    }
    while (i < 5);
 
 }

 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 