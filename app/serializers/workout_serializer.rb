class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :workout_exercises
  has_one :user

  def workout_exercises
    object.workout_exercises.map do |workout_exercise|
      {
        id: workout_exercise.id,
        sets: workout_exercise.sets,
        reps: workout_exercise.reps,
        weight: workout_exercise.weight,
        exercise: {
          id: workout_exercise.exercise.id,
          name: workout_exercise.exercise.name
        }
      }
    end
  end

end
