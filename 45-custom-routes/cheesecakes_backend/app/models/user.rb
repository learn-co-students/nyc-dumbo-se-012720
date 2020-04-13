class User < ApplicationRecord
  validates :username, uniqueness: true
  
  has_many :orders
  has_secure_password


end
