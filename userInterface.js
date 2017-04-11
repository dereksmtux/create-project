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
    case 'one': console.log('test'); break;
    case 'two': console.log('test2'); break;
    case 'three': console.log('test3'); break;
    case 'four': console.log('test4'); break;
    case 'five': console.log('test5');break;
    case 'six': console.log('test6');break;
    case 'seven': console.log('test7');break;
    case 'eight': console.log('test8');break;
    case 'nine': console.log('test9');break;


  }
});

$(document).ready(function() {
    setInterval(function(){ display(); }, 1000);
});
