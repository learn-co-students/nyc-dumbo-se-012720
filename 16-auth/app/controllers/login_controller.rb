class LoginController < ApplicationController

  skip_before_action :authenticate!

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password]) # right person
      session[:user_id] = user.id
      redirect_to colors_path
    else
      flash[:errors] = ["Username or password did not match"]
      redirect_to new_login_path
    end
  end

  def destroy
    
    session[:user_id] = nil
    flash[:notification] = "You have been logged tf out"
    redirect_to new_login_path
  end


end
