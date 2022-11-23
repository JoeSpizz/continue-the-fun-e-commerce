class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :boardgame_id
  has_one :user_id
  has_one :boardgame_id
end
