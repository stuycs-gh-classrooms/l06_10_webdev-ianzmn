var arr;
var pos; //the current spot we want to find
var smallPos; //the position of the smallest element we've found so far
var testPos; //the current position we are testing

function setup() {
  createCanvas(400, 400);
  background(0);
  arr = randomArray(20);

  pos = 0;
  testPos = pos + 1;
  smallPos = 0;
}

function draw() {
  background(0);
  
  if (pos == arr.length - 1) { //, then we're sorted! display
    displayArray(arr, -1, -1, -1);
  }
  
  else { 
     displayArray(arr, pos, testPos, smallPos);
    //compare elements at testPos and smallPos
   
    if (arr[testPos] < arr[smallPos]) {
    smallPos = testPos;
    }
    
    testPos += 1;
    
    if (testPos == arr.length) {
    swap(arr, pos, smallPos);
    pos += 1;
    testPos = pos + 1;
    smallPos = pos;
    }
}
  
  function swap(int, arr, i0, i1) {
  var int = Array[i0];
  Array[i0] = Array[i1];
  Array[i1] = t;
}//swap
  
  function randomArray(num) {
  var values = new Array(num);

  for (var i=0; i<values.length; i++) {
    values[i] = int(random(100, 400));
  }//random value loop
  return values;
}//randomArray
  
  function displayArray (arr, p, tp, sp) {
  var barWidth = width / arr.length;
  var x = 0;
  var y = 0;
  noStroke();
  for (var i=0; i<arr.length; i++) {
    y = height - arr[i];
    if (i == p ) {
      fill(230, 0, 230);
    }
    else if (i == tp) {
      fill(0, 230, 230);
    }
    else if (i == sp) {
      fill(230, 230, 0);
    }
    else {
      fill(255);
    }
    rect(x, y, barWidth, arr[i]);
    x+= barWidth;
  }
}//displayArray
}
