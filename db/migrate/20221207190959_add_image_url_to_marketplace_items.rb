class AddImageUrlToMarketplaceItems < ActiveRecord::Migration[6.1]
  def change
    add_column :marketplace_items, :image_url, :string
  end
end
