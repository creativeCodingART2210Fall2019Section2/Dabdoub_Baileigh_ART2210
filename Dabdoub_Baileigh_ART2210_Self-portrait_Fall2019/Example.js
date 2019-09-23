function setup(){
    createCanvas(windowWidth, windowHeight);
   background(0); 
}


function draw(){
    noStroke();
    for(var x=0;x<=width;x+=5){
        for(var y=0;y<=height;y+=5){
            fill(255,218,185);
            ellipse(x,y,5,5);
        }
    }
     //horizontal lines
        stroke(0);
    for(var x=0;x<=width;x+=5){
        strokeWeight(20);
        line(x, 200, 200, 200);
        
            }
        stroke(0);
    for(var x=0;x<=width;x+=5){
        strokeWeight(20);
        line(x, 300, 200, 300);
    }
     //Vertical Lines for the eyes
        stroke(0);
    for(var y=0;y<=300;y+=5){
        strokeWeight(20);
        line(200,y,200,200);
    }
    stroke(0);
    for(var y=0;y<=300;y+=5){
        strokeWeight(20);
        line(400,y,400,200);
    }
    fill(34,125,34);
    noStroke();
    beginShape();
    vertex(250,200);
    vertex(400,200);
    vertex(400,300);
    vertex(250,300);
    endShape();

    fill(255,255,255);
    noStroke();
    beginShape();
    vertex(200,200);
    vertex(200,300);
    vertex(250,300);
    vertex(250,200);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(300,225);
    vertex(350,225);
    vertex(350,275);
    vertex(300,275);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(200,200);
    vertex(225,200);
    vertex(200,125);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(225,200);
    vertex(275,200);
    vertex(225,125);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(275,200);
    vertex(325,200);
    vertex(300,125);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(325,200);
    vertex(375,200);
    vertex(375,125);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(375,200);
    vertex(400,200);
    vertex(400,125);
    endShape();

  


    if(mouseX>200 && mouseX<400 && mouseY>200 && mouseY<300){
        fill(147,112,219);
        noStroke();
        beginShape();
        vertex(200,200);
        vertex(400,200);
        vertex(400,300);
        vertex(200,300);
        endShape();

        fill(0);
        noStroke();
        beginShape();
        vertex(200,300);
        vertex(225,300);
        vertex(175,375);
        endShape();

        fill(0);
        noStroke();
        beginShape();
        vertex(225,300);
        vertex(275,300);
        vertex(225,375);
        endShape();

        fill(0);
        noStroke();
        beginShape();
        vertex(275,300);
        vertex(300,375);
        vertex(325,300);
        endShape();

        fill(0);
        noStroke();
        beginShape();
        vertex(325,300);
        vertex(375,375);
        vertex(375,300);
        endShape();

        fill(0);
        noStroke();
        beginShape();
        vertex(375,300);
        vertex(425,375);
        vertex(400,300);
        endShape();

        for(var x=215;x<=385;x+=5){
            for(var y=125;y<=190;y+=5){
                fill(255,218,185);
                ellipse(x,y,5,5);
            }
        }
        



    }
   
    
    //eye 2
    stroke(0);
    for(var y=0;y<=300;y+=5){
        strokeWeight(20);
        line(500,y,500,200);
    }
    stroke(0);
    for(var y=0;y<=300;y+=5){
        strokeWeight(20);
        line(700,y,700,200);
    }
    fill(34,125,34);
    noStroke();
    beginShape();
    vertex(550,200);
    vertex(700,200);
    vertex(700,300);
    vertex(550,300);
    endShape();

    fill(255,255,255);
    noStroke();
    beginShape();
    vertex(500,200);
    vertex(500,300);
    vertex(550,300);
    vertex(550,200);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(650,225);
    vertex(650,275);
    vertex(600,275);
    vertex(600,225);
    endShape();

    fill(0)
    noStroke();
    beginShape();
    vertex(500,200);
    vertex(525,200);
    vertex(500,125);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(525,200);
    vertex(575,200);
    vertex(525,125);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(575,200);
    vertex(625,200);
    vertex(600,125);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(625,200);
    vertex(675,200);
    vertex(675,125);
    endShape();

    fill(0);
    noStroke();
    beginShape();
    vertex(675,200);
    vertex(700,200);
    vertex(700,125);
    endShape();


    //nose
    stroke(0);
    strokeWeight(10);
    line(425,300,425,475);

    stroke(0);
    for(var x=425;x<=width;x+=5){
    strokeWeight(10);
    line(x,475,500,475);
    }
    
    stroke(0);
    for(var x=0;x<=475;x+=5){
    strokeWeight(10);
    line(x,400,100,400);
    }

    stroke(0);
    for(var y=400;y<=height;y+=5){
    strokeWeight(10);
    line(475,y,475,500);
    }

    stroke(0);
    strokeWeight(8);
    line(475,450,500,450);

    stroke(0);
    strokeWeight(8);
    line(500,450,500,475);

    fill(140,82,45);
    stroke(0);
    strokeWeight(2);
    beginShape();
    vertex(400,310);
    vertex(400,500);
    vertex(470,500);
    vertex(470,450);
    vertex(425,450);
    vertex(425,310);
    vertex(400,310);
    endShape();

    fill(140,82,45);
    stroke(0);
    strokeWeight(2);
    beginShape();
    vertex(475.435);
    vertex(475,450);
    vertex(495,450);
    vertex(495,475);
    vertex(510,475);
    vertex(510,435);
    vertex(475,435);
    endShape();



    //Lips
    stroke(0);
    for(x=0;x<=width;x+=5){
    strokeWeight(15);
    line(x,650,100,650);
    }
    stroke(0);
    strokeWeight(15);
    line(450,650,500,600);

    stroke(0);
    strokeWeight(15);
    line(500,600,550,650);

    stroke(0);
    strokeWeight(15);
    line(450,650,400,600);
    line(400,600,350,650);
    line(350,650,400,750);
    line(400,750,500,750);
    line(500,750,550,650);

    fill(220,20,60);
    noStroke();
    beginShape();
    vertex(500,600);
    vertex(550,650);
    vertex(500,750);
    vertex(400,750);
    vertex(350,650);
    vertex(400,600);
    vertex(450,650);
    endShape();

    noFill();
    stroke(0);
    strokeWeight(3);
    beginShape();
    vertex(350,650);
    vertex(400,650);
    vertex(450,700);
    vertex(500,650);
    vertex(550,650);
    endShape();

    //Cheeks

    //Hair 
  
}



function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

}