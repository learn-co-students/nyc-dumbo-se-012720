class UserChip < ApplicationRecord
  belongs_to :user
  belongs_to :chip
end
