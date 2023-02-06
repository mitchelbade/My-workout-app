class WorkoutExercisesController < ApplicationController

  def index
    render json: WorkoutExercise.all
  end

  def create
    workout_exercise = WorkoutExercise.create!(workout_exercise_params)
    render json: workout_exercise, status: :created
  end

  def update
    workout_exercise = WorkoutExercise.find(params[:id])
    workout_exercise.update!(workout_exercise_params)
    render json: workout_exercise, status: :accepted
  end

  def destroy
    workout_exercise = WorkoutExercise.find(params[:id])
    workout_exercise.destroy
    head :no_content
  end

  private

  def workout_exercise_params
    params.permit(:sets, :reps, :weight)
  end

end
