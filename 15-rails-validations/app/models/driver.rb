class Driver < ApplicationRecord

  validate :points_cannot_be_same_as_number_of_letters_in_name

  validates :name, presence: true
  # validates_presence_of :name
  validates :points, numericality: { 
    only_integer: true,
    greater_than_or_equal_to: 0,
    less_than_or_equal_to: 11 
  }, presence: true

  def defensive_driving_class!
    self.points -= 5
  end


  def points_cannot_be_same_as_number_of_letters_in_name
    if points == name.length
      errors.add(:points, "can't be the same as the number of letters in your name")
    end
  end

end
