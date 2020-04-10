Rails.application.routes.draw do

  # HTTPVERB "/url", to: 'controllerName#actionName'
  post "/login", to: 'users#login'
  resources :users, only: [:show, :create]

end
