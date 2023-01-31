class Workout < ApplicationRecord
  belongs_to :user

  has_many :workouts_exercises
  has_many :exercises, through: :workouts_exercises

  validates :name, presence: true, uniqueness: true
end
