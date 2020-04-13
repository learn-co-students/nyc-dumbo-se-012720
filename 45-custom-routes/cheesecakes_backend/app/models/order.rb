class Order < ApplicationRecord
  belongs_to :user

  has_many :burger_orders
  has_many :burgers, through: :burger_orders

  def nice_timestamp
    self.created_at.strftime("Ordered at%l:%M %p")
  end

end
