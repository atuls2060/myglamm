import {
    Modal, ModalOverlay, ModalContent,
    ModalCloseButton, ModalBody,
    Button, useDisclosure,
    Text,
    Img,
    Heading,
    InputGroup,
    Input,
    Divider,
    Grid,
    HStack,
    ButtonGroup,
    Box,
    PinInput,
    PinInputField,
    useToast,
    VStack,
} from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import { useContext } from 'react';
import { AuthContext } from './../Contexts/AuthContext';
import { useState } from 'react';
import { authenticate } from "../Utils/firebase"
import { getAdditionalUserInfo, getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default () => {
    const { openModal, toggleModal } = useContext(AuthContext);
    const navigate = useNavigate()

    const gotToLogin = ()=>{
        navigate("/login")
    }

    return <>
        <Box id="recaptcha-container"></Box>
        <Modal
            isCentered
            onClose={toggleModal}
            isOpen={openModal}
            motionPreset='slideInBottom'
            motionDelay="2s"
            size={"lg"}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Grid gap={5} p={4} templateColumns={"1fr"} justifyContent="center">
                        <Text mt={3} fontSize={"14px"} textAlign={"center"}>Get 15% Good Points back on every order</Text>
                        <Img margin={"15px auto"} maxH="60px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" />


                        <Phoneview />
                        <HStack>
                            <Divider />
                            <Text width="270px" fontSize={"xs"}>or continue with</Text>
                            <Divider />
                        </HStack>

                        <Button onClick={gotToLogin} leftIcon={<MdEmail fontSize="20px" />} fontSize={"12px"} variant={"outline"}>Continue with Email</Button>
                        <Text mb={5} textAlign={"center"} fontSize={"xs"}>By Signing up you agree to our <b> Terms & Conditions</b></Text>
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
}


const Phoneview = () => {
    const { toggleModal } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const [otpLoading, setOtpLoading] = useState(false)
    const [countryCode, setCountryCode] = useState("+91");
    const [phone, setPhone] = useState("8839652312");
    //otp view 
    const [showOtp, setShowOtp] = useState(false)
    const [otp, setOtp] = useState("")


    //profile
    const [showProfile, setShowProfile] = useState(false)

    const toast = useToast()

    const handleClick = (e) => {
        setLoading(true)
        verifyCaptcha()
    }

    const verifyCaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // signInWithPhone();
            }
        }, authenticate);
        signInWithPhone()
    }

    const signInWithPhone = () => {
        const phoneNumber = countryCode + phone;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authenticate, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                toast({
                    title: 'Otp Sent',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position: "top"
                })
                window.confirmationResult = confirmationResult;
                setLoading(false)
                setShowOtp(true)
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                toast({
                    title: 'You have exhausted your limit',
                    status: 'Error',
                    duration: 2000,
                    isClosable: true,
                    position: "top"
                })
                // ...
            });
    }
    const confirmOtp = () => {
        window.confirmationResult.confirm(otp).then((result) => {
            // User signed in successfully.
            const user = result.user;
            const { isNewUser } = getAdditionalUserInfo(result)
            if (isNewUser) {
                setShowProfile(true)
                setShowOtp(false)
            } else {
                toast({
                    title: 'Welcome back!',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position: "top"
                })
                //login here
                setShowOtp(false)
                setOtpLoading(false)
                toggleModal()
            }
        }).catch((error) => {
            toast({
                title: 'You have entered wrong otp',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
            setOtpLoading(false)
        });
    }

    return <Box>
        <Box borderBottom="1px solid #E0E0E0" mb="50px">
            <Heading fontSize={"14px"} p={2} borderBottom={"2px solid black"} w={"fit-content"} ml={10} size={"sm"}>*Mobile Number</Heading>
        </Box>
        {
            showOtp ? <OtpView otp={otp} setOtp={setOtp} confirmOtp={confirmOtp} loading={otpLoading} setLoading={setOtpLoading} /> :
                !showProfile ?
                    <Box>
                        < InputGroup mt={5} mb={5} gap={7}>
                            <Input value={countryCode} onChange={(e) => setCountryCode(e.target.value)} borderRadius="2px" focusBorderColor="black" maxW={20} type='tel' placeholder='Country Code' />
                            <Input value={phone} onChange={(e) => setPhone(e.target.value)} borderRadius="2px" focusBorderColor="black" type='tel' placeholder='phone number' required />
                        </InputGroup >
                        <Button
                            isLoading={loading}
                            loadingText="Sending Otp"
                            mb={10} bg={"black"} color={"white"} size={'lg'} borderRadius="0"
                            _hover={{ bg: '#292a2d' }}
                            _active={{
                                bg: '#292a2d',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                            onClick={handleClick}
                            disabled={phone.length < 10 || countryCode.length < 3 || phone.length > 10}
                            w="100%"
                        >
                            SIGN IN
                        </Button>
                    </Box> :
                    <ProfileView />
        }
    </Box>
}

const OtpView = ({ otp, setOtp, confirmOtp, loading, setLoading }) => {
    const handleOtpSubmit = () => {
        setLoading(true)
        confirmOtp()
    }
    return <VStack mt="30px" align="stretch" spacing="30px">
        <HStack justifyContent="space-evenly" align={"center"}>
            <PinInput onChange={(value) => setOtp(value)} otp>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
        </HStack>
        <Button
            isLoading={loading}
            loadingText="Submitting..."
            mb={10} bg={"black"} color={"white"} size={'lg'} borderRadius="0"
            _hover={{ bg: '#292a2d' }}
            _active={{
                bg: '#292a2d',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            onClick={handleOtpSubmit}
            disabled={otp.length < 6}
            w="100%"
        >
            Submit Otp
        </Button>
    </VStack>
}

const ProfileView = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmailName] = useState("")
    const [loading, setLoading] = useState(false)
    const { toggleModal } = useContext(AuthContext);
    const toast = useToast()

    const handleClick = async () => {
        setLoading(true)
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                saveProfile(user)
            }
        })
    }
    const saveProfile = async (user) => {
        try {
            await updateProfile(user, { displayName: firstName + " " + lastName, email: email })
            toast({
                title: 'Profile Saved',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: "top"
            })

            setLoading(false)
            toggleModal()
        } catch (err) {
            toast({
                title: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
            setLoading(false)
        }
    }

    return <Box>
        < VStack mt={5} mb={5} gap={4}>
            <HStack gap="10px">
                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} borderRadius="2px" focusBorderColor="black" type='text' placeholder='First Name' required />
                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} borderRadius="2px" focusBorderColor="black" type='text' placeholder='Last Name' required />
            </HStack>
            <Input value={email} onChange={(e) => setEmailName(e.target.value)} borderRadius="2px" focusBorderColor="black" type='email' placeholder='Email' required />
        </VStack >
        <Button
            isLoading={loading}
            loadingText="Saving"
            mb={10} bg={"black"} color={"white"} size={'lg'} borderRadius="0"
            _hover={{ bg: '#292a2d' }}
            _active={{
                bg: '#292a2d',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            onClick={handleClick}
            disabled={firstName.length == 0 || lastName.length == 0 || email.length == 0}
            w="100%"
        >
            SAVE
        </Button>
    </Box>
}