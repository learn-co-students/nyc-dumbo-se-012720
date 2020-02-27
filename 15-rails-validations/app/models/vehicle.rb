class Vehicle < ApplicationRecord

  def description
    [ self.color, self.make, self.model ].join(" • ")
  end

  has_many :vehicle_drivers
  has_many :drivers, through: :vehicle_drivers
    
end
