class MarketplaceItemSerializer < ActiveModel::Serializer
  attributes :id, :price, :title, :condition, :condition_detail, :available
  has_one :user
  has_one :boardgame
end
