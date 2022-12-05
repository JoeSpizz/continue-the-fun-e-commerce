class MarketplaceItemsController < ApplicationController

    def create 
        user = @current_user
        item = MarketplaceItem.create!(market_params)
        byebug
        render json: item, status: :created
    end

private
def market_params
    params.permit(title:, price:, user_id:, boardgame_id:, condition:, condition_detail:, available:, )
end
