class Exercise < ApplicationRecord
    belongs_to :muscle_group

    has_many :workout_exercises
    has_many :workouts, through: :workout_exercises
end
