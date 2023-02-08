import { useEffect, useState } from "react"
import { Menu, MenuButton, Img, MenuList, MenuItem, Button, Text, HStack, useToast } from "@chakra-ui/react"
import { IoMdArrowDropdown } from 'react-icons/io';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default () => {
    const [name, setName] = useState("");
    const toast = useToast()
    const navigate = useNavigate()

    const getCurrentUSerDetails = () => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                setName(user.displayName)
            } else {
                setName("")
            }
        })
    }

    const logoutUser = () => {
        signOut(getAuth()).then(() => {
            toast({
                title: 'Logged Out',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
        }).catch((error) => {

        });
    }

    useEffect(() => {
        getCurrentUSerDetails()
    }, [])

    return <>
        <Menu>
            <MenuButton>
                <HStack>
                    <Img maxH="40px" src="https://files.myglamm.com/site-images/original/no-user-yellow.png" alt="" />
                    <Text>
                        {name}
                    </Text>
                    <IoMdArrowDropdown fontSize="15px" />
                </HStack>
            </MenuButton>
            <MenuList textAlign={"center"} p={0} minW="0">
                {
                    name != "" && <>
                        <MenuItem _hover={{ bg: "none", fontWeight: "500" }} w="130px">My Profile</MenuItem>
                        <MenuItem onClick={() => navigate("/orders")} _hover={{ bg: "none", fontWeight: "500" }} w="130px">My Orders </MenuItem>
                        <MenuItem _hover={{ bg: "none", fontWeight: "500" }} onClick={logoutUser} w="130px"><Button>Logout</Button></MenuItem>
                        <MenuItem _hover={{ bg: "none", fontWeight: "500" }} w="130px"></MenuItem>
                    </>
                }
            </MenuList>
        </Menu>
    </>
}