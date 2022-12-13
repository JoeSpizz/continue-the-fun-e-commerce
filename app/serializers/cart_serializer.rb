class CartSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user, through: :marketplace_items
  has_one :marketplace_item
end
