function setup(){
 
    createCanvas(windowWidth,windowHeight);
  
 }


 function draw(){
     background(0);
    for(var x=0;x<=width;x+=50){
        for(var y=0;y<=height;y+=50){
            fill(random(255),0,random(255));
            ellipse(x,y,30,30);
        }
    }
 }

  
 


 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 