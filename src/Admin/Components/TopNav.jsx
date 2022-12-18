import { Search2Icon } from "@chakra-ui/icons"
import {
    Card, Heading,
    InputGroup,
    Input,
    Image,
    Grid,
    Text,
    InputRightElement,
    HStack,
    Button,
    Slide,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box
} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi"

export default () => {
    const { isOpen, onToggle } = useDisclosure()
    return <Card w={"100%"} borderRadius="0">
        <Grid p="7px" gridTemplateColumns="repeat(7,1fr)" alignItems={"center"}>
            <Heading gridColumn="1/3" size={"lg"}>Dashbaord</Heading>
            <Card gridColumn="3/6">
                <InputGroup size={"lg"}>
                    <Input type='text' placeholder='Search'
                        focusBorderColor="#DBAA4D"
                    />
                    <InputRightElement
                        cursor="pointer"
                        backgroundColor="#DBAA4D"
                        borderTopRightRadius="6px"
                        borderBottomRightRadius="6px"
                        children={<Search2Icon color='#AE863B' />}
                    />
                </InputGroup>
            </Card>
            <Box gridColumn="7">
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton isActive={isOpen}>
                                <Card cursor="pointer" p="10px" border="1px solid #E0E0E0">
                                    <HStack>
                                        <Image
                                            borderRadius='full'
                                            boxSize='25px'
                                            src='https://bit.ly/dan-abramov'
                                            alt='Dan Abramov'
                                        />
                                        <Text>Atul Singh</Text>
                                        <BiChevronDown size="25px" />
                                    </HStack>
                                </Card>
                            </MenuButton>
                            <MenuList p={0} minW="0">
                                <MenuItem w="172px" overflow={"hidden"}>Profile</MenuItem>
                                <MenuItem w="172px" overflow={"hidden"} onClick={() => alert('Signed out')}>Sign out</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Box>
        </Grid>
    </Card>
}