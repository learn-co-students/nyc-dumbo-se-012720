class AnimalsController < ApplicationController

  def index
    animals = Animal.all.order(:donations)
    render json: animals
  end

  # def show
  #   @animal = Animal.find_by(id: params[:id])
  #   render json: @animal
  # end

  def create
    # create the species
    species = Species.find_or_create_by(name: params[:species_name])
    animal = Animal.create(name: params[:name],diet: params[:diet],description: params[:description],donations: params[:donations],image_url: params[:image_url],species: species)
    
    if animal.valid?
      render json: animal
    else
      render json: { errors: "Nope, bad data." }, status: 400
    end
  end

  def destroy
    # find the animal using the id
    animal = Animal.find_by(id: params[:id])
    animal.destroy

    render json: { message: "🖕" }
  end

  def update
    # find the animal using the id
    animal = Animal.find_by(id: params[:id])
    # update its attributes
    animal.update(donations: params[:donations])

    # return the response json
    render json: animal
  end

end
