class User < ApplicationRecord
    has_secure_password
    has_one :wishlist
    has_many :boardgames, through: :wishlist
    has_many :carts
    has_many :marketplace_items

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true, on: :create
    validates :email, presence: true
    validates :zipcode, presence: true
    validates :zipcode, numericality: { only_integer: true }
    
end
