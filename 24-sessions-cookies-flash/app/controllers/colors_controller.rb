class ColorsController < ApplicationController

  def index
    @notification = flash[:notification]
    session["remaining_votes"] = 5 unless session["remaining_votes"] 
    @remaining_votes = session["remaining_votes"]
    @can_vote = @remaining_votes > 0
    if request.path != colors_path
      redirect_to colors_path
    end
    @colors = Color.includes(:votes).all
  end

  end