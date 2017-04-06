





function display() {
  $('.display').html(timer.hours + ':' + timer.minutes + ':' + timer.seconds);
}

$('#startButton').click(function(){
  start();

});
