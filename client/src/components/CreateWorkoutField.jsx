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
import { MinusIcon } from '@chakra-ui/icons'
import { useWorkoutStore } from '../stores/workoutStore'
import { set } from 'lodash'


export default function CreateWorkoutField({ index, exercises }) {
  const [ newWorkout, setNewWorkout ] = useWorkoutStore((state) => [ state.newWorkout, state.setNewWorkout ])

  const handleChange = (e) => {
    const { name, value } = e.target
    const path = `workout_exercises[${index}].${name}`
    const workout = set(newWorkout, path, value)
    setNewWorkout(JSON.parse(JSON.stringify(workout)))
  }

  const handleChangeNumber = (name) => (value) => {
    handleChange({
      target: {
        value: parseInt(value),
        name,
      }
    })
  }

  const handleRemoveExercise = (index) => {
    setNewWorkout({
      ...newWorkout,
      workout_exercises: [
        ...newWorkout.workout_exercises.slice(0, index),
        ...newWorkout.workout_exercises.slice(index + 1),
      ]
    })
  }

  console.log(newWorkout)

  return (
    <Stack>
      <Text>Exercise:</Text>
      <Select name='exercise.id' value={newWorkout?.workout_exercises[index].exercise.id} onChange={handleChange}>
        {exercises?.map((exercise) => (
          <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
        ))}
      </Select>
      <Text>Sets:</Text>
      <NumberInput value={newWorkout?.workout_exercises[index].sets} onChange={handleChangeNumber('sets')}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Reps:</Text>
      <NumberInput value={newWorkout?.workout_exercises[index].reps} onChange={handleChangeNumber('reps')}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Weight:</Text>
      <NumberInput value={newWorkout?.workout_exercises[index].weight} onChange={handleChangeNumber('weight')}>
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
