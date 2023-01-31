class WorkoutExerciseSerializer < ActiveModel::Serializer
  attributes :id, :sets, :reps, :weight
  has_one :workout
  has_one :exercise
end
