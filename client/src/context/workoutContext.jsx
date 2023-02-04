import { useState, useEffect, createContext } from 'react';
import { baseURL } from '../Globals';

const WorkoutContext = createContext(null);

function WorkoutProvider({ children }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(baseURL + "/workouts")
    .then((r) => r.json())
    .then((data) => setWorkouts(data))
  }, [])

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>{ children }</WorkoutContext.Provider>
  )
}

export { WorkoutContext, WorkoutProvider };