class Review < ActiveRecord::Base
  belongs_to :game
  belongs_to :player

  # def game
  #   # find the Game from the games table
  #   # that has the game_id for this review instance
  #   Game.all.find do |game_instance|
  #     self.game_id == game_instance.id
  #   end
  # end

  # belongs to player
  # def player
  #   Player.all.find do |player_instance|
  #     self.player_id == player_instance.id
  #   end
  # end

end