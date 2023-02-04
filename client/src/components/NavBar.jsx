import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
    useColorMode,
    Heading,
    Flex,
    Box,
    Button,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { UserContext } from '../context/userContext';
import { baseURL } from '../Globals';

export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const { toggleColorMode } = useColorMode();
  const [display, setDisplay] = useState('none');



  function handleLogoutClick() {
    fetch(baseURL + "/logout", {
      method: "DELETE"
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Flex>
      <Flex
        pos="fixed"
        top="1rem"
        left="1rem"
        align="center"
        my={5}
      >
        <Heading>Lite Builder</Heading>
      </Flex>
      <Flex
        pos="fixed"
        top="1rem"
        right="1rem"
        align="center"
        gap="20px"
      >
        <Flex
          display={['none', 'none', 'flex', 'flex']}
        >
          <NavLink to="/">
            <Button
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </NavLink>
          {!user ? (
          <NavLink to="/login">
            <Button
              variant="ghost"
              aria-label="Login"
              my={5}
              w="100%"
            >
              Login
            </Button>
          </NavLink>) : null}
          {!user ? (
          <NavLink to="/create">
            <Button
              variant="ghost"
              aria-label="Create Account"
              my={5}
              w="100%"
            >
              Create Account
            </Button>
          </NavLink>) : null}
          {user ? (
          <NavLink to="/workouts">
            <Button
              variant="ghost"
              aria-label="Workouts"
              my={5}
              w="100%"
            >
              Workouts
            </Button>
          </NavLink> ) : null}
          {user ? (
          <NavLink to="/exercises">
            <Button
              variant="ghost"
              aria-label="Exercises"
              my={5}
              w="100%"
            >
              Exercises
            </Button>
          </NavLink> ) : null}
          {user ? (
          <NavLink to="/logout">
            <Button
              variant="ghost"
              aria-label="Logout"
              my={5}
              w="100%"
              onClick={handleLogoutClick}
            >
              Logout
            </Button>
          </NavLink> ) : null}
        </Flex>

        <Box>{user?.username?.charAt(0)?.toUpperCase()}</Box>

        <IconButton 
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => setDisplay('flex')}
        />

        <IconButton 
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'yellow')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
      </Flex>

      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end" >
          <IconButton 
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setDisplay('none')}
          />
        </Flex>
        <Flex
          flexDir="column"
          align="center"
        >
        <NavLink to="/">
            <Button
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              onClick={() => setDisplay('none')}
            >
              Home
            </Button>
          </NavLink>
          {!user ? (
          <NavLink to="/login">
            <Button
              variant="ghost"
              aria-label="Login"
              my={5}
              w="100%"
              onClick={() => setDisplay('none')}
            >
              Login
            </Button>
          </NavLink>) : null}
          {!user ? (
          <NavLink to="/create">
            <Button
              variant="ghost"
              aria-label="Create Account"
              my={5}
              w="100%"
              onClick={() => setDisplay('none')}
            >
              Create Account
            </Button>
          </NavLink>) : null}
          {user ? (
          <NavLink to="/workouts">
            <Button
              variant="ghost"
              aria-label="Workouts"
              my={5}
              w="100%"
              onClick={() => setDisplay('none')}
            >
              Workouts
            </Button>
          </NavLink> ) : null}
          {user ? (
          <NavLink to="/logout">
            <Button
              variant="ghost"
              aria-label="Logout"
              my={5}
              w="100%"
              onClick={() => {
                setDisplay('none');
                handleLogoutClick();
              }}
            >
              Logout
            </Button>
          </NavLink> ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
}