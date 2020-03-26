class VotesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @votes = Vote.where(user_id: @logged_in_user_id)
  end

  def create 
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: @logged_in_user_id)
    else
      flash[:notification] = "You don't have any votes left 🙅‍♀️"
    end
    redirect_to colors_path
  end

  def destroy
    @vote = Vote.find(params[:id])
    if authorized?(@vote.user_id)
      @vote.destroy
      flash[:notification] = "Vote early and often!"
      redirect_to votes_path
    else
      render "🖕"
    end
  end

end

