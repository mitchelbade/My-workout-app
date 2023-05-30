import {
    useColorMode,
    Heading,
    Flex,
    Button,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { baseURL } from '../Globals';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useUserStore } from '../stores/userStore';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useWorkoutStore } from '../stores/workoutStore';

export default function NavBar() {
  const { user, setUser } = useUserStore();
  const { setWorkouts } = useWorkoutStore();
  const { toggleColorMode } = useColorMode();
  const [display, setDisplay] = useState('none');

  function handleLogoutClick() {
    fetch(baseURL + "/logout", {
      method: "DELETE"
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        setWorkouts([]);
      }
    });
  }

  return (
    <Flex
      backgroundColor={useColorModeValue('gray.200', 'gray.900')}
      minH={'125px'}
      pos="fixed"
      top="0"
      left="0"
      right="0"
      w="100dvw"
      boxShadow={'0 0 10px 3px rgba(0, 0, 0, 0.2)'}
    >
      <Flex
        pos="fixed"
        top="10px"
        left="10px"
        my={5}
      >
        <Heading
        fontSize={'5xl'}
        >⚡️ Lite Builder</Heading>
      </Flex>
      <Flex
        pos="fixed"
        top="10px"
        right="10px"
        align="center"
        gap="10px"
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

        <IconButton 
          aria-label="Open Menu"
          size="lg"
          mr={2}
          my={5}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => setDisplay('flex')}
        />

        <IconButton 
          aria-label="Toggle theme"
          size="lg"
          mr={2}
          my={5}
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
        _dark={{
          bgColor: 'gray.800'
        }}
      >
        <Flex justify="flex-end" >
          <IconButton 
            mt={3}
            mr={6}
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
          <NavLink to="/exercises">
            <Button
              variant="ghost"
              aria-label="Exercises"
              my={5}
              w="100%"
              onClick={() => setDisplay('none')}
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