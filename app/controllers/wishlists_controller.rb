class WishlistsController < ApplicationController
    def index
        user=@current_user
        list = user.boardgames
        render json: list, status: :ok
    end
    def create 
        user = @current_user 
        game=Boardgame.create!(game_params)
        item = Wishlist.create!(user_id: session[:user_id], boardgame_id: game.id)
        render json: game, status: :created
    end

     private 
     def game_params
        params.permit(:name, :price, :min_players, :max_players, :min_playtime, :description, :image_url)
     end
    


end
