function setup(){
    createCanvas(windowWidth, windowHeight);
    stroke(200,0,200,50);
}
function draw(){ 
var weight=dist(mouseX,mouseY,pmouseX,pmouseY);
strokeWeight(weight);
line(mouseX,mouseY,pmouseX,pmouseY);
}

function windowResized(){
    resizedCanvas(windowWidth, windowHeight);
}