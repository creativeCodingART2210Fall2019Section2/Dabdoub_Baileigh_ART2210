var nums=[100,200,46,350,50,230,90,120];


function setup(){
    
    createCanvas(windowWidth,windowHeight);
}

function draw(){
background(0)

for(var x=0;x<8;x++){
    stroke(255);
    strokeWeight(5);
    fill(200,0,255,60);
    ellipse(x*100+100,200,nums[x],nums[x]);   
}
}
function windowResized(){

    resizeCanvas(windowWidth,windowHeight); 
} 
