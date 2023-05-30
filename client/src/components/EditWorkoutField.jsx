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
import { set } from 'lodash'
import { MinusIcon } from '@chakra-ui/icons'
import { useWorkoutStore } from '../stores/workoutStore'
import { useExerciseStore } from '../stores/exerciseStore'


export default function EditWorkoutField({ index }) {
  const [ workoutData, setWorkoutData ] = useWorkoutStore((state) => [ state.workoutData, state.setWorkoutData ])
  const [ exercises ] = useExerciseStore((state) => [ state.exercises ])


  const handleChange = (e) => {
    const { name, value } = e.target
    const path = `workout_exercises[${index}].${name}`
    const workout = set(workoutData, path, value)
    setWorkoutData(JSON.parse(JSON.stringify(workout)))
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
    setWorkoutData({
      ...workoutData,
      workout_exercises: [
        ...workoutData.workout_exercises.slice(0, index),
        ...workoutData.workout_exercises.slice(index + 1),
      ]
    })
  }

  return (
    <Stack>
      <Text>Exercise:</Text>
      <Select name='exercise.id' value={workoutData?.workout_exercises[index].exercise.id} onChange={handleChange}>
        {exercises?.map((exercise) => (
          <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
        ))}
      </Select>
      <Text>Sets:</Text>
      <NumberInput value={workoutData?.workout_exercises[index].sets} onChange={handleChangeNumber('sets')}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Reps:</Text>
      <NumberInput value={workoutData?.workout_exercises[index].reps} onChange={handleChangeNumber('reps')}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Weight:</Text>
      <NumberInput value={workoutData?.workout_exercises[index].weight} onChange={handleChangeNumber('weight')}>
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
