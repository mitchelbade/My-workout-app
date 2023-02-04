class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :muscle_group, :image
end
