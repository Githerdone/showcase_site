$( document ).ready(function() {
 

  $('#showcase_two').mouseenter(function(){
    if ($('#side_menu').css('left') == "-167px"){
      message = new Message();
      $('#side_menu').animate({
        backgroundColor: "#D0D0D0",
        opacity: 1,
        left: "+=152",
      }, 300)
      setTimeout(function(){
       var message_box = "<div style='" + message.color.shift() + "; display: none;'><h6>" + message.title.shift() + "</h6></div>";
       $('#side_menu').append(message_box)
       $('#side_menu').find('div').last().show().animate({ left: '+=166' }, 800).fadeIn('500').fadeOut('500').fadeIn('500');
       $('#action_div').show().animate({ top: '+=2%', left: '+=35%', width: '+=500px', height: '+=340px', }, 500);
      }, 100);
      timer = setInterval(function(){
        if(message.title.length > 0){
          $('#side_menu').append("<div style='" + message.color.shift() + "; display: none;'><h6>" + message.title.shift() + "</h6></div>")
         $('#side_menu').find('div').last().show().animate({ left: '+=166' }, 800).fadeIn('500').fadeOut('500').fadeIn('500');
        }
      }, 800);
    };
  });

  $('#showcase_two').mouseleave(function(){
    if ($('#side_menu').css('left') == "-15px"){
      $('#side_menu div').remove();
      message = null;
      clearInterval(timer)
      $('#comp_modal').hide();
      $('#action_div').animate({
        top: '-=2%', 
        left: '-=35%', 
        width: '-=500px', 
        height: '-=340px', 
      }, 300).hide();
      $('#side_menu').animate({
        backgroundColor: "#FF9900",
        opacity: 0.25,
        left: "-=152",
      }, 300);
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