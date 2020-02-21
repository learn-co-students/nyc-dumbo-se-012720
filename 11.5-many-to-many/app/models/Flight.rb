class Flight < ActiveRecord::Base

  has_many :boarding_passes
  has_many :passengers, through: :boarding_passes

end
