import { useState, useContext } from "react";
import { baseURL, headers } from "../Globals";
import { Form, useNavigate } from "react-router-dom";
import { 
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
  // FormErrorMessage,
} from "@chakra-ui/react";
import { UserContext } from "../context/userContext";



export default function CreateUserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(baseURL + "/signup", {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password, passwordConfirmation: passwordConfirmation }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          navigate("/")
        });
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  };

  return (
    <Flex>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Are you ready to get fit?</FormLabel>
          <Input 
            type="text" 
            id="username" 
            autoComplete="off" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        
        <FormControl>
          <Input 
          type="password" 
          id="password" 
          autoComplete="current-password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input 
          type="password" 
          id="password_confirmation"
          autoComplete="current-password" 
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </FormControl>
        <Button
            mt={3}
            colorScheme={useColorModeValue('purple', 'yellow')}
            type='submit'
          >
            {isLoading ? "Loading..." : "Create Account"}
          </Button>
      </Form>  
    </Flex>
  )
};