class MarketplaceItemsController < ApplicationController
    skip_before_action :authorize
    def index 
        items = MarketplaceItem.all.where(available: true)
        render json: items, status: :ok
    end
    def create 
        user=@current_user
        byebug
        item = MarketplaceItem.create!(title: params[:title], price: params[:price], user_id: session[:user_id], boardgame_id: params[:boardgame_id], condition: params[:condition], condition_detail: params[:condition_detail], available: true, image_url: params[:image], seller: user.username)
        render json: item, status: :created
    end

private
def market_params
    params.permit(:title, :price, :user_id, :boardgame_id, :condition, :condition_detail, :available, :marketplace_item, :image_url, :seller)
end

end