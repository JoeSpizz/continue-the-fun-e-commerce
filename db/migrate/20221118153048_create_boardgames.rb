class CreateBoardgames < ActiveRecord::Migration[6.1]
  def change
    create_table :boardgames do |t|
      t.string :name
      t.string :image
      t.integer :price
      t.string :description
      t.integer :num_of_players
      t.integer :game_length

      t.timestamps
    end
  end
end
