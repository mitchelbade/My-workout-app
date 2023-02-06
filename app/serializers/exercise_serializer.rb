class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :muscle_group, :image
  has_many :workout_exercises
  has_many :workouts, through: :workout_exercises
end