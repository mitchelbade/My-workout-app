import {
  Button,
  ButtonGroup,
  FormControl,
  Input,
  Stack,
  Text,
  FormLabel,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Form } from 'react-router-dom'
import { useHandleChange } from '../hooks/hooks'
import { useContext } from 'react'
import { WorkoutContext } from '../context/workoutContext'
import NewWorkoutField from './CreateWorkoutField'

export default function CreateWorkoutForm({ createButton }) {
  const { errors, setErrors, newWorkoutData, setNewWorkoutData, handleCreateWorkout } = useContext(WorkoutContext)
  const handleChange = useHandleChange(setNewWorkoutData)
  const clearFormData = {
    name: '',
    description: '',
    workout_exercises: [],
  }

  const handleCancelClick = () => {
    setNewWorkoutData(clearFormData)
    setErrors([])
    createButton.onClose()
  }

  const createWorkout = (e) => {
      e.preventDefault()
      handleCreateWorkout()
      setNewWorkoutData(clearFormData)
  }

  const handleSaveClick = () => {
    if (!errors) {
      setErrors([])
      createButton.onClose()
    }
  }

  const handleAddExercise = () => {
    setNewWorkoutData({
      ...newWorkoutData,
      workout_exercises: [
        ...newWorkoutData.workout_exercises,
        {
          exercise: {
            id: 1,
            name: 'Bench Press',
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
      <Form onSubmit={createWorkout}>
        <FormControl>
          <Text>Name:</Text>
          <Input variant='outline' name="name" value={newWorkoutData?.name} onChange={handleChange}/>&nbsp;
          <Text>Description:</Text>
          <Input variant='outline' name="description" value={newWorkoutData?.description} onChange={handleChange}/>&nbsp;
          {newWorkoutData?.workout_exercises.map((workout_exercise, index) => (
            <NewWorkoutField key={workout_exercise.id} workout_exercise={workout_exercise} index={index}/>
          ))}
        </FormControl>
        <FormLabel 
          color='red.500'
          display='flex'
          justifyContent='right'
        >
          {errors?.map((error) => (
            <p key={error}>{error}</p>
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