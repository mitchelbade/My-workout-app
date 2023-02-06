import { 
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  } from '@chakra-ui/react'



export default function ExerciseCard({ exercise }) {
  
    return (
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='ghost'
        borderRadius='15px'
        _light={{
          bg: 'gray',
          color: 'black',
          opacity: ".5",
        }}
        _dark={{
          bg: 'gray',
          color: 'black',
          opacity: ".5",
        }}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={ exercise?.image }
          alt={ exercise?.name }
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{exercise?.name}</Heading>
            <Text>{exercise.muscle_group.name}</Text>
            <Text py='2'>{ exercise?.description }</Text>
          </CardBody>
        </Stack>
      </Card>
    )
  }