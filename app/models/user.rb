class User < ApplicationRecord
    has_secure_password
    has_one :wishlist
    has_many :boardgames, through: :wishlist

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :email, presence: true
    
end
