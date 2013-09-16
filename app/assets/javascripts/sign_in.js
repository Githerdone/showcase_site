$(document).ready(function() {
 
 $('#sign_inLink').on('click', function(){
    $("#signinModal").modal('show'); 


  });

  $('#signinModal').on('ajax:success', function(e, data, status, xhr) {
   $('#signinModal').modal('hide');

 });

});