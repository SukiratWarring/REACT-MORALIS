import { React, useState } from 'react'
import { useMoralis } from "react-moralis";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Button, Container, Heading, Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router';

const Signup = () => {
  const { signup } = useMoralis()
  const [email, setemail] = useState()
  const [password, setPassword] = useState()

  return (
    <Box>
      <input placeholder="Email" value={email} onChange={(e) => setemail(e.currentTarget.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <Button onClick={() => signup(email, password, email)}>Sign Up</Button>
    </Box>)
}
const Login_1 = () => {
  const { login } = useMoralis()
  const [email, setemail] = useState()
  const [password, setPassword] = useState()

  function forLogin() {
    login(email, password)
  }
  let navigate = useNavigate();
  function forLink() {
    navigate("/App")
  }

  return (

    <Box>
      <input placeholder="Email" value={email} onChange={(e) => setemail(e.currentTarget.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <Button onClick={() => { forLogin(); forLink() }}>Login</Button>
    </Box>
  )

}
export const Login = () => {
  const { authenticate, isAuthenticated, isAuthenticating, logout, authError } = useMoralis();

  // return<Routes>
  //   <Route path="/" exact>
  //     <App />
  //   </Route>
  // </Routes>


  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome</Heading>
        <Button onClick={() => logout()}>Logout</Button>

      </Container>
    );
  }
  return (
    <Container>Login
      {authError && (<Alert status='error'>
        <AlertIcon />
        <AlertTitle>Authentication has failed</AlertTitle>
        <AlertDescription>Error</AlertDescription>
      </Alert>
      )}
      <Signup />
      <Login_1 />
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authenticate</Button>
    </Container>
  )
}
