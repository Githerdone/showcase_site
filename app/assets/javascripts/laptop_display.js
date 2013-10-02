$(document).ready(function() {
  
  $('#paperstack_img').mouseenter(function(){
    var words = ['Simple', 'Elegant', 'Software'];
    fadeIt(words, 500);
  });

  $('#paperstack_img').mouseleave(function(){
  	console.log('here')
    clearTimeout()

  });

});

function fadeIt(words, delay){
	var counter = words.length
  for (var i=0; i < words.length; i++){
    setTimeout(function(){
    	counter = counter -= 1
    	$('.laptop_window').html('<p>' + words.shift() + '</p>').fadeIn('700').delay('2500').fadeOut('700').promise().done(function(){
    	  if(counter <= 0){
      	  timeout4 = setTimeout(function(){
      	    $('.laptop_window').html('<p id="laptop_header">SimplizIT</p><br /><p id="laptop_bullet">- Simple Business IT -</p>').fadeIn('700');
      	  }, 600);
    	  }
      });
    }, delay + (3900 * i));
  };
};