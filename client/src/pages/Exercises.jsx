import ExerciseCard from "../components/ExerciseCard"
import { useState, useEffect } from "react"
import { baseURL } from "../Globals"


export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(baseURL + "/exercises")
    .then((r) => r.json())
    .then(setExercises)
  }, [])

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