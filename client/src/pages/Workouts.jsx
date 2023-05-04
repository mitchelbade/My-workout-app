import WorkoutCard from "../components/WorkoutCard"
import { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";
import {
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CreateWorkoutForm from "../components/CreateWorkoutForm";



export default function Workouts() {
  const { workouts } = useContext(WorkoutContext);
  const createButton = useDisclosure()

  const workoutCard = workouts?.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)

  return (
    <SimpleGrid
    minChildWidth={250}
    spacing={4}
    templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
    >
      { workoutCard }
      <IconButton icon={<AddIcon />} onClick={createButton.onOpen} />
      <Modal
        isOpen={createButton.isOpen}
        onClose={createButton.onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader fontSize='lg' fontWeight='bold'>
              Create A New Workout!
            </ModalHeader>

            <ModalBody>
              <CreateWorkoutForm createButton={createButton} />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </SimpleGrid>
  )
}