$(document).ready(function() {
  
  $(window).resize(function(){
  	console.log(this)
  	console.log('the window is changing width to this' + $('#showcase_three').width())
  })
  		console.log($('#showcase_three').height());
  console.log($('#showcase_three').width());

});