class UserChipSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :chip
end
