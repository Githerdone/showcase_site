$(document).ready(function() {

	$('.sign_link').on('click', function(){
		var modal_type = $(this).data('label');
		prepare_modal_show(modal_type);
		modal_form = new ModalForm(modal_type);


  	$('.tooltip_box').tooltip({ trigger: 'hover', html: true });

  	$('input').keyup(function(){

  		if(modal_form[$(this).data('label')].test($(this).val())){
  			$(this).attr('class', 'input_correct');   
  		}else{
  			$(this).attr('class', 'input_incorrect');
  		}

  		if(modal_form.type == '#signupModal'){
  			passwords_match($('#password').find('input'), $('#password_confirmation').find('input'));
      }

  		var $inputs = $(modal_form.type + ' :input').not(':button,:hidden');
  		var values = {};
  		$inputs.each(function(){
  			values[$(this).data('label')] = $(this).val();
  		});
  		if(validate_form(modal_form, values)){
  		  prepare_modal_submit();
  		}else{
  			prepare_modal_noSubmit();
  		}
  	});
  });

	$('#signupModal').on('ajax:success', function(e, data, status, xhr) {
		display_errors($(this).attr('id'), data)
	});

	$('#signinModal').on('ajax:success', function(e, data, status, xhr) {
	  display_errors($(this).attr('id'), data)
	});

	$('.button_close').on('click', function(){
		var modal_type = $(this).data('type')
		if($('.reg_errors').length == 1){
		  $('.reg_errors').animate({
			  left: '-=271'
		  }, 800, function(){
			  $('.reg_errors').remove();
        $('#' + modal_type).modal('hide')
		  });
	  }else{
      $('#' + modal_type).modal('hide')
	  }
	});
});

function display_errors(modal_type, data){
  if(data.success == true){
		$('#' + modal_type).modal('hide');
		$('.header_user').html(data.html_user);
		$('.nav_links').empty();
		$('.nav_links').append().html(data.html_nav);
	}else{
		$('.modal-backdrop').append().html(data.html_error);
		$('.reg_errors').animate({
			left: '+=271'
		});
		for(var key in data.errors){
			var title = key.replace(/_/g, " ")
			$('#error_heading').append('<h6><b>'+title+':</b></h6>')
			var obj =	data.errors[key].filter(onlyUnique);
			for(var index in obj){
				if(obj.hasOwnProperty(index)){
				  $('#error_heading').append('<p>- '+obj[index]+'</p>')
				}
			}
		}
	}
}

function prepare_modal_show(modal_type){
  $(modal_type).find('form')[0].reset();
  resetInputs(modal_type);
  prepare_modal_noSubmit();
	$(modal_type).modal('show');
}

function prepare_modal_noSubmit(){
	$('.button_submit').attr('disabled','disabled');
	$('.button_submit').addClass('no_submit');
	$('.button_submit').text('Not ready to Submit');
}

function prepare_modal_submit(){
	if($('.reg_errors').length == 1){
		$('.reg_errors').animate({
			left: '-=271'
		}, 800, function(){
			$('.reg_errors').remove();
		});
	}
	$('.button_submit').removeAttr('disabled');
	$('.button_submit').removeClass('no_submit').addClass('ready_submit');
	$('.button_submit').text('Ready to Submit');
}

function resetInputs(modal_type){
  $(modal_type).find('form :input').not(':button').attr('class', 'input_incorrect');
}

function validate_form(form, values){
	var valid = [];
  if(form.type == '#signinModal'){
    valid.push(form.login.test(values.login));
    valid.push(form.password.test(values.password));
    if(valid.filter(onlyTrue).length == 2){
    	return true;
    }
  }else if(form.type == '#signupModal'){
  	valid.push(form.username.test(values.username));
	  valid.push(form.email.test(values.email));
	  valid.push(form.password.test(values.password));
	  valid.push(form.confirmation.test(values.confirmation));
	  valid.push(values.password == values.confirmation && values.password.length >=8 && values.confirmation.length >=8 );
	  if(valid.filter(onlyTrue).length == 5){
    	return true;
    }
  }else{
  	return false;
  }
}

function onlyTrue(element){
	return element == true;
}

function ModalForm(form_type){
	this.type = form_type;
	this.login = new RegExp(/^([a-z]((_?-?)([a-z])(_?-?))+[a-z])$|^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
	this.username = new RegExp(/^([a-z]((_?-?)([a-z])(_?-?))+[a-z])$/i);
	this.email = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
	this.password = new RegExp(/^(?=.*[^a-zA-Z])(?=.*[a-z])(?=.*[A-Z])\S{8,}$/);
	this.confirmation = new RegExp(/^(?=.*[^a-zA-Z])(?=.*[a-z])(?=.*[A-Z])\S{8,}$/);
}

function passwords_match(password, confirmation){
	if($(password).val() == $(confirmation).val() && $(confirmation).val().length >= 8 ){
		$(confirmation).attr('class', 'input_correct');
	}else{
		$(confirmation).attr('class', 'input_incorrect');
	}
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}