import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Container } from '@chakra-ui/react';



export default function Layout() {
  return (
    <Container
      mt="150px"
      py="150px"
      maxWidth="container.xl"
      borderRadius="15"
      _dark={{
        bg: 'gray',
        color: 'white',
      }}
    >
      <NavBar />
      <Outlet />
    </Container>
  );
}