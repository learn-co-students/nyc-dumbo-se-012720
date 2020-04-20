class ChipsController < ApplicationController

  def index
    @chips = Chip.all
    render json: @chips
  end

  def create
    @chip = Chip.create(params.permit(:name, :brand))
    render json: @chip
  end

end
