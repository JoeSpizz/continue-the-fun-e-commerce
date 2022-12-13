class UserMailer < ApplicationMailer
  
    
    def welcome
        @greeting = "Hi"
        mail(to: "to@example.org", subject: @greeting)
      end


    def welcome_email
        @user = params[:user]
        @url = 'http://localhost:4000/'
        mail(to: @user.email, subject: 'Welcome to Continue the Fun')
    end

    def wishlist_item_added 
        @user = params[:user]
        @url = 'http://localhost:4000/'
        @game = params[:game]
        mail(to: @user.email, subject: 'An Item on your wishlist is available!')
    end

end