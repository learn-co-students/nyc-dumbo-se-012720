Rails.application.routes.draw do

  # HTTPVERB "/url", to: 'controllerName#actionName'
  post "/login", to: 'users#login'
  get '/persist', to: 'users#persist'
  resources :users, only: [:show, :create]
  resources :cheesecakes, only: [:create]
end
