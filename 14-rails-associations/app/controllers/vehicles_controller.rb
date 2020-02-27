class VehiclesController < ApplicationController

  before_action :get_vehicle_by_id, only: [:show, :edit, :update]

  def index
    @vehicles = Vehicle.all
  end

  def show
    @drivers = Driver.all
    @vehicles = Vehicle.all
    @vehicle_driver = VehicleDriver.new
    # byebug
    # @vehicle_drivers = VehicleDriver.where(vehicle_id: @vehicle.id)
  end 

  def new
    @colors = [ "Red", "Blue", "Carbon Black"]
    @vehicle = Vehicle.new
  end

  def create
    vehicle = Vehicle.create(vehicle_params)
    redirect_to vehicle
  end

  def edit
    @colors = [ "Red", "Blue", "Carbon Black"]
  end

  def update
    @vehicle.update(vehicle_params)
    redirect_to @vehicle
  end

  private 

  def vehicle_params
    params.require(:vehicle).permit(:color, :make, :model)
  end

  def get_vehicle_by_id
    @vehicle = Vehicle.find(params[:id])
  end

end
