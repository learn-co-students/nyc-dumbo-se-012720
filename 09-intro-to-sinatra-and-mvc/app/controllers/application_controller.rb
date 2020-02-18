require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    # "Our Class Website"
    erb :welcome
  end

  get "/students" do 
    @tagline = "Hakuna Matata"
    @students = Student.all
    erb :index
  end 

end
