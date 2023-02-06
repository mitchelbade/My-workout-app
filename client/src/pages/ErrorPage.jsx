import { useRouteError } from 'react-router-dom';
import {
  Text,
  Card, 
  CardHeader, 
  Heading,
  CardFooter,
  Button,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  return (
    <Flex
      textAlign={'center'}
      justify='center'
      maxW='lg'
      mx='auto'
      mt='10vh'
    >
      <Card id="error-page">
        <CardHeader>
          <Heading>Oops! Something went wrong.</Heading>
        </CardHeader>
          <Text>
            {error.statusText || error.message}
          </Text>
          <CardFooter>
            <Button 
            colorScheme={useColorModeValue('purple', 'yellow')}
            onClick={() => navigate('/')}
            >
              Home
            </Button>
          </CardFooter>
      </Card>
    </Flex>
  );
}