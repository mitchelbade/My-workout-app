import WorkoutCard from "../components/WorkoutCard"
import { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";
import {
  SimpleGrid,
  Card,
} from "@chakra-ui/react";



export default function Workouts() {
  const { workouts } = useContext(WorkoutContext);

  const workoutCard = workouts?.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)

  return (
    <SimpleGrid
    spacing={4}
    templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
    >
      <Card />
      { workoutCard }
    </SimpleGrid>
  )
}