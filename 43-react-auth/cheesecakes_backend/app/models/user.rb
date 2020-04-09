class User < ApplicationRecord
  has_many :cheesecakes
  validates :username, uniqueness: true
  has_secure_password


end
