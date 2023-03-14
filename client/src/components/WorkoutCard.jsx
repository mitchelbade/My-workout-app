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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";

export default function WorkoutCard({ workout }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

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
          { workout?.exercises.map((exercise) => 
            <Stack>
              <Heading size='md'>{exercise?.name}</Heading>
              <Text>
                Sets: {exercise?.sets} &nbsp;
                Reps: {exercise?.reps} &nbsp;
                Weight: {exercise?.weight}
              </Text>
            </Stack>
          ) }
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button colorScheme={useColorModeValue('purple', 'yellow')}>
              Edit
            </Button>
            <Button colorScheme='red' onClick={onOpen}>
              Delete
            </Button>

            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
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
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='red' onClick={onClose} ml={3}>
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