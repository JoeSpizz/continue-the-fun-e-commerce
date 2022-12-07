class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :marketplace_item
  has_many :boardgames, through: :marketplace_item

  validates :marketplace_item_id, uniqueness: true
end
