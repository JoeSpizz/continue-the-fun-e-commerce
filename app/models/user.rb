class User < ApplicationRecord
    has_secure_password
    # has_many :boardgames through: :

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :email, presence: true
    
end
