class ProgramWorkoutsController < ApplicationController

  def index
    render json: ProgramWorkout.all
  end

end
