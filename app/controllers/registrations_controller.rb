class RegistrationsController < Devise::RegistrationsController
 
  def create
    build_resource(sign_up_params)
 
    if resource.save
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_navigational_format?
        sign_up(resource_name, resource)
        return render json: {success: true, html_user: (render_to_string 'partials/_active_user'), html_nav: (render_to_string 'partials/_signout_nav'), user: resource}
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_navigational_format?
        expire_session_data_after_sign_in!
        return render json: {success: true, html_user: (render_to_string 'partials/_active_user'), html_nav: (render_to_string 'partials/_signout_nav'), user: resource}
      end
    else
      clean_up_passwords resource
      p "here are all the errors" 
      p resource.errors.messages
      return render json: {success: false, html_error: (render_to_string 'partials/_registration_errors'), errors: resource.errors}
    end
  end
 
  # Signs in a user on sign up. You can overwrite this method in your own
  # RegistrationsController.
  def sign_up(resource_name, resource)
    sign_in(resource_name, resource)
  end
 
end