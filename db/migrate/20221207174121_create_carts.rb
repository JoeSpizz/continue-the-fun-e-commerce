class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.belongs_to :user
      t.belongs_to :marketplace_item

      t.timestamps
    end
  end
end
