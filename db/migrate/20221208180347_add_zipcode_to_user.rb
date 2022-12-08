class AddZipcodeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :zipcode, :integer
  end
end
