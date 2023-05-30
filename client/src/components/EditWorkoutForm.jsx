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
import { useWorkoutStore } from '../stores/workoutStore'


export default function EditWorkoutForm({ editButton, handleEditWorkout }) {
  const [ errors, setErrors, workoutData, setWorkoutData ] = useWorkoutStore((state) => 
  [ state.errors, state.setErrors, state.workoutData, state.setWorkoutData ]
  )
  const handleChange = (e) => {
    const { name, value } = e.target
    setWorkoutData({
      [name]: value 
    })
  }

  const handleAddExercise = () => {
    setWorkoutData({
      ...workoutData,
      workout_exercises: [
        ...workoutData.workout_exercises,
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

  const handleSaveClick = () => {
    setErrors([])
    editButton.onClose()
  }

  const handleCancelClick = () => {
    setErrors([])
    editButton.onClose()
  }

  return (
    <Stack>
      <Form onSubmit={handleEditWorkout}>
        <FormControl>
          <Text>Name:</Text>
          <Input variant='outline' name="name" value={workoutData?.name} onChange={handleChange}/>&nbsp;
          <Text>Description:</Text>
          <Input variant='outline' name="description" value={workoutData?.description} onChange={handleChange}/>&nbsp;
          {workoutData?.workout_exercises.map((workout_exercise, index) => (
            <EditWorkoutField key={index} workout_exercise={workout_exercise} index={index}/>
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
