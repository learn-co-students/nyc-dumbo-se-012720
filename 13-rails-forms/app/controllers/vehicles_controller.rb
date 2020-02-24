class VehiclesController < ApplicationController

    def edit
        @vehicle = Vehicle.find(params[:id])
        render :💩
    end

    def update
        byebug
    end

end
