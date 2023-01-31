class Program < ApplicationRecord
  belongs_to :user

  has_many :program_workouts, dependent: :destroy
  has_many :workouts, through: :programs_workouts
end
