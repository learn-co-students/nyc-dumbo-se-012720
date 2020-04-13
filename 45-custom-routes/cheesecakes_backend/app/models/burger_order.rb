class BurgerOrder < ApplicationRecord
  belongs_to :order
  belongs_to :burger
end
