class Animal < ApplicationRecord
  belongs_to :species

  validates :name, presence: true

  def species_name
    self.species.name
  end
end
