$(document).ready(function() {

	$('#sign_upLink').on('click', function(){
		$('#button_submit').attr('disabled','disabled')
		$('#button_submit').addClass('no_submit')
		$('#button_submit').text('Not ready to Submit')
		$("#signupModal").modal('show');
		modal_form = new Form();

	});

	// var tooltip_popup = new window[$(this).data('label')];
	// 	$(this).tooltip({ title: tooltip_popup.body, placement: tooltip_popup.placement });
	// 	$(this).tooltip('disable');
  $('button').on('click', function(){
  	console.log(this)
  	console.log($('.tooltip').length)
    
	    var tooltip_box = new window[$(this).data('label')];
		  $(this).tooltip({ title: tooltip_box.body, 
			                  placement: tooltip_box.placement,
			                  trigger: 'manual' });
		if($('.tooltip').length >= 1){
			$('.tooltip_box').tooltip('hide')
		}else{
      $(this).tooltip('show')
		}

		$('.tooltip').on('click', function(){
			$('.tooltip_box').tooltip('hide')
		});
		// $('.tooltip_box').not(this).tooltip('hide');
    // $('.tooltip_box').on('click', function(){
    // 	$('.tooltip_box').tooltip('hide');
    // })

		// $(this).siblings('input').tooltip('hide');


  });

    
	$('input').keyup(function(){

		var element = $(this).data('label');
		var value = $(this).val();
	  passwords_match($('#password').find('input'), $('#password_confirmation').find('input'));

		if(validate_input(modal_form[element], value)){
      $(this).attr('class', 'input_correct');
      if($('.tooltip').length >= 1){
      	$('.tooltip_box').tooltip('hide');
      }    
   
		}else{
			$(this).attr('class', 'input_incorrect');
		}

		var $inputs = $('#sign_up_user :input').not(':button,:hidden');
    var values = {}
    console.log($inputs)
    $inputs.each(function(){
    	values[$(this).data('label')] = $(this).val();
    });
    if(validate_form(modal_form, values)){
    	$('#button_submit').removeAttr('disabled');
 			$('#button_submit').removeClass('no_submit').addClass('ready_submit');
			$('#button_submit').text('Ready to Submit');
    }else{
    	$('#button_submit').attr('disabled','disabled');
 			$('#button_submit').addClass('no_submit');
		  $('#button_submit').text('Not ready to Submit');
    }
    

			// if(message.valid.test($(this).val())){
			// 	console.log($(this).val())
			// 	$(this).tooltip('hide');
			// 	$(this).tooltip('disable');
			//   if(passwords_match($('#password').find('input').val(), $('#password_confirmation').find('input').val())){
		      
          


		 //      console.log(values)
		 //      console.log()
		      
		 //      console.log(modal_form)
			
			// 	} 
			// }else{
			// 	$(this).tooltip('enable');
			// 	$(this).tooltip('show');
	});
	

	$('#signupModal').on('ajax:success', function(e, data, status, xhr) {

		$('#signupModal').modal('hide');
	});
});

function validate_input(form_element, input){
  if(form_element.test(input)){
  	return true
  }else{
  	return false
  }
}

function validate_form(form, values){
	console.log('here I am ')
	console.log(values)
	var valid = []
	var form_validated = []
	valid.push(form.Username.test(values.Username));
	valid.push(form.Email.test(values.Email));
	valid.push(form.Password.test(values.Password));
	valid.push(form.Confirmation.test(values.Confirmation));
	valid.push(values.Password == values.Confirmation && values.Password.length >=8 && values.Confirmation.length >=8 )
	for (var i = 0; i < valid.length; i++) {
    if(valid[i] == true){
    	form_validated.push(valid[i])
    }
  }
  console.log(valid)
  console.log(form_validated.length)
  console.log(form_validated)
	if(form_validated.length == 5){
	  	return true
	  }else{
	  	return false
	  }
}

function Form(){
  this.Username = new RegExp(/^[a-z_]{4,}/i);
  this.Email = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
  this.Password = new RegExp(/^(?=.*[^a-zA-Z])(?=.*[a-z])(?=.*[A-Z])\S{8,}$/i);
  this.Confirmation = new RegExp(/^(?=.*[^a-zA-Z])(?=.*[a-z])(?=.*[A-Z])\S{8,}$/i);
}

function Username(){
	this.body = "Minimum length of four letters or more (underscores allowed)";
	this.placement = 'bottom';
}

function Email(){
	this.body = "Minimum format required a@a.co";
	this.placement = 'bottom';
}

function Password(){
	this.body = "Minimum length of 8 characters example: Navy#96!";
	this.placement = 'bottom';
}

function Confirmation(){
	this.body = "Must match the password";
	this.placement = 'bottom';
}

function passwords_match(password, confirmation){
	if($(password).val() == $(confirmation).val() && $(confirmation).val().length >= 8 ){
		$(confirmation).attr('class', 'input_correct');
	}else{
    $(confirmation).attr('class', 'input_incorrect');
	}
}












function validate_input_data(email, password, verify){
	var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
	var passwordlength = password.length >= 6;
	var verify_password = password == verify
	return { email: emailRegex.test(email), password: passwordlength, verify: verify_password}
};

function render_error(item){
	if (item == 'email'){
		$("[for=user_email] span").css('color', 'red').text(' - incorrect format');
	}
	if (item == 'password'){
		$("[for=user_password] span").css('color', 'red').text(' - not long enough');
	}
	if (item == 'verify'){
		$("[for=user_password_confirmation] span").css('color', 'red').text(' - does not match');
	}
};

function reset_create(){
	$('#new_user label span').text('');
	$("#new_user")[0].reset();
	$('#email').focus();
};


$('#new_user').on('submit', function(e){
	e.preventDefault();

	var form_input = $(this).serializeArray();
	var validation = validate_input_data(form_input[2].value, form_input[3].value, form_input[4].value);
	if (validation.email && validation.password && validation.verify){
		form_input.pop();
		console.log(form_input);
		$.post('/users', form_input).done(function(response){
		});
		reset_create();
		$("#createModal").modal('hide');
		location.reload();
	}else{
		if (!validation.email){
			render_error('email');
		}
		if (!validation.password){
			render_error('password');
		}
		if (!validation.verify){
			render_error('verify');
		}
	}
});