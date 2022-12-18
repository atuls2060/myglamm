import {
    Flex, VStack
} from "@chakra-ui/react"
import Styles from "./admin.module.css"
import SideNav from "../Components/SideNav"
import TopNav from "../Components/TopNav"
import { Route, Routes } from "react-router-dom"



export default ({ children }) => {
    return <>
        <Flex>
            <SideNav />
            <VStack w={"85%"}>
                <TopNav />
                {
                    children
                }
            </VStack>
        </Flex>
    </>
}