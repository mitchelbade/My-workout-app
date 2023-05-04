import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Container } from '@chakra-ui/react';
import { WorkoutProvider } from '../context/workoutContext';
import { ExerciseProvider } from '../context/exerciseContext';
import { UserProvider } from '../context/userContext';



export default function Layout() {

  return (
    <UserProvider>
      <WorkoutProvider>
        <ExerciseProvider>
          <Container
            mt="150px"
            py="150px"
            maxWidth="container.xl"
            borderRadius="15"
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
          >
            <NavBar />
            <Outlet />
          </Container>
        </ExerciseProvider>
      </WorkoutProvider>
    </UserProvider>
  );
}