import { 
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { baseURL, headers } from "../Globals";
import { useUserStore } from "../stores/userStore";
import { Form, useNavigate } from "react-router-dom";



export default function LoginForm() {
  const { setUser } = useUserStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${baseURL}/login`, {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password }),
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
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Welcome!</FormLabel>
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
            colorScheme={useColorModeValue('purple', 'yellow')}
            type='submit'
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
      </Form>
    </Flex>
  )
};