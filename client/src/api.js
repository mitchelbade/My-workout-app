import { baseURL, headers } from "./Globals";

export const fetchUser = async () => {
  try {
    const response = await fetch(`${baseURL}/me`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error fetching user: ', error);
    return null;
  }
};

export const fetchExercises = async () => {
  try {
    const response = await fetch(`${baseURL}/exercises`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching exercises: ', error);
    return null;
  }
};

export const fetchWorkouts = async () => {
  try {
    const response = await fetch(`${baseURL}/workouts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching workouts: ', error);
    return null;
  }
}

export const createWorkout = async (newWorkout) => {
  const workoutJson = {
    name: newWorkout.name,
    description: newWorkout.description,
    workout_exercises_attributes: newWorkout.workout_exercises.map(
      (workoutExercise) => ({
      sets: workoutExercise.sets,
      reps: workoutExercise.reps,
      weight: workoutExercise.weight,
      exercise_id: workoutExercise.exercise.id,
    })),
  };
  fetch(`${baseURL}/workouts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(workoutJson),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error creating workout');
      }
    })
    .catch((error) => console.error(error));
};

export const editWorkout = async (id, workoutData) => {
  const workoutJson = {
    name: workoutData.name,
    description: workoutData.description,
    workout_exercises_attributes: workoutData.workout_exercises.map(
      (workoutExercise) => ({
      sets: workoutExercise.sets,
      reps: workoutExercise.reps,
      weight: workoutExercise.weight,
      exercise_id: workoutExercise.exercise.id,
    })),
  };
  fetch(`${baseURL}/workouts/${id}`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(workoutJson),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error editing workout');
      }
    })
    .catch((error) => console.error(error));
};

export const deleteWorkout = async (id) => {
  fetch(`${baseURL}/workouts/${id}`, {
    method: 'DELETE',
    headers: headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.status;
      } else {
        throw new Error('Error deleting workout');
      }
    })
    .catch((error) => console.error(error));
}
