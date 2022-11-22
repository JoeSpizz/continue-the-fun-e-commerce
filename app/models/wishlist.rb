class Wishlist < ApplicationRecord
  belongs_to :user
  belongs_to :boardgame

  validates :boardgame_id, uniqueness: true
end
