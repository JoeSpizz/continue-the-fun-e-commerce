class MarketplaceItemsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index 
        items = MarketplaceItem.all.where(available: true)
        render json: items, status: :ok
    end
    def all
        items = MarketplaceItem.all.where(user_id: session[:user_id])
        render json: items, status: :ok
    end
    def create 
        user=@current_user
        item = MarketplaceItem.create!(title: params[:title], price: params[:price], user_id: session[:user_id], boardgame_id: params[:boardgame_id], condition: params[:condition], condition_detail: params[:condition_detail], available: true, image_url: params[:image], seller: user.username)
        render json: user, status: :created
    end

    def show
        item = MarketplaceItem.find_by(id: params[:id])
        render json: item, status: :ok
    end

    def update
        item = MarketplaceItem.find_by(id: params[:id])
        item.update(title: params[:title], price: params[:price], condition: params[:condition], condition_detail: params[:condition_detail])
        item.save
        render json: item, status: :accepted
    end
    def destroy
        item = MarketplaceItem.find_by(id: params[:id])
        item.destroy
        head :no_content
    end

private
def market_params
    params.permit(:title, :price, :user_id, :boardgame_id, :condition, :condition_detail, :available, :marketplace_item, :image_url, :seller)
end

end