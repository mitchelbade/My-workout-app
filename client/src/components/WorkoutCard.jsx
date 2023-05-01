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
  Popover,
  useDisclosure,
  PopoverContent,
  PopoverBody,
  useBoolean,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { baseURL } from "../Globals";
import EditWorkoutForm from "./EditWorkoutForm";

export default function WorkoutCard({ workout, onDeleteWorkout, onEditWorkout }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isEditing, setIsEditing] = useBoolean()
  const firstFieldRef = React.useRef(null)

  function handleEditWorkout() {
    const updatedWorkout = {
      name: workout.name,
      description: workout.description,
      exercises: workout.exercises,
    };
    fetch(baseURL + "/workouts/" + workout.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWorkout),
    })
      .then((r) => {
      if (r.ok) {
        r.json().then(onEditWorkout);
      }
    });
  }

  function handleDeleteWorkout() {
    fetch(baseURL + "/workouts/" + workout.id, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteWorkout(workout);
      }
    });
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
            <Stack>
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
              <Button colorScheme={useColorModeValue('purple', 'yellow')} onClick={setIsEditing.toggle}>
                {isEditing ? 'Cancel' : 'Edit'}
              </Button>
            <Button colorScheme='red' onClick={onOpen}>
              Delete
            </Button>

            <Popover
              isOpen={isEditing}
              initialFocusRef={firstFieldRef}
              onOpen={setIsEditing.on}
              onClose={setIsEditing.off}
              closeOnBlur={false}
              placement='right'
            >
              <PopoverContent p={5}>
                <PopoverBody>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <EditWorkoutForm firstFieldRef={firstFieldRef} workout={workout} onEditWorkout={handleEditWorkout} />
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <AlertDialog
              isOpen={isOpen}
              onClose={onClose}
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
                    <Button onClick={onClose}>
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