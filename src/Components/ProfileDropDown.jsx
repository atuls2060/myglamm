import { useContext } from "react"
import { Menu, MenuButton, Img, MenuList, MenuItem, Button, Text, HStack } from "@chakra-ui/react"
import { IoMdArrowDropdown } from 'react-icons/io';
import { AuthContext } from './../Contexts/AuthContext';
export default () => {
    const { logoutUser } = useContext(AuthContext)
    return <>
        <Menu>
            <MenuButton>
                <HStack>
                    <Img maxH="40px" src="https://files.myglamm.com/site-images/original/no-user-yellow.png" alt="" />
                    <Text>
                        Atul Singh
                    </Text>
                    <IoMdArrowDropdown fontSize="15px" />
                </HStack>
            </MenuButton>
            <MenuList textAlign={"center"} p={0} minW="0">
                <MenuItem _hover={{ bg: "none", fontWeight: "500" }} w="130px">My Profile</MenuItem>
                <MenuItem _hover={{ bg: "none", fontWeight: "500" }} w="130px">My Orders </MenuItem>
                <MenuItem _hover={{ bg: "none", fontWeight: "500" }} onClick={logoutUser} w="130px"><Button>Logout</Button></MenuItem>
                <MenuItem _hover={{ bg: "none", fontWeight: "500" }} w="130px"></MenuItem>
            </MenuList>
        </Menu>
    </>
}