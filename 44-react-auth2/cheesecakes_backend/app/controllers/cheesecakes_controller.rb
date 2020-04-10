class CheesecakesController < ApplicationController

  before_action :authorized, only: [:create]

  def create
    # @cheesecake = Cheesecake.create(user: @user, name: params[:name])
    @cheesecake = @user.cheesecakes.create(cheesecake_params)
    render json: @cheesecake
  end

  def cheesecake_params
    params.permit(:name)
  end

end
