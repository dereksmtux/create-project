/*
this is the object cunstructer for the clock object
 that our timer will be an instance of
it doesn't take any parameters since all clocks start at zero time.
*/
var count = true;


function Clock(sec,min,hour) {
  //time keeping variables for clock
  this.seconds = sec;
  this.minutes = min;
  this.hours = hour;
  //this method will step up the time incromentally
  this.tickUp = function(){
    this.seconds +=1;
    //evaluates seconds
    if (this.seconds == 60) {
      this.minutes ++;
      this.seconds = 0;
    }
    //evaluates minutes
    if (this.minutes == 60) {
      this.hours ++;
      this.minutes = 0;
    }
  }


  this.tickDown = function(){
    this.seconds --;

    if (this.seconds < 0) {
      this.minutes --;
      this.seconds = 59;
    }

    if (this.minutes < 0) {
      this.hours --;
      this.minutes = 59;
    }

  }
}

var timer = new Clock(0,0,0);

function start(){
  if (count) {
    setInterval(function(){timer.tickUp();}, 1000);
  }
  else {
    setInterval(function(){timer.tickDown();}, 1000);
  }

}
setInterval(function(){ display(); }, 1000);
