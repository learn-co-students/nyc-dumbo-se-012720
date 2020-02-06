class CreateSpices < ActiveRecord::Migration[5.2]
  def change
    create_table :spices do |t|
      t.string :name
      t.integer :spiciness
      t.integer :price
      t.timestamps
    end
  end
end
