class MarketplaceItem < ApplicationRecord
  belongs_to :user
  belongs_to :boardgame

  validates :title, presence: true
  validates :condition, presence: true
end
