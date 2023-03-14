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

  const workoutCard = workouts?.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)

  return (
    <SimpleGrid
    spacing={4}
    templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
    >
      { workoutCard }
    </SimpleGrid>
  )
}