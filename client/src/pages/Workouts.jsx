import WorkoutCard from "../components/WorkoutCard"
import { useState, useEffect } from "react";
import { baseURL } from "../Globals";
import {
  SimpleGrid
} from "@chakra-ui/react";



export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(baseURL + "/workouts")
    .then((r) => r.json())
    .then(setWorkouts);
  }, []);

  function handleEditWorkout(editWorkout) {
    setWorkouts((workouts) => 
      workouts.map((workout) => workout.id === editWorkout.id ? editWorkout : workout));
  }

  function handleDeleteWorkout(deletedWorkout) {
    setWorkouts((workouts) => workouts.filter((workout) => workout.id !== deletedWorkout.id)
    );
  }

  const workoutCard = workouts?.map((workout) => <WorkoutCard key={workout.id} workout={workout} onDeleteWorkout={handleDeleteWorkout} onEditWorkout={handleEditWorkout} />)

  return (
    <SimpleGrid
    spacing={4}
    templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
    >
      { workoutCard }
    </SimpleGrid>
  )
}