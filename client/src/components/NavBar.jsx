import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [display, setDisplay] = useState('none');

return (
  <Flex>
    <Flex
      pos="fixed"
      top="1rem"
      right="1rem"
      align="center"
    >
    <Flex
      display={['none', 'none', 'flex', 'flex']}
    >
      <NavLink to="/">
        <Button
          as="a"
          variant="ghost"
          aria-labels="Home"
          my={5}
          w="100%"
        >
          Home
        </Button>
      </NavLink>
    </Flex>

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
            as="a"
            variant="ghost"
            aria-labels="Home"
            my={5}
            w="100%"
          >
            Home
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  </Flex>
);
}