import React, { useEffect, useState } from 'react'
import { Card, CardBody, Container, FormControl, FormLabel, Heading, Input, Button, Text, Divider, FormHelperText, Alert, InputGroup, HStack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, InputLeftElement, InputRightElement, AlertIcon, AlertTitle, AlertDescription, useToast, Flex, Img } from '@chakra-ui/react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createAccountApi } from '../../Utils/database'
import ProfileDropDown from '../../Components/ProfileDropDown'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasseord] = useState("")
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")
  const currentUser = getAuth.currentUser
  const toast = useToast();



  const handleSubmit = async () => {
    if (!name || !email || !password) {
      alert("All field required")
      return
    }

    const { errorMessage } = await createAccountApi({ name, email, password })
    if (errorMessage == "") {
      toast({
        title: 'Account Created!',
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

  const disable = password === ""

  return (
    <>
      <Card>
        <Flex p={3} justifyContent={"space-around"}>
          <Link to={"/"}><Img maxHeight="50px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" /></Link>
        </Flex>
      </Card>
      <Container mt="40px" minH="100vh">
        <Card border="1px solid #e4e4e4">
          <CardBody>
            <Heading fontWeight="medium">Create Account</Heading>
            <FormControl mt="4">
              <FormLabel>Your name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="First and last name " />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Email </FormLabel>
              <HStack spacing="4">
                {/* <NumberInput maxW="80px" value="+91">
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput> */}
                <Input name={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </HStack>
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={password} type={showPassword ? "text" : "password"} onChange={(e) => setPasseord(e.target.value)} placeholder="At least 6 characters" />
                <InputRightElement onClick={() => setShowPassword(!showPassword)}>

                  {
                    showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />
                  }

                </InputRightElement>
              </InputGroup>
              <FormHelperText fontSize="13px">Passwords must be at least 6 characters.</FormHelperText>
            </FormControl>
            <Button
              mt="4"
              type='submit'
              w='100%'
              color="white"
              _hover={{
                bg: "#dbab4f"
              }}
              onClick={handleSubmit}
              pointerEvents={disable ? "none" : "all"}
              bg={disable ? "lightgray" : "#deb961"}
            >
              Continue
            </Button>
            <Divider mx="auto" my="5" w="90%" height="1px" bg="#e4e4e4" />
            <Text fontSize="13px" mt="4">Already have an account? <Link to="/login"><Text display="inline-block" fontWeight="bold">Sign in</Text></Link></Text>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default RegisterPage