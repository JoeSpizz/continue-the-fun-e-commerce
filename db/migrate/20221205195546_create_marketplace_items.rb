class CreateMarketplaceItems < ActiveRecord::Migration[6.1]
  def change
    create_table :marketplace_items do |t|
      t.belongs_to :user
      t.belongs_to :boardgame
      t.integer :price
      t.string :title
      t.string :condition
      t.string :condition_detail
      t.boolean :available

      t.timestamps
    end
  end
end
