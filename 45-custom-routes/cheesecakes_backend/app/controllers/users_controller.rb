class UsersController < ApplicationController
  before_action :authorized, only: [:persist]

  def show
    # Your projects should NOT have a show action
    @user = User.find(params[:id])
    wristband = encode_token({user_id: @user.id})
    render json: {user: UserSerializer.new(@user), token: wristband}
  end

  def persist
    wristband = encode_token({user_id: @user.id})
    render json: {user: UserSerializer.new(@user), token: wristband}
  end


  def create
    @user = User.create(user_params)
    if @user.valid?
      wristband = encode_token({user_id: @user.id})
      render json: {user: UserSerializer.new(@user), token: wristband}, status: 201
    else
      render json: {message: "Invalid username"}
    end
  end


  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      wristband = encode_token({user_id: @user.id})
      render json: {user: UserSerializer.new(@user), token: wristband}
    else
      render json: {message: "Invalid username or password"}
    end
  end


  def history
    the_username = params[:thisIsTheUsername]
    user = User.find_by(username: the_username)
    if user
      render json: { count: user.orders.length }
    else
      render json: { count: -2 }
    end
  end


  private

  def user_params
    params.permit(:username, :password)
  end

end
