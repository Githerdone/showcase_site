$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 550) {
      $('#nav_bar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 551) {
      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });
});