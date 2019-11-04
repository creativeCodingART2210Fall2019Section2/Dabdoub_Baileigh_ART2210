var library;

function preload(){
    library=loadJSON("birds.json");

}
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(200,0,255);
    textAlign(CENTER);
}
function draw(){
    background(200,0,255);
    push();
    stroke(4);
    textSize(50);
    text(library.birds[1].members[1]+" the "+library.birds[1].family,width/2,height/2);
    pop();
}
function windowResized(){
    resizedCanvas(windowWidth,windowHeight);
    background(200,0,255);
}