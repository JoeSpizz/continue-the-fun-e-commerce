class UserSerializer < ActiveModel::Serializer
  attributes  :username, :email, :address, :zipcode
end
