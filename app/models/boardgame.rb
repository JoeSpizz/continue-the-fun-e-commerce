class Boardgame < ApplicationRecord
    has_many :wishlists
    has_many :users, through: :wishlists
    has_many :marketplace_items 
    has_many :carts, through: :marketplace_items

    validates :name, presence: true
end
