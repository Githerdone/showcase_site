$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 526) {
      $('#nav_bar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 527) {
      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });
});