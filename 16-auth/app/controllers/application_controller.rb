class ApplicationController < ActionController::Base

  before_action :set_up_auth_stuff
  before_action :authenticate!

  private

  def set_up_auth_stuff
    @logged_in_user_id = session[:user_id]
    @logged_in = !!@logged_in_user_id

    @notification = flash[:notification]
    @errors = flash[:errors]
    
    if @logged_in
      @logged_in_user = User.find(@logged_in_user_id) 
      @can_vote = @logged_in_user.can_vote
    end
  end

  def authenticate!
    unless @logged_in
      flash[:errors] = [ "You must log in to do that" ]
      redirect_to new_login_path
    end
  end

  def authorized?(user_id)
    user_id == @logged_in_user_id
  end

end