class DriversController < ApplicationController

  before_action :get_driver_by_id, only: [:show, :edit, :update]

  def index
    @drivers = Driver.all
  end

  # def show
  # end

  def new
    @driver = Driver.new
  end

  def create
    @driver = Driver.new(driver_params)
    if @driver.save
      redirect_to driver_path(@driver)
    else
      render :new
    end
  end

  # def edit
  # end

  def update
    if @driver.update(driver_params)
      redirect_to driver_path(@driver)
    else
      render :edit
    end
  end

  private

  def get_driver_by_id
    @driver = Driver.find(params[:id])
  end

  def driver_params
    params.require(:driver).permit(:name, :points)
  end

end
