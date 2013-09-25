$(document).ready(function() {
  
  $(window).scroll(function () {
  	console.log($(window).scrollTop())
    if ($(window).scrollTop() > 550) {
    	console.log('here we are')
    	$('#nav_bar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 551) {
    	console.log('here we are')
    	$('#nav_bar').removeClass('navbar-fixed-top');
    }
}
);
 

});