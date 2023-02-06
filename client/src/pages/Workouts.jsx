import { useContext } from "react"
import WorkoutCard from "../components/WorkoutCard"
import { WorkoutContext } from "../context/workoutContext"



export default function Workouts() {
  const { workouts } = useContext(WorkoutContext)

  const workoutCard = workouts?.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)

  console.log(workoutCard)

  return (
    <div>
      { workoutCard }
    </div>
  )
}