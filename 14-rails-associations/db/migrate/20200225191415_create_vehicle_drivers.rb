class CreateVehicleDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :vehicle_drivers do |t|
      t.belongs_to :vehicle, foreign_key: true
      t.belongs_to :driver, foreign_key: true

      t.timestamps
    end
  end
end
