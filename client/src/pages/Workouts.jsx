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
import { useEffect } from "react";
import { fetchExercises } from "../api";
import { AddIcon } from "@chakra-ui/icons";
import WorkoutCard from "../components/WorkoutCard";
import { useWorkoutStore } from "../stores/workoutStore";
import { useExerciseStore } from "../stores/exerciseStore";
import CreateWorkoutForm from "../components/CreateWorkoutForm";

export default function Workouts() {
  const createButton = useDisclosure()
  const [ workouts, fetchWorkouts ] = useWorkoutStore((state) => [ state.workouts, state.fetchWorkouts ])
  const [ exercises, setExercises ] = useExerciseStore((state) => [ state.exercises, state.setExercises ])

  useEffect(() => {
    const fetchData = async () => {
      const exerciseData = await fetchExercises();
      if (exerciseData) {
        setExercises(exerciseData);
      }
    }
    fetchData();
  }, [setExercises])

  useEffect(() => {
    fetchWorkouts();
  }, [fetchWorkouts])

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
              <CreateWorkoutForm createButton={createButton} exercises={exercises}/>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </SimpleGrid>
  )
}