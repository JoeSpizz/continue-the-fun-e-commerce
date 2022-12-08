class CartSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user, through: :marketplace_items, source: :user
  has_one :marketplace_item
end
