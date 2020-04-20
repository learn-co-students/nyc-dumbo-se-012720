Rails.application.routes.draw do

  resources :user_chips
  resources :chips
  post '/orders', to: 'orders#create'
  post '/users/history', to: 'users#history'

  # HTTPVERB "/url", to: 'controllerName#actionName'
  post "/login", to: 'users#login'
  get '/persist', to: 'users#persist'

  resources :users, only: [:show, :create]
end
