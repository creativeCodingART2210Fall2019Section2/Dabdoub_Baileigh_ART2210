function setup(){
 
    createCanvas(windowWidth,windowHeight);
  
 }
  
 function draw(){
    ellipse (0, 200, 30, 30);
    var x = 0;			//local variable
while( x <= width ){ 	//while (condition) is true, keep going
		 	ellipse(x, 200, 30, 30);
x = x + 50; 
}

    ellipse (50, 200, 30, 30);
    ellipse (100, 200, 30, 30);
    ellipse (150, 200, 30, 30);
    ellipse (200, 200, 30, 30);
  
 }
  
  
 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 