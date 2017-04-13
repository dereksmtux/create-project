/*
this is the object cunstructer for the clock object
 that our timer will be an instance of
it doesn't take any parameters since all clocks start at zero time.
*/
var count = true;
var started = false;

var addTimer = []

function Clock(sec,min,hour) {
  //time keeping variables for clock
  this.seconds = sec;
  this.minutes = min;
  this.hours = hour;
  //this method will step up the time incromentally
  this.tickUp = function(){
    this.seconds +=1;
    //evaluates seconds
    if (this.seconds >= 60) {
      this.minutes ++;
      this.seconds = 0;
    }
    //evaluates minutes
    if (this.minutes >= 60) {
      this.hours ++;
      this.minutes = 0;
    }
  }
//Deaven did this part ******* :D
//counts time down
  this.tickDown = function(){
    this.seconds --;

    if (this.seconds < 0) {
      if (this.minutes > 0) {

        this.minutes --;
        this.seconds = 59;
      }
      else {
        this.seconds = 0
      }
    }
    if (this.minutes < 0) {
      if (this.hours > 0) {
        this.hours --;
        this.minutes = 59;
      }
    }

  }
  this.addTime = function(num) {

    addTimer.push(num);
//seconds
    if (addTimer.length >1) {
      sec = addTimer[addTimer.length -2] + addTimer[addTimer.length -1];
    }
    else {
      sec = addTimer[addTimer.length -1];
    }
//minutes
    if (addTimer.length >3) {
      min = addTimer[addTimer.length -4] + addTimer[addTimer.length -3];
    }
    else if(addTimer.length >2){
      min = addTimer[addTimer.length -3];
    }
//hours
    if (addTimer.length >5) {
      hour = addTimer[addTimer.length -6] + addTimer[addTimer.length -5];
    }
    else if (addTimer.length >4) {
      hour = addTimer[addTimer.length -5];
    }

    sec = Number(sec);
    min = Number(min);
    hour = Number(hour);
    timer.seconds = sec;
    timer.minutes = min;
    timer.hours = hour;
    console.log(addTimer)

  }

}

var timer = new Clock(0,0,0);
//starts the clock ticking
function start(){
  if (count) {
    setInterval(function(){timer.tickUp();}, 1000);
  }
  else {
    setInterval(function(){timer.tickDown();}, 1000);
  }

}
