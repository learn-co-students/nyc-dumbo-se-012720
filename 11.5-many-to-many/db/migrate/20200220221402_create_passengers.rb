class CreatePassengers < ActiveRecord::Migration
  def change

    create_table :passengers do |t|
      t.string :name
    end
    
  end
end
