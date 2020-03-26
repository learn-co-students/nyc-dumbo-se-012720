class VotesController < ApplicationController

  def create
    if session["remaining_votes"] > 0
      session["remaining_votes"] = session["remaining_votes"] - 1
      @vote = Vote.create(color_id: params[:color_id])
    else
      flash[:notification] = "You're out of votes 💁‍♀️"
    end
    redirect_to colors_path
  end

end

