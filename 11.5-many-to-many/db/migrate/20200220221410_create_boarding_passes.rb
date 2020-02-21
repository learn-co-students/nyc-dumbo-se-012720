class CreateBoardingPasses < ActiveRecord::Migration

  def change
    create_table :boarding_passes do |t|
      t.integer :passenger_id
      t.integer :flight_id
      t.string :seat
    end
  end

end
