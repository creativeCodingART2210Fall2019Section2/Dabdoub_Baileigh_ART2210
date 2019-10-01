function setup(){
    
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    

}

function draw(){
    background(0);
    
    
for(var x=-500;x<=width;x+=100){
    for(var y=-435;y<=height;y+=100){
        
        stroke(255,165,0,40);
        strokeWeight(30);
        fill(255,215,0);
        ellipse(x,y,15,15);

        stroke(255,165,0,40);
        strokeWeight(15);
        noFill();
        ellipse(x,y,10,10);
    }
}

for(var x=-450;x<=width;x+=100){
    for(var y=-375;y<=height;y+=100){
        stroke(255,215,0,30);
        strokeWeight(20);
        fill(255,165,0);
        ellipse(x,y,10,10);

        stroke(255,215,0,30);
        strokeWeight(15);
        noFill();
        ellipse(x,y,5,5);
    }
}







    translate(500,435);
    rotate(-135);

let hr=hour();
let mn=minute();
let sc=second();

//Hours1
let hourAngle=map(hr % 12,0,12,0,360);


push();
rotate(hourAngle);
noStroke();
point(150, 150);
point(-150, -150);
stroke(150,255,200);
strokeWeight(10);

noFill();
beginShape();
curveVertex(800,-400);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(400,-800);
endShape();

//glow 1
stroke(150,255,200,25);
strokeWeight(1);
point(150, 150);
point(-150, -150);
strokeWeight(40);

noFill();
beginShape();
curveVertex(800,-400);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(400,-800);
endShape();
//2
stroke(150,255,200,25);
strokeWeight(1);
point(150, 150);
point(-150, -150);
strokeWeight(30);

noFill();
beginShape();
curveVertex(800,-400);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(400,-800);
endShape();
//3
stroke(150,255,200,25);
strokeWeight(0);
point(150, 150);
point(-150, -150);
strokeWeight(20);

noFill();
beginShape();
curveVertex(800,-400);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(400,-800);
endShape();
//4
stroke(150,255,200,25);
strokeWeight(0);
point(150, 150);
point(-150, -150);
strokeWeight(15);

noFill();
beginShape();
curveVertex(800,-400);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(400,-800);
endShape();

pop();

//Minutes1

let minuteAngle=map(mn,0,60,0,360);


push();
rotate(minuteAngle);
stroke(200,0,255);
strokeWeight(6);
point(200, 200);
point(-200, -200);
strokeWeight(6);

noFill();
beginShape();
curveVertex(-200,800);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(-800,200);
endShape();

//Glow 1
stroke(200,0,255,30);
strokeWeight(0);
point(200, 200);
point(-200, -200);
strokeWeight(30);

noFill();
beginShape();
curveVertex(-200,800);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(-800,200);
endShape();
//2
stroke(200,0,255,30);
strokeWeight(0);
point(200, 200);
point(-200, -200);
strokeWeight(25);

noFill();
beginShape();
curveVertex(-200,800);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(-800,200);
endShape();
//3
stroke(200,0,255,30);
strokeWeight(0);
point(200, 200);
point(-200, -200);
strokeWeight(20);

noFill();
beginShape();
curveVertex(-200,800);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(-800,200);
endShape();
//4
stroke(200,0,255,30);
strokeWeight(0);
point(200, 200);
point(-200, -200);
strokeWeight(15);

noFill();
beginShape();
curveVertex(-200,800);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(-800,200);
endShape();
pop();


//Seconds1

let secondAngle=map(sc,0,60,0,360);

push();
rotate(secondAngle);
stroke(0,220,255);
strokeWeight(2);
point(300, 300);
point(-300, -300);
strokeWeight(2);

noFill();
beginShape();
curveVertex(0,600);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(-600,0);
endShape();
//Glow 1

stroke(0,220,255,30);
strokeWeight(0);
point(300, 300);
point(-300, -300);
strokeWeight(20);

noFill();
beginShape();
curveVertex(0,600);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(-600,0);
endShape();
//2
stroke(0,220,255,30);
strokeWeight(0);
point(300, 300);
point(-300, -300);
strokeWeight(15);

noFill();
beginShape();
curveVertex(0,600);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(-600,0);
endShape();
//3
stroke(0,220,255,30);
strokeWeight(0);
point(300, 300);
point(-300, -300);
strokeWeight(10);

noFill();
beginShape();
curveVertex(0,600);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(-600,0);
endShape();
//4
stroke(0,220,255,30);
strokeWeight(0);
point(300, 300);
point(-300, -300);
strokeWeight(5);

noFill();
beginShape();
curveVertex(0,600);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(-600,0);
endShape();
pop();


//Planet
push();
noStroke();
fill(255,192,205);
ellipse(0,0,250,250);
pop();
//glow
stroke(255,82,193,20);
strokeWeight(50);
noFill();
ellipse(0,0,300,300);

stroke(255,82,193,20);
strokeWeight(40);
noFill();
ellipse(0,0,290,290);

stroke(255,82,193,20);
strokeWeight(30);
noFill();
ellipse(0,0,280,280);

stroke(255,82,193,20);
strokeWeight(20);
noFill();
ellipse(0,0,270,270);

stroke(255,82,193,20);
strokeWeight(10);
noFill();
ellipse(0,0,260,260);


//PlanetGradient
strokeWeight(60);
stroke(255,20,147,10);
noFill();
ellipse(0,0,190,190);

strokeWeight(50);
stroke(255,20,147,20);
noFill();
ellipse(0,0,200,200);

strokeWeight(40);
stroke(255,20,147,20);
noFill();
ellipse(0,0,210,210);

strokeWeight(30);
stroke(255,20,147,20);
noFill();
ellipse(0,0,220,220);

strokeWeight(20);
stroke(255,20,147,20);
noFill();
ellipse(0,0,230,230);

strokeWeight(10);
stroke(255,20,147,20);
noFill();
ellipse(0,0,240,240);

strokeWeight(5);
stroke(255,20,147,25);
noFill();
ellipse(0,0,245,245);




//Seconds2

push();
stroke(220,20,60,30);
fill(220,20,60);
strokeWeight(30);
rotate(secondAngle);
ellipse(250,250,100,100);
//glow1
stroke(220,20,60,30);
fill(220,20,60);
strokeWeight(20);
ellipse(250,250,100,100);
//glow2
stroke(220,20,60,30);
fill(220,20,60);
strokeWeight(15);
ellipse(250,250,100,100);
//glow3
stroke(220,20,60,30);
fill(220,20,60);
strokeWeight(10);
ellipse(250,250,100,100);
//glow4
stroke(220,20,60,30);
fill(220,20,60);
strokeWeight(5);
ellipse(250,250,100,100);
pop();

push();
rotate(secondAngle);
stroke(0,220,255);
strokeWeight(2);
point(300, 300);
point(-300, -300);
strokeWeight(2);

noFill();
beginShape();
curveVertex(600,0);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(0,-600);
endShape();
//Glow 1
stroke(0,220,255,30);
strokeWeight(0);
point(300, 300);
point(-300, -300);
strokeWeight(20);

noFill();
beginShape();
curveVertex(600,0);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(0,-600);
endShape();
//2
stroke(0,220,255,30);
strokeWeight(0);
point(300, 300);
point(-300, -300);
strokeWeight(15);

noFill();
beginShape();
curveVertex(600,0);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(0,-600);
endShape();
//3
stroke(0,220,255,30);
strokeWeight(0);
point(300, 300);
point(-300, -300);
strokeWeight(10);

noFill();
beginShape();
curveVertex(600,0);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(0,-600);
endShape();
//4
stroke(0,220,255,30);
strokeWeight(0);
point(300, 300);
point(-300, -300);
strokeWeight(5);

noFill();
beginShape();
curveVertex(600,0);
curveVertex(300,300);
curveVertex(-300,-300);
curveVertex(0,-600);
endShape();
pop();

//Minutes2
push();
stroke(200,255,0,20);
strokeWeight(30);
fill(200,255,0);
rotate(minuteAngle);
ellipse(285,285,150,150);
//glow1
stroke(200,255,0,20);
strokeWeight(25);
noFill();
ellipse(285,285,175,175);
//glow2
stroke(200,255,0,20);
strokeWeight(20);
noFill();
ellipse(285,285,150,150);
//glow3
stroke(200,255,0,20);
strokeWeight(15);
noFill();
ellipse(285,285,150,150);

pop();

push();
rotate(minuteAngle);
stroke(200,0,255);
strokeWeight(6);
point(200, 200);
point(-200, -200);
strokeWeight(6);

noFill();
beginShape();
curveVertex(800,-200);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(200,-800);
endShape();

//Glow1
stroke(200,0,255,30);
strokeWeight(0);
point(200, 200);
point(-200, -200);
strokeWeight(30);

noFill();
beginShape();
curveVertex(800,-200);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(200,-800);
endShape();
//2
stroke(200,0,255,30);
strokeWeight(0);
point(200, 200);
point(-200, -200);
strokeWeight(25);

noFill();
beginShape();
curveVertex(800,-200);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(200,-800);
endShape();
//3
stroke(200,0,255,30);
strokeWeight(0);
point(200, 200);
point(-200, -200);
strokeWeight(20);

noFill();
beginShape();
curveVertex(800,-200);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(200,-800);
endShape();
//4
stroke(200,0,255,30);
strokeWeight(0);
point(200, 200);
point(-200, -200);
strokeWeight(15);

noFill();
beginShape();
curveVertex(800,-200);
curveVertex(200,200);
curveVertex(-200,-200);
curveVertex(200,-800);
endShape();
pop();

//Hours2
push();
stroke(0,0,255,30);
strokeWeight(40);
fill(0,0,255);
rotate(hourAngle);
ellipse(200,200,50,50);
//glow1
stroke(0,0,255,30);
strokeWeight(30);
noFill();
ellipse(200,200,50,50);
//glow2
stroke(0,0,255,30);
strokeWeight(20);
noFill();
ellipse(200,200,50,50);
//glow3
stroke(0,0,255,30);
strokeWeight(15);
noFill();
ellipse(200,200,50,50);
//glow4
stroke(0,0,255,30);
strokeWeight(10);
noFill();
ellipse(200,200,50,50);
pop();

push();
rotate(hourAngle);
stroke(150,255,200);
strokeWeight(10);
point(150, 150);
point(-150, -150);
strokeWeight(10);

noFill();
beginShape();
curveVertex(-400,800);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(-800,400);
endShape();

//GLOW 1

stroke(150,255,200,25);
strokeWeight(0);
point(150, 150);
point(-150, -150);
strokeWeight(40);

noFill();
beginShape();
curveVertex(-400,800);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(-800,400);
endShape();
//2
stroke(150,255,200,25);
strokeWeight(0);
point(150, 150);
point(-150, -150);
strokeWeight(30);

noFill();
beginShape();
curveVertex(-400,800);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(-800,400);
endShape();
//3
stroke(150,255,200,25);
strokeWeight(0);
point(150, 150);
point(-150, -150);
strokeWeight(20);

noFill();
beginShape();
curveVertex(-400,800);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(-800,400);
endShape();
//4
stroke(150,255,200,25);
strokeWeight(0);
point(150, 150);
point(-150, -150);
strokeWeight(15);

noFill();
beginShape();
curveVertex(-400,800);
curveVertex(150,150);
curveVertex(-150,-150);
curveVertex(-800,400);
endShape();
pop();

}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight); 
} 