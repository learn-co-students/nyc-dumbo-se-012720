class OrdersController < ApplicationController
  before_action :authorized, only: [:create]


  def create
    the_newly_created_order = @user.orders.create

    params[:burger_ids].each do |burg_id|
      BurgerOrder.create(burger_id: burg_id, order: the_newly_created_order)
    end

    render json: the_newly_created_order

  end

end
