import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateUser from './components/CreateUserForm';
import Workouts from './pages/Workouts';
import Exercises from './pages/Exercises';
import { UserProvider } from './context/userContext';
import { WorkoutProvider } from "./context/workoutContext";
import { ExerciseProvider } from "./context/exerciseContext";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Login />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/exercises" element={<Exercises />} />
    </Route>
  )
);

export default function App() {
  return (
    <UserProvider>
      <WorkoutProvider>
        <ExerciseProvider>
          <RouterProvider router={router} />
        </ExerciseProvider>
      </WorkoutProvider>
    </UserProvider>
  );
}