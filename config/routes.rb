Rails.application.routes.draw do
  
  resources :wishlists
  resources :boardgames
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
