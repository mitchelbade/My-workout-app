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
workout2 = Workout.create(name: "Workout 2", user: random_user)

back = MuscleGroup.create(name: "Back")
biceps = MuscleGroup.create(name: "Biceps")
chest = MuscleGroup.create(name: "Chest")
triceps = MuscleGroup.create(name: "Triceps")
shoulders = MuscleGroup.create(name: "Shoulders")
abs = MuscleGroup.create(name: "Abs")
legs = MuscleGroup.create(name: "Legs")

benchpress = Exercise.create(name: "Bench Press", description: "Lay on bench and press weight up", muscle_group: chest, image: "/images/bench.jpg")
squat = Exercise.create(name: "Squat", description: "Stand up and squat", muscle_group: legs, image: "/images/squat.jpg")
deadlift = Exercise.create(name: "Deadlift", description: "Lift weight off the ground", muscle_group: back, image: "/images/deadlift.jpg")
curl = Exercise.create(name: "Curl", description: "Bend your arm", muscle_group: biceps, image: "/images/curl.jpg")
tricep_extension = Exercise.create(name: "Tricep Extension", description: "Extend your arm", muscle_group: triceps, image: "/images/tricep_extension.jpg")
shoulder_press = Exercise.create(name: "Shoulder Press", description: "Press weight up", muscle_group: shoulders, image: "/images/shoulder_press.jpg")
crunch = Exercise.create(name: "Crunch", description: "Crunch your abs", muscle_group: abs, image: "/images/crunch.jpg")

bench_stats = WorkoutExercise.create(workout: workout, exercise: benchpress, sets: 3, reps: 12, weight: 135)
squat_stats = WorkoutExercise.create(workout: workout, exercise: squat, sets: 3, reps: 12, weight: 225)
deadlift_stats = WorkoutExercise.create(workout: workout, exercise: deadlift, sets: 3, reps: 12, weight: 315)
curl_stats = WorkoutExercise.create(workout: workout, exercise: curl, sets: 3, reps: 12, weight: 45)
tricep_extension_stats = WorkoutExercise.create(workout: workout, exercise: tricep_extension, sets: 3, reps: 12, weight: 45)

bench_stats = WorkoutExercise.create(workout: workout2, exercise: benchpress, sets: 3, reps: 12, weight: 135)
squat_stats = WorkoutExercise.create(workout: workout2, exercise: squat, sets: 3, reps: 12, weight: 225)
deadlift_stats = WorkoutExercise.create(workout: workout2, exercise: deadlift, sets: 3, reps: 12, weight: 315)
curl_stats = WorkoutExercise.create(workout: workout2, exercise: curl, sets: 3, reps: 12, weight: 45)
tricep_extension_stats = WorkoutExercise.create(workout: workout2, exercise: tricep_extension, sets: 3, reps: 12, weight: 45)

puts "Done!"