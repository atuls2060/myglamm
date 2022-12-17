import {
    VStack, Text, HStack, Heading,
} from "@chakra-ui/react"
import Styles from "../Pages/admin.module.css"
import { BiCart, BiBorderAll, BiUser, BiGift } from "react-icons/bi"
import { Link } from "react-router-dom"

let links = [
    {
        label: "Dashboard",
        path: "/admin",
        icon: <BiBorderAll />
    },
    {
        label: "Orders",
        path: "#",
        icon: <BiCart />
    },
    {
        label: "Customers",
        path: "#",
        icon: <BiUser />
    },
    {
        label: "Products",
        path: "/admin/products",
        icon: <BiGift />
    },
]

export default () => {
    return <VStack spacing={10} align='stretch' className={Styles.sidenav}>
        <Heading>LYD</Heading>
        <VStack spacing={0}>
            {
                links.map((item) => {
                    return <Link to={item.path} className={Styles.link}>
                        <HStack>
                            {item.icon}
                            <Text>{item.label}</Text>
                        </HStack>
                    </Link>
                })
            }
        </VStack>
    </VStack>
}