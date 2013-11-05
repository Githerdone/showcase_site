$(document).ready(function() {
  counter2 = 0
   var interval2;
   var timeout1;
   var timeout2;
   var message;

  $(window).scroll(function(){
    if($('#secret_wrapper').length){
      if(isScrolledIntoView('#secret_wrapper') == true){
        console.log('true')
        if(counter2 == 0){
          console.log(counter2)
          counter2 += 1
          if ($('#side_menu').css('left') == "-167px"){
            message = new Message();
            $('#side_menu').animate({
              backgroundColor: "rgba(255, 250, 250, 0.64)",
              opacity: 1,
              left: "+=152",
            }, 300)
            timeout1 = setTimeout(function(){
              var message_box = "<div style='" + message.color.shift() + "; display: none;'><h6>" + message.title.shift() + "</h6></div>";
              $('#side_menu').append(message_box)
              $('#side_menu').find('div').last().show().animate({ left: '+=166' }, 800).fadeIn('500').fadeOut('500').fadeIn('500');
            }, 100);
            timeout2 = setTimeout(function(){
              $('#action_div').show().animate({ top: '+=-48%', left: '+=37%', width: '+=500px', height: '+=340px', }, 500);
              // $('#action_div h5').shuffleLetters();
              timeoutgender = setTimeout(function(){
                flashIt('#showcasetwo-gender-male', 3, 'checked', 50)
              }, 1000)
               timeoutmaritalstatusbutton = setTimeout(function(){
                flashIt('.info_status button', 3, 'button_flash', 1000)
              }, 1000)  
              timeoutmaritalstatusselect = setTimeout(function(){
                $('#showcasetwo-maritalstatus').find('div').addClass('open')
                  timeoutmaritalstatusselectmenu = setTimeout(function(){
                    $('.info_status .dropdown-menu').find("[rel='0']").removeClass('selected')
                    $('.info_status .dropdown-menu').find("[rel='1']").addClass('selected')
                    $('.info_status button .filter-option').text('Married')
                    timeoutmaritalstatusselectmenu2 = setTimeout(function(){
                      $('#showcasetwo-maritalstatus').find('div').removeClass('open')
                    }, 1000) 
                  }, 500) 
              }, 3000)     
            }, 4700);
            interval2 = setInterval(function(){
              if(message.title.length > 0){
                $('#side_menu').append("<div style='" + message.color.shift() + "; display: none;'><h6>" + message.title.shift() + "</h6></div>")
                $('#side_menu').find('div').last().show().animate({ left: '+=166' }, 800).fadeIn('500').fadeOut('500').fadeIn('500');
              }
            }, 800);
          }
        }
      }else if(isScrolledIntoView('#secret_wrapper') == false){
          counter2 = 0;
        if ($('#side_menu').css('left') == "-15px"){
          $('#side_menu div').remove();
          message = null;
          clearInterval(interval2);
          clearTimeout(timeout1);
          clearTimeout(timeout2);
          clearTimeout(timeoutgender);
          clearTimeout(timeoutmaritalstatusbutton);
          clearTimeout(timeoutmaritalstatusselect);
          clearTimeout(timeoutmaritalstatusselectmenu);
          clearTimeout(timeoutmaritalstatusselectmenu2);
          $('#laptop_window_secondary').fadeOut('1000').remove();
          $('#laptop_window_main').fadeIn('1000');
          $('#showcasetwo-maritalstatus').find('div').removeClass('open')
          $('#showcasetwo-gender-male').removeClass('checked')
          $('#comp_modal').hide();
          $('#action_div').animate({
            top: '-=-48%', 
            left: '-=37%', 
            width: '-=500px', 
            height: '-=340px', 
          }, 300).hide();
          $('#side_menu').animate({
            backgroundColor: "rgba(122, 144, 187, 0)",
            opacity: 0.25,
            left: "-=152",
          }, 300);
        }
      }
    }else{
      return
    }
  });  

  $('.info_status').submit(function(e){
    e.preventDefault();
    $('#comp_modal').fadeIn(300).show();
  });
});

function Message(){
  this.title = ['Track Clients', 'Access Documents', 'Update Orders', 'Get Instant Alerts', 'Create Customers'];
  this.color = ['background-color: #D4DFFF',
                'background-color: #A6BEFF',
                'background-color: #8DABFF',
                'background-color: #7A89B2',
                'background-color: #516AAF']
}

function flashIt(element, times, klass, delay){
  for (var i=0; i < times; i++){
    setTimeout(function(){
      $(element).toggleClass(klass);
    }, delay + (300 * i));
  };
};

function isScrolledIntoView(elem){
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function flashGender(){
  $('#showcasetwo-gender-male').addClass('checked').removeClass('checked').addClass('checked')
}