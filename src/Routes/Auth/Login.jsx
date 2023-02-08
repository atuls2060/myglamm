import React, { useEffect, useState } from 'react'
import { Card, CardBody, Container, FormControl, FormLabel, Heading, Input, Button, Text, HStack, Divider, Checkbox, InputGroup, InputRightElement, useToast, Flex, Img } from '@chakra-ui/react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { loginUserApi } from '../../Utils/database'
import ProfileDropDown from '../../Components/ProfileDropDown'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPasseord] = useState("")
  const [toggleView, setToggleView] = useState(true)
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")
  const currentUser = getAuth.currentUser
  const toast = useToast();

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("All field required")
      return
    }

    const { errorMessage } = await loginUserApi({ email, password })
    if (errorMessage == "") {
      toast({
        title: 'Welcome back!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: "top"
      })

    }
    setErrorMessage(errorMessage)

  }

  const getCurrentUSerDetails = () => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        navigate("/", { replace: true })
      }
    })
  }

  useEffect(() => {
    getCurrentUSerDetails()
    if (errorMessage != "") {
      toast({
        title: 'Error',
        position: 'top',
        description: errorMessage.split(":")[1],
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [currentUser, errorMessage])




  return (
    <>
      <Card>
        <Flex p={3} justifyContent={"space-around"}>
          <Link to={"/"}><Img maxHeight="50px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" /></Link>
        </Flex>
      </Card>
      {toggleView ? <EmailView toggleView={setToggleView} email={email} onChange={(value) => setEmail(value)} />
        : <PasswordView onSubmit={handleSubmit} toggleView={setToggleView} email={email} password={password} disable={password === ""} onChange={(value) => setPasseord(value)} />
      }
    </>)
}

const EmailView = ({ toggleView, email, onChange }) => {
  const disable = email === ""
  return <Container mt="40px" minH="100vh">
    <Card border="1px solid #e4e4e4">
      <CardBody>
        <Heading fontWeight="medium">Sign In</Heading>

        <FormControl mt="4">
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={(e) => onChange(e.target.value)} />
        </FormControl>
        <Button
          mt="4"
          type='submit'
          w='100%'
          color="white"
          _hover={{
            bg: "#dbab4f"
          }}
          onClick={() => toggleView(false)}
          pointerEvents={disable ? "none" : "all"}
          bg={disable ? "lightgray" : "#deb961"}
        >
          Continue
        </Button>
        <Text fontSize="14px" mt="4">By continuing, you agree to MyGlamm&apos;s Conditions of Use and Privacy Notice.</Text>
      </CardBody>
    </Card>
    <HStack my="4" justifyContent="space-between">
      <Divider width="30%" height="1px" bg="#e4e4e4" />
      <Text fontSize="13px">New to MyGlamm ?</Text>
      <Divider width="30%" height="1px" bg="#e4e4e4" />
    </HStack>
    <Link to="/register">
      <Button
        w='100%'
        bg="#ae863b"
        color="white"
        _hover={{
          bg: "#dbab4f"
        }}

      >
        Create Account
      </Button></Link>
  </Container>
}
const PasswordView = ({ toggleView, email, password, onChange, onSubmit, disable }) => {

  const [showPassword, setShowPassword] = useState(false)

  return <Container mt="20px">
    <Card border="1px solid #e4e4e4">
      <CardBody>
        <Heading fontWeight="medium">Sign In</Heading>
        <HStack my="4"><Text fontSize="14px">{email}</Text>
          <Text onClick={() => toggleView(true)} cursor="pointer" fontSize="14px" color="teal">Change</Text>
        </HStack>
        <FormControl mt="4">
          <FormLabel>
            <HStack justifyContent="space-between">
              <Text>Password</Text>
              <Link to="/">Forgot Password</Link>
            </HStack>
          </FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => onChange(e.target.value)} />
            <InputRightElement onClick={() => setShowPassword(!showPassword)}>

              {
                showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />
              }

            </InputRightElement></InputGroup>
        </FormControl>
        <Button
          mt="4"
          type='submit'
          w='100%'
          _hover={{
            bg: "#EFBE42"
          }}
          onClick={onSubmit}
          pointerEvents={disable ? "none" : "all"}
          bg={disable ? "lightgray" : "#deb961"}
        >
          Continue
        </Button>
        <HStack my="4">
          <Checkbox />
          <Text fontSize="14px" mt="4">Keep me signed in. Details</Text>
        </HStack>
      </CardBody>
    </Card>
  </Container>
}

export default LoginPage