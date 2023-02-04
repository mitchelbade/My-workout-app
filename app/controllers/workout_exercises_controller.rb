class WorkoutExercisesController < ApplicationController

  def index
    render json: WorkoutExercise.all
  end

end
