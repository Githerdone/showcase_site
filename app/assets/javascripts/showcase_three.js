$(document).ready(function() {
  counter1 = 0
   var interval1;
  $(window).scroll(function(){
    if($('#activate_laptop').length){
      if(isScrolledIntoView1('#activate_laptop') == true){
        if(counter1 == 0){
          counter1 += 1
          $('#laptop_window_main').fadeOut('1000');
          display = new Display;
          $('#paperstack_img').append("<div id='laptop_window_secondary' style='display: none'><span id='rotate'>this</span></div>");
          fadeInWord(display);
          var counter = 0;
          var arrayLength = display.word.length;
          interval1 = setInterval(function(){
            counter += 1;
            if(counter === arrayLength + 1){
              clearInterval(interval1);
              $('#laptop_window_main').fadeIn('1000');
            }else{
              fadeInWord(display);
            }
          }, 3900);
        }
      }else if(isScrolledIntoView1('#activate_laptop') == false){
        clearInterval(interval1);
        $('#laptop_window_secondary').fadeOut('1000').remove();
        $('#laptop_window_main').fadeIn('1000');
        counter1 = 0
      }
    }
  });    
});

function fadeInWord(display){
  $('#laptop_window_secondary').html('<p>' + display.word.shift() + '</p>').fadeIn('700').delay('2500').fadeOut('700')
}

function Display(){
	this.word = ['Eliminate paper', 'Increase efficiency', 'Reduce staff', 'Save $Money']
}

function isScrolledIntoView1(elem){
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}