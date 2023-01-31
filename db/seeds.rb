WorkoutExercise.destroy_all
MuscleGroup.destroy_all
Exercise.destroy_all
ProgramWorkout.destroy_all
Program.destroy_all
Workout.destroy_all
User.destroy_all


puts "Creating test data..."


random_user = User.create(username: "random", password: "password")
random_user2 = User.create(username: "random2", password: "password")

workout = Workout.create(name: "Workout 1", user: random_user)
workout2 = Workout.create(name: "Workout 2", user: random_user2)

muscle_group = MuscleGroup.create(name: "Chest")
muscle_group2 = MuscleGroup.create(name: "Legs")

exercise = Exercise.create(name: "Bench Press", description: "Lay on bench and press weight up", muscle_group: muscle_group)
exercise2 = Exercise.create(name: "Squat", description: "Stand up and squat", muscle_group: muscle_group2)

workouts_exercise = WorkoutExercise.create(workout: workout, exercise_id: exercise.id, sets: 3, reps: 12, weight: 135)
workouts_exercise2 = WorkoutExercise.create(workout: workout, exercise_id: exercise2.id, sets: 3, reps: 12, weight: 225)

program = Program.create(name: "Program 1", user: random_user)
program2 = Program.create(name: "Program 2", user: random_user)

program_workout = ProgramWorkout.create(program: program, workout: workout)
program_workout2 = ProgramWorkout.create(program: program, workout: workout2)


puts "Done!"