class CartSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user_id
  has_one :marketplace_item_id
  has_one :boardgames, through: :marketplace_item
end
