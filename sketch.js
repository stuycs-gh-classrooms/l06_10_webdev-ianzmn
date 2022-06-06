var second;
var minute;
var hour;
var x;
var y; 

function setup () { 
  createCanvas(600,600);
  second = second();
  minute = minute();
  hour = hour();
 background (#A8DDED) ;
  x = width/2;
  y = height/2;
 frameRate(1);
}

function draw() { 
 updateTime();
 print(second + " " + minute + " " + hour);
 background(#A8DDED);
 clockFace();
 drawHand();
}

function clockFace() {
  fill(0);
  stroke(0);
  strokeWeight(1);
  circle (x,y, 400);
}

function drawHand() {
  //call timetoAngle
  stroke(255);//second
  line(x,y,x - (160*cos(timeToAngle (second, 0))), y - (160*sin(timeToAngle (second,0))));
  
  stroke(#C0C0C0);//minute
  strokeWeight(3);
  line(x,y,x-(120*cos(timeToAngle(minute, 0))), y-(120*sin(timeToAngle (minute,0))));
  
  stroke (#d4af37) ;//hour
  strokeWeight (5) ;
  line (x,y,x - (90*cos(timeToAngle (hour, 1))),y- (90*sin(timeToAngle (hour,1))));
} 

function updateTime () {
  second +=1 ; 
  if (second >= 60) {
    second = 0 ; 
    minute = minute + 1 ; 
    if (minute>=60) {
      minute = 0 ;
       
      if (hour>=12) {
         hour = 0 ;
        }}}
     
}


function timeToAngle (time, a) {
  if (a == 0) {
    return radians((time*6)+90 );
  } else if (a == 1) {
    return radians((time*30)+90) ;
  }
 return 0.0 ;
}
