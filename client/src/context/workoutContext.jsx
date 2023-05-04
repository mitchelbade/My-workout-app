import { useState, useEffect, createContext } from 'react';
import { baseURL, headers } from '../Globals';
import { UserContext } from './userContext';
import { useContext } from 'react';

const WorkoutContext = createContext(null);

function WorkoutProvider({ children }) {
  const [errors, setErrors] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const { user } = useContext(UserContext);
  const [workoutData, setWorkoutData] = useState({
    name: "",
    description: "",
    workout_exercises: [],
  });
  const [newWorkoutData, setNewWorkoutData] = useState({
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
  }, [user]);

  function handleCreateWorkout() {
    const workoutJson = {
      name: newWorkoutData.name,
      description: newWorkoutData.description,
      workout_exercises_attributes: newWorkoutData.workout_exercises.map((workout_exercise) => ({
        sets: workout_exercise.sets,
        reps: workout_exercise.reps,
        weight: workout_exercise.weight,
        exercise_id: workout_exercise.exercise.id,
        })),
    };
    fetch(baseURL + "/workouts", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(workoutJson),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then ((data) => {
            setWorkouts((workouts) => [...workouts, data]);
      });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleEditWorkout(editedWorkoutId) {
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
    fetch(baseURL + "/workouts/" + editedWorkoutId, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(workoutJson),
    })
      .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setWorkoutData(data)
          setWorkouts((workouts) =>
            workouts.map((workout) => workout.id === editedWorkoutId ? data : workout))
        });
      } else {
      r.json().then((err) => setErrors(err.errors));
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
    <WorkoutContext.Provider value={{ workouts, workoutData, newWorkoutData, errors, setErrors, setWorkouts, setNewWorkoutData, handleCreateWorkout, handleEditWorkout, handleDeleteWorkout, setWorkoutData  }}>{ children }</WorkoutContext.Provider>
  )
}



export { WorkoutContext, WorkoutProvider };