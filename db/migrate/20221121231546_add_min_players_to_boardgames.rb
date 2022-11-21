class AddMinPlayersToBoardgames < ActiveRecord::Migration[6.1]
  def change
    add_column :boardgames, :min_players, :integer
    add_column :boardgames, :max_players, :integer
    remove_column :boardgames, :num_of_players, :integer
    remove_column :boardgames, :image, :string
    remove_column :boardgames, :game_length, :integer
    add_column :boardgames, :min_playtime, :integer
    add_column :boardgames, :image_url, :string
    add_column :boardgames, :type, :string
  end
end
