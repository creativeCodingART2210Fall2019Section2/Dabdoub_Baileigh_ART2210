function setup(){
 
    createCanvas(windowWidth,windowHeight);
  
 }


 function draw(){
var x=0
while(x<=windowWidth){
ellipse (x, 200, 30, 30);
x+=50;
   
}
 }

    
  
 


 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 