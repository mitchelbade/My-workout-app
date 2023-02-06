import { useContext } from "react"
import ExerciseCard from "../components/ExerciseCard"
import { ExerciseContext } from "../context/exerciseContext"



export default function Exercises() {
  const { exercises } = useContext(ExerciseContext)

  const exerciseCard = exercises?.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)

  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem',
    }}
    >
      { exerciseCard }
    </div>
  )
}
