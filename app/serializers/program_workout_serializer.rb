class ProgramWorkoutSerializer < ActiveModel::Serializer
  attributes :id
  has_one :program
  has_one :workout
end
