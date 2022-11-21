class BoardgameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :description, :num_of_players, :game_length
end
