class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :address
end
