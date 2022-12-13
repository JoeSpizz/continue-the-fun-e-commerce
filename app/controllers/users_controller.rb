class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        UserMailer.with(user: user).welcome_email.deliver_now
        render json: user, status: :created
    end

    def show 
        user = @current_user 
        render json: user, status: :ok 
    end

    def update 
        user = @current_user
        byebug
        user.update!(username: params[:username], address: params[:street], zipcode: params[:zipcode], email: params[:email])
        user.save
        render json: user, status: :accepted
    end

    private 
    def user_params
        params.permit(:user, :username, :password, :password_confirmation, :email, :address, :zipcode)
    end

end
