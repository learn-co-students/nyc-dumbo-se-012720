class Game < ActiveRecord::Base
  has_many :reviews
  has_many :players, through: :reviews

  # def reviews
  #   Review.all.select do |review_inst|
  #     review_inst.game_id == self.id
  #   end
  # end

  # def players
  #   reviews.map do |review_inst|
  #     review_inst.player
  #   end
  # end

end