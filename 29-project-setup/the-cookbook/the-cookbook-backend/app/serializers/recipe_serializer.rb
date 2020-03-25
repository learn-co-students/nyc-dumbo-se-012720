class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description
  has_many :ingredients
end

# rails g serializer recipe