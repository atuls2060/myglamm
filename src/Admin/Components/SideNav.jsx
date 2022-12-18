import {
    VStack, Text, HStack, Heading,
} from "@chakra-ui/react"
import Styles from "../Pages/admin.module.css"
import { BiCart, BiBorderAll, BiUser, BiGift, BiGridAlt, BiBox, BiListUl, BiCrown } from "react-icons/bi"
import { NavLink } from "react-router-dom"

let links = [
    {
        label: "Dashboard",
        path: "/admin",
        icon: <BiGridAlt size="25px" />
    },
    {
        label: "Orders",
        path: "/orders",
        icon: <BiListUl size="25px" />
    },
    {
        label: "Customers",
        path: "/customers",
        icon: <BiCrown size="25px" />
    },
    {
        label: "Products",
        path: "/admin/products",
        icon: <BiBox size="25px" />
    },
]

export default () => {
    return <VStack spacing={0} align='stretch' className={Styles.sidenav}>
        <Heading size={"lg"} p={5}>LYB ADMIN</Heading>
        <VStack spacing={0}>
            {
                links.map((item) => {
                    return <NavLink className={({ isActive }) => { return isActive ? Styles.active : Styles.link }} to={item.path}>
                        <HStack spacing={5}>
                            {item.icon}
                            <Text>{item.label}</Text>
                        </HStack>
                    </NavLink>
                })
            }
        </VStack>
    </VStack>
}