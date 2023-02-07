import { useState, useContext } from 'react';
import { Form } from 'react-router-dom';
import { baseURL, headers } from '../Globals';
import {
  IconButton,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Stack,
  Text,
  Heading,
  CardHeader,
  CardBody,
  Card,
} from '@chakra-ui/react'
import { CloseIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { ExerciseContext } from '../context/exerciseContext';




export default function CreateWorkoutForm({ setShow }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [workoutExercises, setWorkoutExercises] = useState([])
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [addExercise, setAddExercise] = useState(true)

  const { exercises } = useContext(ExerciseContext)

  return (
      <Flex>
        <IconButton 
          mt={-20}
          mr={50}
          ml={10}
          aria-label="Close Menu"
          size="lg"
          icon={<CloseIcon />}
          onClick={() => setShow(true)}
        />

        {!addExercise ? (
        <IconButton 
          mt={-20}
          aria-label="Back"
          size="lg"
          icon={<ArrowLeftIcon />}
          onClick={() => setAddExercise(true)}
        />) : ( null ) }

        {addExercise ? (
        <Form>
          <FormLabel>Create a workout!</FormLabel>
          <FormControl>
            <Input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Workout Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </FormControl>

          <FormControl>
            <Input
              type="text"
              id="description"
              autoComplete="off"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
          </FormControl>
          <Button
          mt={3}
          type='button'
          onClick={() => setAddExercise(false)}
          >
            Add an exercise
          </Button>
        </Form> ) : (

        <Form>  
          <FormControl>
            <Stack spacing={4}>
              <Select 
              placeholder="Select exercise"
              onChange={(e) => setWorkoutExercises(e.target.value)}
              >
                {exercises?.map((exercise) => (
                  <option key={exercise.id} value={exercise.name}>
                    {exercise.name}
                  </option>
                ))}
              </Select>
            </Stack>
          </FormControl>

          <FormControl>
            <Input
            placeholder="Sets"
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Input
              placeholder="Reps"
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Input
              placeholder="Weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </FormControl>
          <Button
          mt={3}
          type='button'
          >
            Add another exercise
          </Button>
        </Form> )}

        <Card
        onClick={() => console.log('clicked')}
        ml='250px'
        padding={5}
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
          <CardHeader>
            <Heading size='lg'>
              { name }
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              { description }
            </Text>
              { workoutExercises?.map((workoutExercises) => 
              <Stack>
              <Heading size='md'>{workoutExercises.name}</Heading>
              <Text>Sets: {workoutExercises.sets}</Text>
              <Text>Reps: {workoutExercises.reps}</Text>
              <Text>Weight: {workoutExercises.weight}</Text>
              </Stack>
              ) }
          </CardBody>
        </Card>
      </Flex>
  )
}