import { 
  Heading,
  Text,
  Flex,
  Stack,
  Card,
} from '@chakra-ui/react';



export default function Home() {
  return (
    <Stack>
      <Card
        alignItems='center'
        variant='ghost'
        borderRadius='10px'
        p={10}
        shadow={'lg'}
        _light={{
          bg: 'gray.100',
          color: 'black',
          opacity: ".75",
        }}
        _dark={{
          bg: 'gray',
          color: 'black',
          opacity: ".5",
        }}
      >
        <Flex>
          <Heading>"Unleash Your Inner Athlete with the Best Workout Companion"</Heading>
        </Flex>
        <Flex>
          <Text
          fontSize={20}
          >
          Welcome to the ultimate workout companion! We believe that fitness is a journey, 
          not a destination. Our app is designed to help you achieve your fitness goals, 
          whatever they may be. Whether you want to build muscle, burn fat, 
          or simply maintain a healthy lifestyle, we're here to support you every step of the way. 
          So, gear up, get inspired, and let's start this journey together!
          </Text>
        </Flex>
      </Card>
    </Stack>
  );
}