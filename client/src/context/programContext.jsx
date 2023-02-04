import { useState, useEffect, createContext } from 'react';
import { baseURL } from '../Globals';

const ProgramContext = createContext(null);

function ProgramProvider({ children }) {
  const [programs, setProgram] = useState([]);

  useEffect(() => {
    fetch(baseURL + "/programs")
    .then((r) => r.json())
    .then((data) => setProgram(data))
  }, [])

  return (
    <ProgramContext.Provider value={{ programs, setProgram }}>{ children }</ProgramContext.Provider>
  )
}

export { ProgramContext, ProgramProvider };