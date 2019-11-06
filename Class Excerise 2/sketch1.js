function setup(){
 
   createCanvas (windowWidth,windowHeight)
  
 }
 function draw(){

if(mouseIsPressed){
    fill(255, 204, 0);
    square(mouseX,mouseY,100);

}else{
    
    fill(175,100,220);
    ellipse(mouseX, mouseY, 100);
 }

}


 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 

 
 

