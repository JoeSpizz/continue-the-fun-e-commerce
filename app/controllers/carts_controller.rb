class CartsController < ApplicationController
    def index 
        user = @current_user 
        cart = user.carts
        render json: cart, status: :ok
    end

    def create 
        item = Cart.create!(user_id: session[:user_id], marketplace_item_id: params[:marketplace_item_id])
        update = MarketplaceItem.find_by(id: params[:marketplace_item_id])
        update.available=false
        update.save
        render json: item, status: :created
    end
end
