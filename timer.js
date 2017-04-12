/*
this is the object cunstructer for the clock object
 that our timer will be an instance of
it doesn't take any parameters since all clocks start at zero time.
*/
var count = true;
var started = false;
var buttons = [1,2,3,4,5,6,7,8,9,0];
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
    //assigning seconds to array
    /*
    if (addTimer.length > 1) {
      var sec =  Number((Number(addTimer[0]) * 10) +  Number(addTimer[1]));
    }
    else {
      var sec = Number(addTimer[0]);
    }

    if (addTimer.length == 4) {
        var min = Number((Number(addTimer[3]) * 10) +  Number(addTimer[2]));
    }
    else if (addTimer.length == 3 ) {
      var min = Number( (Number(addTimer[2]) * 10) + Number(addTimer[1]));
    }
    else {
      min = 0;
    }

    //var sec = addTimer[0]
    this.seconds = sec;
    this.minutes = min;
    */

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
