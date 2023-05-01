import { 
  Stack,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import React from 'react'

export default function EditWorkoutForm() {
  return (
    <Stack>
      <ButtonGroup display='flex' justifyContent='flex-end'>
        <Button variant='outline'>
          Cancel
        </Button>
        <Button colorScheme='teal'>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
