class WorkoutExercise < ApplicationRecord
  belongs_to :workout
  belongs_to :exercise

  validates :sets, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :reps, presence: true, numericality: { only_integer: true, greater_than: 0 }
end
