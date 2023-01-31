class ProgramWorkout < ApplicationRecord
  belongs_to :program
  belongs_to :workout
end
