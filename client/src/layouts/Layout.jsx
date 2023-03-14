import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Container, useColorModeValue } from '@chakra-ui/react';



export default function Layout() {

  // const lightBgImage = 'url(/background2.jpg)!important'
  // const darkBgImage = 'url(/background.jpg)!important'

  return (
    <Container
      mt="150px"
      py="150px"
      maxWidth="container.xl"
      borderRadius="15"
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      // bgImage={useColorModeValue(lightBgImage, darkBgImage)}
    >
      <NavBar />
      <Outlet />
    </Container>
  );
}