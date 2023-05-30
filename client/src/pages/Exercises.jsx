import { useEffect } from "react";
import { fetchExercises } from "../api";
import ExerciseCard from "../components/ExerciseCard"
import { useExerciseStore } from "../stores/exerciseStore";


export default function Exercises() {
  const { exercises, setExercises } = useExerciseStore();

  useEffect(() => {
    const fetchData = async () => {
      const exerciseData = await fetchExercises();
      if (exerciseData) {
        setExercises(exerciseData);
      }
    }
    fetchData();
  }, [setExercises])

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