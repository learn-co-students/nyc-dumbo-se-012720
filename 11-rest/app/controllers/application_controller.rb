require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    redirect to "/vehicles"
  end


  get "/vehicles" do
    @vehicles = Vehicle.all
    erb :index
  end
  # def read_all # GET /view-vehicles
  #   @vehicles = Vehicle.all
  # end

  get "/vehicles/new" do
    erb :new # render the erb for the form
  end

  # def create 
  #   @vehicle = Vehicle.create(make: "", model: "", color: "")
  # end

  post "/vehicles" do
    # binding.pry
    # params = {"make"=>"Hyundai", "model"=>"Elantra", "color"=>"pink"}

    @vehicle = Vehicle.create(params) # mass assignment
    # @vehicle = Vehicle.create(make: params[:make], model: params[:model], color: params[:color])
    redirect to "/vehicles/#{ @vehicle.id }"
  end

  # def create 
  #   @vehicle = Vehicle.create(make: "", model: "", color: "")
  # end


  # def read_all # GET /view-vehicles
  #   @vehicles = Vehicle.all
  # end

  get "/vehicles/:id" do
    @vehicle = Vehicle.find(params[:id])
    erb :show
  end

  # def read_one
  #   @vehicle = Vehicle.find(6)
  #   # @vehicle = Vehicle.find_by(make: "Honda")
  # end

  # def update
  #   # Vehicle.update({ 6 => { :make => "", model: "" } })
  #   @vehicle = Vehicle.find(5)
  #   @vehicle.update(make: "", model: "")
  # end

  # def destroy 
  #   @vehicle = Vehicle.find(7)
  #   @vehicle.destroy
  # end

end
