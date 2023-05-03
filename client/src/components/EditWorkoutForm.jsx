import {
  Input,
  Stack,
  Button,
  Text,
  ButtonGroup,
  FormControl,
} from '@chakra-ui/react'
import {
  AddIcon
} from '@chakra-ui/icons'
import { Form } from 'react-router-dom'
import EditWorkoutField from './EditWorkoutField'
import { useHandleChange } from '../hooks/hooks'
import { useContext, useEffect } from 'react'
import { WorkoutContext } from '../context/workoutContext'

export default function EditWorkoutForm({ editButton, editWorkout }) {
  const { workoutData, setWorkoutData } = useContext(WorkoutContext)
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

  useEffect(() => {
    console.log(workoutData)
  }, [workoutData])

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
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button onClick={handleAddExercise}>
            <AddIcon />
          </Button>
          <Button variant='outline' onClick={editButton?.onClose}>
            Cancel
          </Button>
          <Button colorScheme='teal' type='submit'>
            Save
          </Button>
        </ButtonGroup>
      </Form>
    </Stack>
  )
}
