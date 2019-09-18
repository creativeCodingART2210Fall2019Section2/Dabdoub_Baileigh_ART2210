function setup(){
 
    createCanvas(windowWidth,windowHeight);
  
 }
  
 function draw(){
    ellipse (0, 200, 30, 30);
    ellipse (50, 200, 30, 30);
    ellipse (100, 200, 30, 30);
    ellipse (150, 200, 30, 30);
    ellipse (200, 200, 30, 30);
    for(var x = 0; x <= width; x+=50){  
        for(var y = 0; y <= height; y+=50){  
             ellipse(x, y, 30, 30);
         }
    } 
 
   
 }
 


 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 