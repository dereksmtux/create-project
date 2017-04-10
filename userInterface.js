function display() {
  $('.display').html(timer.hours + ':' + timer.minutes + ':' + timer.seconds);
}

$('#startButton').click(function(){
  if (!started) {
      start();
      started = true;
  }
});
