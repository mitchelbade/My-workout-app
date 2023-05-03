class WorkoutsController < ApplicationController

    def index
        workouts = current_user.workouts
        render json: workouts, status: :ok
    end

    def show
        workout = current_user.workouts.find(params[:id])
        render json: workout, status: :ok
    end

    def create
        workout = current_user.workouts.build(workout_params)
        workout.save!
        render json: workout, status: :created
    end

    def update
        workout = current_user.workouts.find(params[:id])
        workout.transaction do
            workout.workout_exercises.each do |workout_exercise|
                if !workout_params[:workout_exercises_attributes].any? { |we| we[:id] == workout_exercise.id }
                    workout_exercise.destroy!
                end
            end
            workout.update!(workout_params)
        end
        render json: workout, status: :ok
    end

    def destroy
        workout = current_user.workouts.find(params[:id])
        workout.destroy
        head :no_content
    end

    private

    def workout_params
        params.require(:workout).permit(:name, :description, workout_exercises_attributes: [:id, :sets, :reps, :weight, :exercise_id])
    end

end