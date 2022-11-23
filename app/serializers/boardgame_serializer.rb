class BoardgameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :price, :description, :min_players, :max_players, :min_playtime

has_many :wishlists

end
