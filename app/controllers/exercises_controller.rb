class ExercisesController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index
    render json: Exercise.all
  end

  def show
    render json: Exercise.find(params[:id])
  end

  def create
    exercise = Exercise.create(exercise_params)
    render json: exercise, status: :created
  end

  private

  def exercise_params
    params.permit(:name, :description, :muscle_group_id)
  end

end
