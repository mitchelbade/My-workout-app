class WorkoutsController < ApplicationController

    def create
        workout = Workout.create(workout_params)
        render json: workout
    end

    private

    def workout_params
        params.require(:workout).permit(:name, :description)
    end

end
