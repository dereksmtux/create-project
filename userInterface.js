function display() {
  $('.display').html(timer.hours + ':' + timer.minutes + ':' + timer.seconds);
}
//this is the event handler for the start button
$('#startButton').click(function(){
  if (!started) {
      start();
      started = true;
  }
});



// this is the event handler for the num buttons
$('.num').click(function(event) {
  switch($(this).attr('id')) {
    case 'one': timer.addTime('1'); break;
    case 'two': timer.addTime('2'); break;
    case 'three': timer.addTime(3); break;
    case 'four': timer.addTime(4); break;
    case 'five': timer.addTime(5);break;
    case 'six': timer.addTime(6);break;
    case 'seven': timer.addTime(7);break;
    case 'eight': timer.addTime(8);break;
    case 'nine': timer.addTime(9);break;


  }
});

$(document).ready(function() {
    setInterval(function(){ display(); }, 1000);
});
