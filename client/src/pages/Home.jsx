import { 
  Heading,
  Text,
  Flex,
  Stack,
  Box,
} from '@chakra-ui/react';



export default function Home() {
  return (
    <Stack>
      <Box
        // variant='ghost'
        // borderRadius='15px'
        // _light={{
        //   bg: 'gray',
        //   color: 'black',
        //   opacity: ".5",
        // }}
        // _dark={{
        //   bg: 'gray',
        //   color: 'black',
        //   opacity: ".5",
        // }}
      >
        <Flex>
          <Heading>"Unleash Your Inner Athlete with the Best Workout Companion"</Heading>
        </Flex>
        <Flex>
          <Text>
          Welcome to the ultimate workout companion! We believe that fitness is a journey, 
          not a destination. Our app is designed to help you achieve your fitness goals, 
          whatever they may be. Whether you want to build muscle, burn fat, 
          or simply maintain a healthy lifestyle, we're here to support you every step of the way. 
          So, gear up, get inspired, and let's start this journey together!
          </Text>
        </Flex>
      </Box>
    </Stack>
  );
}