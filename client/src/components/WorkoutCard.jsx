import { 
  Card, 
  CardBody, 
  CardHeader, 
  Heading,
  Text,
  Stack,
  CardFooter,
  ButtonGroup,
  Button,
  useColorModeValue,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import EditWorkoutForm from "./EditWorkoutForm";
import { useWorkoutStore } from "../stores/workoutStore";

export default function WorkoutCard({ workout }) {
  const deleteButton = useDisclosure()
  const editButton = useDisclosure()
  const [ workoutData, setWorkoutData, deleteWorkout, editWorkout ] = useWorkoutStore((state) => 
  [ state.workoutData, state.setWorkoutData, state.deleteWorkout, state.editWorkout ])

  const handleEditClick = () => {
    editButton.onOpen()
    setWorkoutData(JSON.parse(JSON.stringify(workout)))
  }

  const handleEditWorkout = () => {
    editWorkout(workout.id, workoutData)
  }

  const handleDeleteWorkout = () => {
    deleteWorkout(workout.id)
    deleteButton.onClose()
  }

  return (
      <Card
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
        <CardBody>
          <CardHeader>
            <Heading>
              { workout?.name }
            </Heading>
          </CardHeader>
          <Text>
            { workout?.description }
          </Text>
          { workout?.workout_exercises.map((workout_exercise) => 
            <Stack key={workout_exercise.id}>
              <Heading size='md'>{workout_exercise?.exercise.name}</Heading>
              <Text>
                Sets: {workout_exercise?.sets} &nbsp;
                Reps: {workout_exercise?.reps} &nbsp;
                Weight: {workout_exercise?.weight}
              </Text>
            </Stack>
          ) }
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button colorScheme={useColorModeValue('purple', 'yellow')} onClick={(e) => handleEditClick(e, workout)}>
              Edit
            </Button>
            <Button colorScheme='red' onClick={deleteButton.onOpen}>
              Delete
            </Button>

            <Modal
              isOpen={editButton.isOpen}
              onClose={editButton.onClose}
              scrollBehavior="inside"
            >
              <ModalOverlay>
                <ModalContent>
                  <ModalHeader fontSize='lg' fontWeight='bold'>
                    Edit Workout
                  </ModalHeader>

                  <ModalBody>
                    <EditWorkoutForm editButton={editButton} handleEditWorkout={handleEditWorkout} />
                  </ModalBody>
                </ModalContent>
              </ModalOverlay>
            </Modal>

            <AlertDialog
              isOpen={deleteButton.isOpen}
              onClose={deleteButton.onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Delete Workout
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button onClick={deleteButton.onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='red' onClick={handleDeleteWorkout} ml={3}>
                      Delete
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>

          </ButtonGroup>
        </CardFooter>
      </Card>
  )
}