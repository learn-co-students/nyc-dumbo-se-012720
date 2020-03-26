class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :measurement
  belongs_to :recipe
end
