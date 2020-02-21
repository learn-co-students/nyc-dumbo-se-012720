class Passenger < ActiveRecord::Base

  has_many :boarding_passes
  has_many :flights, through: :boarding_passes
  
end
