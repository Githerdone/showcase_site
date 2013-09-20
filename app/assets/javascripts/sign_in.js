// $(document).ready(function() {
 
//  $('#sign_inLink').on('click', function(){
//     $('.button_submit').attr('disabled','disabled')
// 		$('.button_submit').addClass('no_submit')
// 		$('.button_submit').text('Not ready to Submit')
// 		$("#signinModal").modal('show');
// 		signin_form = new Form('signin'); 
//   });

// function signin_form_validation(){
// 	$('input').keyup(function(){

// 		var element = $(this).data('label');
// 		var value = $(this).val();

// 		if(validate_signin_input(element, value)){
// 			$(this).attr('class', 'input_correct');   
// 		}else{
// 			$(this).attr('class', 'input_incorrect');
// 		}

// 		var $inputs = $('#sign_in_user :input').not(':button,:hidden');
// 		var values = {}
// 		console.log($inputs)
// 		$inputs.each(function(){
// 			values[$(this).data('label')] = $(this).val();
// 		});
// 		if(validate_form(signin_form, values)){
// 			$('.button_submit').removeAttr('disabled');
// 			$('.button_submit').removeClass('no_submit').addClass('ready_submit');
// 			$('.button_submit').text('Ready to Submit');
// 		}else{
// 			$('.button_submit').attr('disabled','disabled');
// 			$('.button_submit').addClass('no_submit');
// 			$('.button_submit').text('Not ready to Submit');
// 		}
// 	});

// 	$('#signinModal').on('ajax:success', function(e, data, status, xhr) {
//     console.log(data)
//     console.log(status)
//     console.log(xhr)
// 		$('#signinModal').modal('hide');
// 	});
// });

// function validate_signin_input(element, input){
//   console.log(element)
//   console.log(input)
// 	if(element == 'Login'){
// 		return login_validate(input);
// 	}else if(element == 'Password'){
// 		return email_validate(input)
// 	}else{
// 		return false
// 	}
// }

// function validate_form(form, values){
// 	// var valid = []
// 	// var form_validated = []
// 	// valid.push(form.Username.test(values.Username));
// 	// valid.push(form.Email.test(values.Email));
// 	// valid.push(form.Password.test(values.Password));
// 	// for (var i = 0; i < valid.length; i++) {
// 	// 	if(valid[i] == true){
// 	// 		form_validated.push(valid[i])
// 	// 	}
// 	// }
// 	// if(form_validated.length == 5){
// 	// 	return true
// 	// }else{
// 	// 	return false
// 	// }
// }

// function Form(){
// 	this.Username = new RegExp(/^[a-z_]{4,}/i);
// 	this.Email = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
// 	this.Password = new RegExp(/^(?=.*[^a-zA-Z])(?=.*[a-z])(?=.*[A-Z])\S{8,}$/i);
// 	this.Confirmation = new RegExp(/^(?=.*[^a-zA-Z])(?=.*[a-z])(?=.*[A-Z])\S{8,}$/i);
// }

// function login_validate(input){
//   if(signin_form.Username.test(input) || signin_form.Email.test(input)){
//   	return true
//   }else{
//   	return false
//   }
// }

// function email_validate(input){
// 	signin_form.Email.test(input)
// }

// function passwords_match(password, confirmation){
// 	if($(password).val() == $(confirmation).val() && $(confirmation).val().length >= 8 ){
// 		$(confirmation).attr('class', 'input_correct');
// 	}else{
// 		$(confirmation).attr('class', 'input_incorrect');
// 	}
// }












// function validate_input_data(email, password, verify){
// 	var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
// 	var passwordlength = password.length >= 6;
// 	var verify_password = password == verify
// 	return { email: emailRegex.test(email), password: passwordlength, verify: verify_password}
// };

// function render_error(item){
// 	if (item == 'email'){
// 		$("[for=user_email] span").css('color', 'red').text(' - incorrect format');
// 	}
// 	if (item == 'password'){
// 		$("[for=user_password] span").css('color', 'red').text(' - not long enough');
// 	}
// 	if (item == 'verify'){
// 		$("[for=user_password_confirmation] span").css('color', 'red').text(' - does not match');
// 	}
// };

// function reset_create(){
// 	$('#new_user label span').text('');
// 	$("#new_user")[0].reset();
// 	$('#email').focus();
// };


// $('#new_user').on('submit', function(e){
// 	e.preventDefault();

// 	var form_input = $(this).serializeArray();
// 	var validation = validate_input_data(form_input[2].value, form_input[3].value, form_input[4].value);
// 	if (validation.email && validation.password && validation.verify){
// 		form_input.pop();
// 		console.log(form_input);
// 		$.post('/users', form_input).done(function(response){
// 		});
// 		reset_create();
// 		$("#createModal").modal('hide');
// 		location.reload();
// 	}else{
// 		if (!validation.email){
// 			render_error('email');
// 		}
// 		if (!validation.password){
// 			render_error('password');
// 		}
// 		if (!validation.verify){
// 			render_error('verify');
// 		}
// 	}
// });