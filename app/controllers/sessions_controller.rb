class SessionsController < Devise::SessionsController

  # POST /resource/sign_in
  def create
    resource = warden.authenticate!(scope: resource_name, recall: "#{controller_path}#failure")
	  set_flash_message(:notice, :signed_in) if is_navigational_format?
    sign_in(resource_name, resource)
	  return render json: {success: true, html_user: (render_to_string 'partials/_active_user'), html_nav: (render_to_string 'partials/_signout_nav'), user: resource}
  end

  def failure
  	errors = { try_again: ['username, email, or password could be incorrect']}
    return render json: { success: false, html_error: (render_to_string 'partials/_registration_errors'), errors: errors }
  end
end