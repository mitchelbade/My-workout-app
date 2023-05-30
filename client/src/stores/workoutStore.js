import { create } from "zustand";
import { fetchWorkouts, createWorkout, deleteWorkout, editWorkout } from "../api";

export const useWorkoutStore = create((set) => ({
  errors: [],
  workouts: [],
  workoutData: {
    name: "",
    description: "",
    workout_exercises: [],
  },
  newWorkout: {
    name: "",
    description: "",
    workout_exercises: [],
  },

  setErrors: (errors) => {
    set((state) => ({ 
      errors: [...state.errors, errors] 
    }));
  },

  setWorkoutData: (prev) => {
    set((state) => ({
      workoutData: {
        ...state.workoutData,
        ...prev,
      },
    }));
  },

  setNewWorkout: (prev) => {
    set((state) => ({
      newWorkout: {
        ...state.newWorkout,
        ...prev,
      },
    }));
  },

  fetchWorkouts: () => {
    fetchWorkouts()
      .then((data) => {
        set({ workouts: data });
      })
      .catch((error) => 
      console.error("Error fetching workouts: ", error));
  },

  createWorkout: (newWorkout) => {
    createWorkout(newWorkout)
      .then( async (r) => {
        const fetchData = async () => {
          const newWorkout = await fetchWorkouts();
          if (newWorkout) {
            if (newWorkout) {
              set({ 
                workouts: newWorkout,
              });
            }
          }
        }
        setTimeout(fetchData, 100);
      })
  },

  editWorkout: (id, workoutData) => {
    editWorkout(id, workoutData)
      .then( async (r) => {
        const fetchData = async () => {
          const workoutData = await fetchWorkouts();
          if (workoutData) {
            if (workoutData) {
              set({
                workouts: workoutData,
              });
            }
          }
        }
        setTimeout(fetchData, 100);
      })
  },

  deleteWorkout: (id) => {
    deleteWorkout(id)
      .then(() => {
        set((state) => ({
          workouts: state.workouts.filter((workout) => workout.id !== id),
        }));
      }
    );
  },
}));
