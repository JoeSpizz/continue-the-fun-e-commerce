class MarketplaceItemSerializer < ActiveModel::Serializer
  attributes :id, :price, :title, :condition, :condition_detail, :available, :user_id, :boardgame_id, :image_url
  has_one :user
  has_one :boardgame
end
