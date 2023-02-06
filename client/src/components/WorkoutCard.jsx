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

export default function WorkoutCard({ workout }) {

  console.log(workout)

  return (
    <SimpleGrid 
    spacing={6} 
    templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
      <IconButton 
      aria-label='Add Workout'
      icon={<AddIcon />}
      />
      <Card
      
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
    </SimpleGrid>
  )
}