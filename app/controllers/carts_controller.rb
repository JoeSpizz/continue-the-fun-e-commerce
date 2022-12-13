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

    def destroy 
        item = Cart.find_by(id: params[:id])
        test =item.marketplace_item 
        test.available = true
        test.save
        item.destroy
        head :no_content
    end
    def wipe
        cart = Cart.all.where(user_id: session[:user_id])
        cart.each{|game| game.marketplace_item.available=true}
        cart.each{|game| game.marketplace_item.save}
        cart.destroy_all
        head :no_content
    end
end
