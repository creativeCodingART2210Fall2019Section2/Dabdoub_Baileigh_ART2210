var img;

function preload(){
    img=loadImage("https://github.com/BaileighD/Dabdoub_Baileigh_ART2210/raw/master/PictureGithubTest/tiger.jpg");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
}
 function draw(){
image(img,windowWidth/6,windowHeight/6, windowWidth/2, windowHeight/2);

 }

 function windowResized(){
     resizeCanvas(windowWidth,windowHeight);
 }
