class MarketplaceItem < ApplicationRecord
  belongs_to :user
  belongs_to :boardgame
  has_one :cart

  validates :title, presence: true
  validates :condition, presence: true
end
