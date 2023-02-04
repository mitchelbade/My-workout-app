class MuscleGroupsController < ApplicationController

  def index
    render json: MuscleGroup.all
  end

end
