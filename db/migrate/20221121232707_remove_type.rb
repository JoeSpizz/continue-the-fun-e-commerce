class RemoveType < ActiveRecord::Migration[6.1]
  def change
    remove_column :boardgames, :type, :string
  end
end
