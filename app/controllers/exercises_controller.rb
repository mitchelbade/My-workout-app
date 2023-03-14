class ExercisesController < ApplicationController
  skip_before_action :authorize

  def index
    render json: Exercise.all
  end

end
