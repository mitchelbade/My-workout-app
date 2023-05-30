import { useEffect } from 'react';
import { fetchUser } from '../api';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { useUserStore } from '../stores/userStore';

export default function Layout() {
  const { setUser } = useUserStore();

  useEffect(() => {
    const login = async () => {
      const userData = await fetchUser();
      if (userData) {
        setUser(userData);
      }
    }
    login();
  }, [setUser])


  return (
          <Container
            mt="150px"
            py="150px"
            maxWidth="container.xl"
            borderRadius="15"
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
          >
            <Outlet />
            <NavBar />
          </Container>
  );
}