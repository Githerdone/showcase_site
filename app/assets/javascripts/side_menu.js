$( document ).ready(function() {
  
  $('#showcase_two').mouseenter(function(){
    if ($('#side_menu').css('left') == "-167px"){
      $('#side_menu').animate({
        backgroundColor: "#D0D0D0",
        opacity: 1,
        left: "+=152",
      }, 500);
      setTimeout(function(){
        $('#action_div').animate({
        top: '+=9%',
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
          top: '-=9%',
          left: '-=43%',
        width: '-=420px',
        height: '-=320px',
      }, 500);
      });
    }
  })
});

