class User < ApplicationRecord
  validates :username, uniqueness: true

  has_many :user_chips
  has_many :chips, through: :user_chips
  has_secure_password


end
