class OrderSerializer < ActiveModel::Serializer
  attributes :id, :nice_timestamp
  has_many :burger_orders
end
