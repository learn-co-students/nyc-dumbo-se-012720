Rails.application.routes.draw do
  resources :drivers, only: [:index, :show, :new, :create, :edit, :update]
  resources :vehicle_drivers, only: [:new, :create]
  resources :vehicles, only: [:index, :show, :new, :create, :edit, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
