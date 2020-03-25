class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :diet, :image_url, :description, :donations, :species_name
  # belongs_to :species
end
