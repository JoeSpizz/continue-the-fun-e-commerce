class WishlistsController < ApplicationController
    def index
        user=@current_user
        list = user.boardgames
        render json: list, status: :ok
    end
    def create 
        user = @current_user 
        # byebug
        test = Boardgame.find_by(name: params[:name])
        if test
         item = Wishlist.create!(user_id: session[:user_id], boardgame_id: test.id)
         render json: test, status: :created
        else
        game=Boardgame.create!(game_params)
        item = Wishlist.create!(user_id: session[:user_id], boardgame_id: game.id)
        render json: game, status: :created
        end
    end

    def destroy 
        item = Wishlist.find_by(boardgame_id: params[:id])
        item.destroy
        head :no_content
    end

     private 
     def game_params
        params.permit(:name, :price, :min_players, :max_players, :min_playtime, :description, :image_url)
     end
    


end
