// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

$('form').submit(function(e){
	e.preventDefault();
  Avgrund.show('.avgrund-popup');
});

$('#close_btn').on('click', function(){
	Avgrund.hide();
})

});