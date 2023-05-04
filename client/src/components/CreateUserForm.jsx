import { useState, useContext } from "react";
import { baseURL, headers } from "../Globals";
import { Form, useNavigate } from "react-router-dom";
import { 
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import { UserContext } from "../context/userContext";



export default function CreateUserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(baseURL + "/signup", {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password, password_confirmation: passwordConfirmation }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          navigate("/")
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <Flex>
      <Stack>
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Are you ready to get fit?</FormLabel>
            <Input 
              type="text" 
              id="username" 
              autoComplete="off" 
              placeholder="Username"
              _dark={{
                bg: 'gray',
                color: 'black',
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> &nbsp;
          </FormControl>
          
          <FormControl>
            <Input 
            type="password" 
            id="password" 
            autoComplete="current-password" 
            placeholder="Password"
            _dark={{
              bg: 'gray',
              color: 'black',
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            /> &nbsp;
          </FormControl>
          <FormControl>
            <Input 
            type="password" 
            id="password_confirmation"
            autoComplete="current-password" 
            placeholder="Password Confirmation"
            _dark={{
              bg: 'gray',
              color: 'black',
            }}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </FormControl>
          <FormLabel
            color='red.500'
          >
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </FormLabel>
          <Button
              mt={3}
              colorScheme={'teal'}
              type='submit'
            >
              {isLoading ? "Loading..." : "Create Account"}
            </Button>
        </Form>  
      </Stack>
    </Flex>
  )
};