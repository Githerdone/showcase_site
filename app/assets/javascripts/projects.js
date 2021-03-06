var ready = function() {
  $('#tab1').css('display', 'block');
	$(".tabrow li").click(function(e) {
	  e.preventDefault();
    $('#patient_list_body tr').show();
    $('#search-query-1').val('');
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
  $('.DOB').keyup(function(e){
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
  $('.SSN').keyup(function(e){
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
        $('#textswitch input').removeAttr('disabled');
        $('#textswitch input').val('enabled');
      }else{
        return
      }
    }else{
      $('#textswitch div').removeClass('switch-on').addClass('switch-off');
      $('#textswitch div').addClass('deactivate');
      $('#textswitch input').attr('disabled', 'true');
      $('#textswitch input').val('disabled');
    }
  });
};

var Email = function(){
  $('#email').keyup(function(e){
    var email = document.getElementById('email');
    if(email.validity.valid == true && $(email).val().length > 0 ){
      if($('#emailswitch div').hasClass('deactivate')){
        $('#emailswitch div').removeClass('deactivate');
        $('#emailswitch input').removeAttr('disabled');
        $('#emailswitch input').val('enabled');
      }else{
        return
      }
    }else{
      $('#emailswitch div').removeClass('switch-on').addClass('switch-off');
      $('#emailswitch div').addClass('deactivate');
      $('#emailswitch input').attr('disabled', 'true');
      $('#emailswitch input').val('disabled');
    }
  });
};

var formValidity = function(){

}

var formInputValidity = function(){
  $('.patient_contact_form input').keyup(function(e){
    console.log(!$(this).val())
    if(this.validity.valid == false && !$(this).val() == false){
      $(this).addClass('input-error')
    }else{
      $(this).removeClass('input-error')
    }
  })
}

var sameAsAbove = function(){
  var counter = 0
  $('#checkboxsame').change(function(){
    var form = this.form
    var gendermale = $('#gender-male').attr('class');
    var genderfemale = $('#gender-female').attr('class');
    counter += 1
    if(counter == 1){
      form.insurancefirstname.value = document.getElementsByName('patient[]firstname')[0].value;
      form.insurancelastname.value = document.getElementsByName('patient[]firstname')[0].value;
      form.insurancessn.value = form.ssn.value;
      form.insurancedob.value = form.dob.value;
      form.insuranceage.value = form.age.value;
      $('#gendermaleinsurance').addClass(gendermale)
      $('#genderfemaleinsurance').addClass(genderfemale)
      form.insuranceprimaryphone.value = form.primaryphone.value;
      form.insuranceworkphone.value = form.workphone.value;
      form.insurancecellphone.value = form.cellphone.value;
    }else{
      form.insurancefirstname.value = ""
      form.insurancelastname.value = ""
      form.insurancessn.value = ""
      form.insurancedob.value = ""
      form.insuranceage.value = ""
      $('#gendermaleinsurance').removeClass('checked')
      $('#genderfemaleinsurance').removeClass('checked')
      form.insuranceprimaryphone.value = ""
      form.insuranceworkphone.value = ""
      form.insurancecellphone.value = ""
      counter = 0
    }
  })
}

var maritalStatus = function(){
  $('#maritalStatus').change(function(){
    if($('.marital-status span').first().text() == 'Married'){
    $('#spouseInfo').show();
  }else{
    $('#spouseInfo').hide();
    $('#spouseInfo input').val('').removeClass('input-error');
    $('.genderspouse label').removeClass('checked');
  }
  })
  

}

// var getAge = function(){
//     d2 = new Date();
//     var diff = d2.getTime() - d1.getTime();
//     return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
// }
// console.log( getAge(new Date(1978, 10, 3)) );




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

$(document).ready(sameAsAbove);
$(document).on('page:load', sameAsAbove);

$(document).ready(maritalStatus);
$(document).on('page:load', maritalStatus);




