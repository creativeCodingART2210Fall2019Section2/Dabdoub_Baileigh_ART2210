var library;

function preload(){
    library=loadJSON("Greeks.json");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    //background(0);
    //textAlign(CENTER);
}
function draw(){
    //push();
    //stroke(6);
    //textSize(100);
    //fill(255);
  //text(library.gods[5],500,500);

  var gods = library.gods;
  for(var i=0;i<gods.length;i++){
      text(gods[i],i*100,500);
  }
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}