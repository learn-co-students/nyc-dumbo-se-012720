class VehicleDriversController < ApplicationController

  def new
    @drivers = Driver.all
    @vehicles = Vehicle.all
    @vehicle_driver = VehicleDriver.new
  end

  def create
    @vehicle_driver = VehicleDriver.create(vehicle_driver_params)
    redirect_to @vehicle_driver.vehicle
  end

  private

  def vehicle_driver_params
    params.require(:vehicle_driver).permit(:vehicle_id, :driver_id)
  end

end

