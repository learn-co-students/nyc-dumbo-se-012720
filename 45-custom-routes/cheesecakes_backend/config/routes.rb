Rails.application.routes.draw do

  resources :burgers, only: [:index]
  post '/orders', to: 'orders#create'
  post '/users/history', to: 'users#history'

  # HTTPVERB "/url", to: 'controllerName#actionName'
  post "/login", to: 'users#login'
  get '/persist', to: 'users#persist'

  resources :users, only: [:show, :create]
end
