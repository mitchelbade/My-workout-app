class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :description
      t.belongs_to :muscle_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end