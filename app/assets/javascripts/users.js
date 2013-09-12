// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

// $('form').submit(function(e){
// 	e.preventDefault();
//   Avgrund.show('.avgrund-popup');
// });

// $('#close_btn').on('click', function(e){
// 	e.preventDefault();
// 	Avgrund.hide();
// })

// $("button").on("click", function() {

//   // State changes
//   $("body").toggleClass("dialogIsOpen");

// });


// $("form").on("submit", function(e) {
// 	e.preventDefault();
//   $("body").toggleClass("dialogIsOpen");
// });

 $('#sign_upLink').on('click', function(){
    $('input').first().focus();
    $("#signupModal").modal('show');
  });

 $('#signupModal').on('ajax:success', function(e, data, status, xhr) {
 	console.log(data)
 	console.log(xhr)
 	console.log(status)
   $('#signupModal').modal('hide');
 });

  $('#sign_inLink').on('click', function(){
    // $('#name_field').focus();
    $("#signinModal").modal('show'); 
  });

});
