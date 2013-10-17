var ready = function() {
  $('#tab1').css('display', 'block');
	$(".tabrow li").click(function(e) {
	  e.preventDefault();
    var textDisplay = $(this).find("a").attr('href');
	  $("li").removeClass("selected");
    $('a').removeClass('selected')
    $('.tab').css("display", "none");
	  $(this).addClass("selected");
    $(this).find('a').addClass('selected');
    $(textDisplay).css('display', 'block');
	});
};

var dob = function(){
  var key_code = [8, 37, 39]
  $('#DOB').keyup(function(e){
    for (var i=0; i<key_code.length; i++){
      if(e.keyCode == key_code[i]){
        return
      }else{
        var strokes = $(this).val().length;
        if(strokes === 2 || strokes === 5){
          var thisVal = $(this).val();
          thisVal += '/';
          $(this).val(thisVal);
        }
      }
    }
  });
};

var ssn = function(){
  var key_code = [8, 37, 39]
  $('#SSN').keyup(function(e){
    for (var i=0; i<key_code.length; i++){
      if(e.keyCode == key_code[i]){
        return
      }else{
        var strokes = $(this).val().length;
        if(strokes === 3 || strokes === 6){
          var thisVal = $(this).val();
          thisVal += '-';
          $(this).val(thisVal);
        }
      }
    }
  });
};

var USphone = function(){
  var key_code = [8, 37, 39]
  $('.USphone').keyup(function(e){
    for (var i=0; i<key_code.length; i++){
      if(e.keyCode == key_code[i]){
        return
      }else{
        var strokes = $(this).val().length;
        if(strokes === 3 || strokes === 7){
          var thisVal = $(this).val();
          thisVal += '-';
          $(this).val(thisVal);
        }
      }
    }
  });
};

var CellPhone = function(){
  $('#cellphone').keyup(function(e){
    var cellphone = document.getElementById('cellphone');
    if(cellphone.validity.valid == true && $(cellphone).val().length > 0){
      if($('#textswitch div').hasClass('deactivate')){
        $('#textswitch div').removeClass('deactivate');
      }else{
        return
      }
    }else{
      $('#textswitch div').removeClass('switch-on').addClass('switch-off');
      $('#textswitch div').addClass('deactivate');
    }
  });
};

var Email = function(){
  $('#email').keyup(function(e){
    var email = document.getElementById('email');
    if(email.validity.valid == true && $(email).val().length > 0 ){
      if($('#emailswitch div').hasClass('deactivate')){
        $('#emailswitch div').removeClass('deactivate');
      }else{
        return
      }
    }else{
      $('#emailswitch div').removeClass('switch-on').addClass('switch-off');
      $('#emailswitch div').addClass('deactivate');
    }
  });
};

var formValidity = function(){

}

var formInputValidity = function(){
  $('.patient_contact_form input').keyup(function(e){
    if(this.validity.valid == false){
      $(this).addClass('input-error')
    }else{
      $(this).removeClass('input-error')
    }
  })
}




//The below code is to recomplile javascript for rails turbolink action
$(document).ready(ready);
$(document).on('page:load', ready);

$(document).ready(dob);
$(document).on('page:load', dob);

$(document).ready(ssn);
$(document).on('page:load', ssn);

$(document).ready(USphone);
$(document).on('page:load', USphone);

$(document).ready(CellPhone);
$(document).on('page:load', CellPhone);

$(document).ready(Email);
$(document).on('page:load', Email);

$(document).ready(formInputValidity);
$(document).on('page:load', formInputValidity);





