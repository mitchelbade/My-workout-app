import { useState, useEffect, createContext } from 'react';
import { baseURL } from '../Globals';

const ExerciseContext = createContext(null);

function ExerciseProvider({ children }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(baseURL + "/exercises")
    .then((r) => r.json())
    .then(setExercises)
  }, [])

  return (
    <ExerciseContext.Provider value={{ exercises, setExercises }}>{ children }</ExerciseContext.Provider>
  )
}

export { ExerciseContext, ExerciseProvider };