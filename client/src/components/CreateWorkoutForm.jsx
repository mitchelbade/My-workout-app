import {
  Button,
  ButtonGroup,
  FormControl,
  Input,
  Stack,
  Text,
  FormLabel,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import NewWorkoutField from './CreateWorkoutField';
import { useWorkoutStore } from '../stores/workoutStore';

export default function CreateWorkoutForm({ createButton, exercises }) {
  const [ errors, setErrors, newWorkout, setNewWorkout, createWorkout ] = useWorkoutStore((state) => 
  [ state.errors, state.setErrors, state.newWorkout, state.setNewWorkout, state.createWorkout ]
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewWorkout({
      [name]: value 
    })
  }

  const clearFormData = {
    name: '',
    description: '',
    workout_exercises: [],
  }

  const handleCancelClick = () => {
    setNewWorkout(clearFormData)
    setErrors([])
    createButton.onClose()
  }

  const handleCreateWorkout = (e) => {
      e.preventDefault()
      createWorkout(newWorkout)
      setNewWorkout(clearFormData)
  }

  const handleSaveClick = () => {
      setErrors([])
      createButton.onClose()
  }

  const handleAddExercise = () => {
    setNewWorkout({
      ...newWorkout,
      workout_exercises: [
        ...newWorkout.workout_exercises,
        {
          exercise: {
            id: 1,
          },
          sets: 3,
          reps: 10,
          weight: 1,
        }
      ]
    })
  }

  return (
    <Stack>
      <Form onSubmit={handleCreateWorkout}>
        <FormControl>
          <Text>Name:</Text>
          <Input variant='outline' name="name" value={newWorkout?.name} onChange={handleChange}/>&nbsp;
          <Text>Description:</Text>
          <Input variant='outline' name="description" value={newWorkout?.description} onChange={handleChange}/>&nbsp;
          {newWorkout?.workout_exercises.map((workout_exercise, index) => (
            <NewWorkoutField key={index} workout_exercise={workout_exercise} index={index} exercises={exercises}/>
          ))}
        </FormControl>
        <FormLabel 
          color='red.500'
          display='flex'
          justifyContent='right'
        >
          {errors?.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </FormLabel>
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button onClick={handleAddExercise}>
            <AddIcon />
          </Button>
          <Button colorScheme='teal' type='submit' onClick={handleSaveClick}>
            Save
          </Button>
          <Button variant='outline' onClick={handleCancelClick}>
            Cancel
          </Button>
        </ButtonGroup>
      </Form>
    </Stack>
  )
}