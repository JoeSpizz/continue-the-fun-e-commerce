class BoardgamesController < ApplicationController
    def show
        game = Boardgame.find_by(name: params[:id])
        render json: game, status: :ok
    end
end
