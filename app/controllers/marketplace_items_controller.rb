class MarketplaceItemsController < ApplicationController
    def index 
        items = MarketplaceItem.all
        render json: items, status: :ok
    end
    def create 
        item = MarketplaceItem.create!(title: params[:title], price: params[:price], user_id: session[:user_id], boardgame_id: params[:boardgame_id], condition: params[:condition], condition_detail: params[:condition_detail], available: true)
        render json: item, status: :created
    end

private
def market_params
    params.permit(:title, :price, :user_id, :boardgame_id, :condition, :condition_detail, :available, :marketplace_item)
end

end