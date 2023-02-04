import { useState, useEffect, createContext } from 'react';
import { baseURL } from '../Globals';

const UserContext = createContext("");

function UserProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch(baseURL + "/me").then ((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>{ children }</UserContext.Provider>
  )
}

export { UserContext, UserProvider };