class Boardgame < ApplicationRecord
    has_many :wishlists
    has_many :users, through: :wishlists

    validates :name, presence: true
end
