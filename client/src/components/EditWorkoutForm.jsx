import {
  Input,
  Stack,
  Button,
  Text,
  ButtonGroup,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import {
  AddIcon
} from '@chakra-ui/icons'
import { Form } from 'react-router-dom'
import EditWorkoutField from './EditWorkoutField'
import { useHandleChange } from '../hooks/hooks'
import { useContext } from 'react'
import { WorkoutContext } from '../context/workoutContext'
import { baseURL } from '../Globals'

export default function EditWorkoutForm({ editButton, workout }) {
  const { errors, setErrors, workoutData, setWorkoutData, handleEditWorkout } = useContext(WorkoutContext)
  const handleChange = useHandleChange(setWorkoutData)
  const handleAddExercise = () => {
    setWorkoutData({
      ...workoutData,
      workout_exercises: [
        ...workoutData.workout_exercises,
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

  const editWorkout = (e) => {
    e.preventDefault()
    handleEditWorkout(workout.id)
  }

  const handleSaveClick = () => {
    if (errors.length === 0) {
      setErrors([])
      editButton.onClose()
    }
  }

  const handleCancelClick = () => {
    setErrors([])
    editButton.onClose()
  }

  return (
    <Stack>
      <Form onSubmit={editWorkout}>
        <FormControl>
          <Text>Name:</Text>
          <Input variant='outline' name="name" value={workoutData?.name} onChange={handleChange}/>&nbsp;
          <Text>Description:</Text>
          <Input variant='outline' name="description" value={workoutData?.description} onChange={handleChange}/>&nbsp;
          {workoutData?.workout_exercises.map((workout_exercise, index) => (
            <EditWorkoutField key={workout_exercise.id} workout_exercise={workout_exercise} index={index}/>
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
