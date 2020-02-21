class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :location
      t.integer :founding_year
      t.boolean :wheelchair_accessible
      t.boolean :vegan_options

      t.timestamps
    end
  end
end
