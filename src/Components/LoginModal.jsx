import {
    Modal, ModalOverlay, ModalContent,
    ModalCloseButton, ModalBody, ModalFooter,
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
} from "@chakra-ui/react"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { useContext } from 'react';
import { AuthContext } from './../Contexts/AuthContext';
import { useState } from 'react';

export default () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { openModal, toggleModal,loginUser } = useContext(AuthContext);
    const [phone,setPhone] = useState(122);

    const handleClick = ()=>{
        loginUser(phone)
        toggleModal()
    }

    return <>
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
                        <Box  borderBottom="1px solid #E0E0E0">
                            <Heading fontSize={"14px"} p={2} borderBottom={"2px solid black"} w={"fit-content"} ml={10} size={"sm"}>*Mobile Number</Heading>
                        </Box>
                        <InputGroup value={phone} onChange={(e)=>setPhone(e.target.value)} mt={5} mb={5} gap={7} isRequired>
                            <Input borderRadius="2px" focusBorderColor="black" maxW={20} type='tel' placeholder='Country Code' value={"+91"} />
                            <Input value={phone} borderRadius="2px" focusBorderColor="black" type='tel' placeholder='phone number' required />
                        </InputGroup>
                        <Button mb={10} bg={"black"} color={"white"} size={'lg'} borderRadius="0"
                            _hover={{ bg: '#292a2d' }}
                            _active={{
                                bg: '#292a2d',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                            onClick={handleClick}
                        >
                            SIGN IN
                        </Button>
                        <HStack>
                            <Divider />
                            <Text width="270px" fontSize={"xs"}>or continue with</Text>
                            <Divider />
                        </HStack>

                        <ButtonGroup mb={0} ml={"auto"} mr={"auto"}>
                            <Button leftIcon={<FaFacebook color={"#1977F3"} fontSize="20px" />} fontSize={"12px"} variant={"outline"}>Continue with Facebook</Button>
                            <Button leftIcon={<FcGoogle fontSize="20px" />} fontSize={"12px"} variant={"outline"}>Continue with Google</Button>
                        </ButtonGroup>
                        <Text mb={5} textAlign={"center"} fontSize={"xs"}>By Signing up you agree to our <b> Terms & Conditions</b></Text>
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
}