class CreateChips < ActiveRecord::Migration[6.0]
  def change
    create_table :chips do |t|
      t.string :name
      t.string :brand

      t.timestamps
    end
  end
end
