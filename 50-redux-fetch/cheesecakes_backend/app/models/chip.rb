class Chip < ApplicationRecord
  has_many :user_chips
  has_many :users, through: :user_chips
end
