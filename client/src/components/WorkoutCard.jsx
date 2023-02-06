import { 
  Card, 
  CardBody, 
  CardHeader, 
  Heading, 
  SimpleGrid,
  Text,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import {
  AddIcon,
} from '@chakra-ui/icons'
import { useState } from 'react';
import CreateWorkoutForm from './CreateWorkoutForm';

export default function WorkoutCard({ workout }) {
  const [show, setShow] = useState(true)

  return (
    <div>
    {show ? (
    <SimpleGrid 
      spacing={2}
      templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
      mx='auto'
    >
      <IconButton 
      aria-label='Add Workout'
      icon={<AddIcon />}
      onClick={() => setShow(false)}
      />
      <Card
      onClick={() => console.log('clicked')}
      _light={{
        bg: 'gray',
        color: 'black',
        opacity: ".75",
      }}
      _dark={{
        bg: 'gray',
        color: 'black',
        opacity: ".5",
      }}
      >
        <CardHeader>
          <Heading size='lg'>
            { workout?.name }
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            { workout?.description }
          </Text>
            { workout?.exercises.map((exercise) => 
            <Stack>
            <Heading size='md'>{exercise.name}</Heading>
            <Text>Sets: {exercise.sets}</Text>
            <Text>Reps: {exercise.reps}</Text>
            <Text>Weight: {exercise.weight}</Text>
            </Stack>
            ) }
        </CardBody>
      </Card>
    </SimpleGrid> ) : (<CreateWorkoutForm setShow={setShow} />)}
    </div>
  )
}