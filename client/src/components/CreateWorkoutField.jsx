import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Text,
  Stack,
  Spacer,
  Button,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { ExerciseContext } from '../context/exerciseContext'
import { WorkoutContext } from '../context/workoutContext'
import { useHandleChangeNested } from '../hooks/hooks'
import { MinusIcon } from '@chakra-ui/icons'


export default function CreateWorkoutField({ index }) {
  const { newWorkoutData, setNewWorkoutData } = useContext(WorkoutContext)
  const { exercises } = useContext(ExerciseContext)
  const handleChange = useHandleChangeNested(setNewWorkoutData, 'workout_exercises', index)
  const handleChangeNumber = (name) => (value) => {
    handleChange({
      target: {
        value: parseInt(value),
        name,
      }
    })
  }

  const handleRemoveExercise = (index) => {
    setNewWorkoutData({
      ...newWorkoutData,
      workout_exercises: [
        ...newWorkoutData.workout_exercises.slice(0, index),
        ...newWorkoutData.workout_exercises.slice(index + 1),
      ]
    })
  }

  return (
    <Stack>
      <Text>Exercise:</Text>
      <Select name='exercise.id' value={newWorkoutData?.workout_exercises[index].exercise.id} onChange={handleChange}>
        {exercises?.map((exercise) => (
          <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
        ))}
      </Select>
      <Text>Sets:</Text>
      <NumberInput value={newWorkoutData?.workout_exercises[index].sets} onChange={handleChangeNumber('sets')}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Reps:</Text>
      <NumberInput value={newWorkoutData?.workout_exercises[index].reps} onChange={handleChangeNumber('reps')}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Weight:</Text>
      <NumberInput value={newWorkoutData?.workout_exercises[index].weight} onChange={handleChangeNumber('weight')}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button onClick={() => handleRemoveExercise(index)}>
        <MinusIcon />
      </Button>
      <Spacer />
      <Spacer />
    </Stack>
  )
}
