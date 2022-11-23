class BoardgamesController < ApplicationController
    def show
        game = Boardgame.find_by(name: params[:id])
    
        render json: game, status: :accepted
    end

    def create 
        test = Boardgame.find_by(name: params[:name])
        if test 
            render json: test, status: :ok
        else
            game = Boardgame.create!(game_params)
            render json: game, status: :created
        end
    end
     private 
     def game_params
        params.permit(:name, :price, :min_players, :max_players, :min_playtime, :description, :image_url)
     end
end
