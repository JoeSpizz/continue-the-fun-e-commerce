class AddSellerToMarketplaceItems < ActiveRecord::Migration[6.1]
  def change
    add_column :marketplace_items, :seller, :string
  end
end
