class CreateCheesecakes < ActiveRecord::Migration[6.0]
  def change
    create_table :cheesecakes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
