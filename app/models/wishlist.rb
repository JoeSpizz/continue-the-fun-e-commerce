class Wishlist < ApplicationRecord
  belongs_to :user
  belongs_to :boardgame
end
