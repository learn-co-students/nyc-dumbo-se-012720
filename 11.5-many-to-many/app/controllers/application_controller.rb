require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get '/passengers/:id' do
    @passenger = Passenger.find(params[:id])
    erb :show
  end


end
