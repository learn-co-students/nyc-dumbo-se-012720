class AddWeightToSpices < ActiveRecord::Migration[5.2]
  def change
    add_column :spices, :weight_per_ounce, :integer
  end
end
