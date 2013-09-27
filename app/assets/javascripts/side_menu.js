$( document ).ready(function() {
 

  $('#showcase_two').mouseenter(function(){
    if ($('#side_menu').css('left') == "-167px"){
      message = new Message();
      $('#side_menu').animate({
        backgroundColor: "#D0D0D0",
        opacity: 1,
        left: "+=152",
      }, 500)
      setTimeout(function(){
       var message_box = "<div style='" + message.color.shift() + "; display: none;'><h6>" + message.title.shift() + "</h6><p>" + message.body.shift() + "</p></div>";
       var large_display = "<div id='action_div' style='display: hidden;'><div class='inner_div style='display: hidden;'><div class='user'><i class='icon-user'></i></div><div class='info_status'><h2 style='color: rgba(207, 191, 0, 0.57);'>Order Update!</h2></div><div class='div_text'><span><b>hello there</b></span><br /><span>here we are again</span><span>againa nd again</span><br /></div></div></div>"
       $('#side_menu').append(message_box)
       $('#side_menu').find('div').last().show().animate({ left: '+=166' }, 800).fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');
       $('#showcase_two').append(large_display)
       $(large_display).animate({ top: '+=2%', left: '+=43%', width: '+=420px', height: '+=320px', }, 500);

      }, 300);
      timer = setInterval(function(){
        if(message.title.length > 0){
          $('#side_menu').append("<div style='" + message.color.shift() + "; display: none;'><h6>" + message.title.shift() + "</h6><p>" + message.body.shift() + "</p></div>")
         $('#side_menu').find('div').last().show().animate({ left: '+=166' }, 800).fadeIn('500').fadeOut('500').fadeIn('500').fadeOut('500').fadeIn('500');
        }
      }, 2000);
    };
  });

  $('#showcase_two').mouseleave(function(){
    if ($('#side_menu').css('left') == "-15px"){
      $('#side_menu div').remove();
      $('#action_div').remove();
      message = null;
      clearInterval(timer)
      $('#side_menu').animate({
        backgroundColor: "#FF9900",
        opacity: 0.25,
        left: "-=152",
      }, 500);
    }
  });
});


function Message(){
  this.title = ['New Client', 'New Order', 'Updated Order', 'Alert!', 'New Customer'];
  this.body = ['Need call back and contact information',
               'Review order information and send confirmation',
               'Corrected design of product size and color',
               'All orders now need full signatures before submission',
               'Looking for a new commercial location' ];
  this.color = ['background-color: rgba(86, 255, 79, 0.52)', 'background-color: rgba(86, 255, 79, 0.52)', 'background-color: rgba(255, 255, 53, 0.52)', 'background-color: rgba(255, 82, 82, 0.52)', 'background-color: rgba(86, 255, 79, 0.52)']
}



  $('#showcase_two').mouseenter(function(){
    if ($('#side_menu').css('left') == "-167px"){
      $('#side_menu').animate({
        backgroundColor: "#D0D0D0",
        opacity: 1,
        left: "+=152",
      }, 1000);
      setTimeout(function(){
        $('#action_div').show();
        $('#action_div').animate({
        top: '+=2%',
        left: '+=43%',
        width: '+=420px',
        height: '+=320px',
      }, 500);
      },700);
    }
      
  });

  $('#showcase_two').mouseleave(function(){
    if ($('#side_menu').css('left') == "-15px"){
      $('#side_menu').animate({
        backgroundColor: "#FF9900",
        opacity: 0.25,
        left: "-=152",
      }, 500)
      setTimeout(function(){
        $('#action_div').animate({
          top: '-=2%',
          left: '-=43%',
        width: '-=420px',
        height: '-=320px',
      }, 500);
      $('#action_div').delay('2200').hide();
      });
    }
  })