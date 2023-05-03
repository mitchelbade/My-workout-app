import { useState, useEffect, createContext } from 'react';
import { baseURL, headers } from '../Globals';

const WorkoutContext = createContext(null);

function WorkoutProvider({ children }) {
  const [workouts, setWorkouts] = useState([]);
  const [workoutData, setWorkoutData] = useState({
    name: "",
    description: "",
    workout_exercises: [],
  });

  useEffect(() => {
    fetch(baseURL + "/workouts")
    .then((r) => r.json())
    .then((data) => {
      setWorkouts(data)
    });
  }, []);

  function handleEditWorkout(editedWorkout) {
    const workoutJson = {
      name: workoutData.name,
      description: workoutData.description,
      workout_exercises_attributes: workoutData.workout_exercises.map((workout_exercise) => ({
        id: workout_exercise.id,
        sets: workout_exercise.sets,
        reps: workout_exercise.reps,
        weight: workout_exercise.weight,
        exercise_id: workout_exercise.exercise.id,
        })),
    };
    fetch(baseURL + "/workouts/" + editedWorkout, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(workoutJson),
    })
      .then((r) => {
      if (r.ok) {
        r.json().then(
          setWorkouts((workouts) => 
            workouts.map((workout) => workout.id === editedWorkout ? workoutData : workout))
          )
      }
    });
  }

  function handleDeleteWorkout(deletedWorkout) {
    fetch(baseURL + "/workouts/" + deletedWorkout, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setWorkouts((workouts) => workouts.filter((workout) => workout.id !== deletedWorkout)
        );
      }
    });
  }

  return (
    <WorkoutContext.Provider value={{ workouts, workoutData, handleEditWorkout, handleDeleteWorkout, setWorkoutData  }}>{ children }</WorkoutContext.Provider>
  )
}



export { WorkoutContext, WorkoutProvider };