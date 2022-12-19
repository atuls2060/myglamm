import { ArrowDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Img, MenuList, MenuItem, Button, Text, HStack } from "@chakra-ui/react"
import { IoMdArrowDropdown } from 'react-icons/io';
export default () => {
    return <>
        <Menu>
            <MenuButton>
                <HStack>
                    <Img maxH="40px" src="https://files.myglamm.com/site-images/original/no-user-yellow.png" alt="" />
                    <Text>
                       Atul Singh
                    </Text>
                   <IoMdArrowDropdown fontSize="15px"/>
                </HStack>
            </MenuButton>
            <MenuList p={0} minW="0">
                <MenuItem w="130px">My Profile</MenuItem>
                <MenuItem w="130px">My Orders </MenuItem>
                <MenuItem w="130px"><Button>Logout</Button></MenuItem>
                <MenuItem w="130px"></MenuItem>
            </MenuList>
        </Menu>
    </>
}