function Clock() {
  //time keeping variables for clock
  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;
  //this method will step up the time incromentally
  this.tickUp = function(){
    this.seconds ++;
    //evaluates seconds
    if (this.seconds === 60) {
      this.minutes ++;
    }
    //evaluates minutes
    if (this.minutes === 60) {
      this.hours ++;
    }

  }

}
