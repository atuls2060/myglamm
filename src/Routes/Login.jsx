import {
    Modal, ModalOverlay, ModalContent,
    ModalCloseButton, ModalBody, ModalFooter,
    Button, useDisclosure,
    Text,
    Img,
    Heading,
    InputGroup,
    Input,
    InputLeftAddon,
    Divider,
    Grid,
    HStack,
    ButtonGroup,
    NumberInput,
    NumberInputField
} from "@chakra-ui/react"
import { BiGift } from "react-icons/bi"

export default () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>
        <h1>Login</h1>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal
            isCentered
            onClose={onClose}
            isOpen={true}
            motionPreset='slideInBottom'
            motionDelay="2s"
            size={"lg"}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Grid gap={10} templateColumns={"1fr"} justifyContent="center">
                        <Text textAlign={"center"}>Get 15% Good Points back on every order</Text>
                        <Img m="auto" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" />
                        <Heading size={"sm"}>*Mobile Number</Heading>
                        <Divider />
                        <InputGroup gap={7} isRequired>
                            <Input maxW={20} type='tel' placeholder='Country Code' value={"+91"} />
                            <Input type='tel' placeholder='phone number' required />
                        </InputGroup>
                        <Button bg={"black"} color={"white"} size={'lg'} borderRadius="0"
                            _hover={{ bg: '#292a2d' }}
                            _active={{
                                bg: '#292a2d',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                        >
                            SIGN IN
                        </Button>
                        <HStack>
                            <Divider />
                            <Text width="270px" fontSize={"xs"}>or continue with</Text>
                            <Divider />
                        </HStack>
                        <ButtonGroup m={"auto"}>
                            <Button leftIcon={<BiGift />} variant={"outline"}>Continue with Facebook</Button>
                            <Button leftIcon={<BiGift />} variant={"outline"}>Continue with Google</Button>
                        </ButtonGroup>
                        <Text textAlign={"center"} fontSize={"xs"}>By Signing up you agree to our <b> Terms & Conditions</b></Text>
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
}