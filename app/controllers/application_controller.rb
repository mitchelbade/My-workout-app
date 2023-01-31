class ApplicationController < ActionController::API
  include ActionController::Cookies

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user = User.find_by(id: session[:user_id]) if logged_in?
  end

end
