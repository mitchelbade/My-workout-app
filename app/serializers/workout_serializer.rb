class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :exercises
  has_one :user

  def exercises
    object.exercises.map do |exercise|
      workout_exercises = object.workout_exercises.find_by(exercise_id: exercise.id)
      {
        id: exercise.id,
        name: exercise.name,
        sets: workout_exercises.sets,
        reps: workout_exercises.reps,
        weight: workout_exercises.weight
      }
    end
  end

end
