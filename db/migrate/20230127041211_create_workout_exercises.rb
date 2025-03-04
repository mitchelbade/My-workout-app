class CreateWorkoutExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_exercises do |t|
      t.belongs_to :workout, null: false, foreign_key: true
      t.belongs_to :exercise, null: false, foreign_key: true
      t.integer :sets
      t.integer :reps
      t.integer :weight

      t.timestamps
    end
  end
end
