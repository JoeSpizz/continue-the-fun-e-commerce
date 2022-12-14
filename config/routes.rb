Rails.application.routes.draw do
  
  resources :carts
  resources :marketplace_items
  resources :wishlists
  resources :boardgames,
    format: false,
  defaults: {format: 'html'},
  constraints: {files: /.*/}
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/offer/:id', to: "boardgames#show"
  get '/sell/:id', to: "boardgames#show"
  get '/mylistings', to: "marketplace_items#all"
  get '/purchase', to: "carts#wipe"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
