class Exercise < ApplicationRecord
    belongs_to :muscle_group

    has_many :workouts_exercises
    has_many :workouts, through: :workouts_exercises
end
