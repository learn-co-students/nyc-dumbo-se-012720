class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :player_id
      t.integer :game_id
      t.string :comment
      t.integer :score

      t.timestamps
    end
  end
end
