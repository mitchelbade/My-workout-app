class CreateProgramWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :program_workouts do |t|
      t.belongs_to :program, null: false, foreign_key: true
      t.belongs_to :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
