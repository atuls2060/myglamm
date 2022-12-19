import Navbar from "../Components/Navbar"
import { Box } from "@chakra-ui/react"
import LoginModal from "../Components/LoginModal"

export default ({ children }) => {
    return <>
        {
            //this component is for pages which need navbar
        }
        <Navbar />
        <LoginModal />
        <Box mt={"156px"}>
            {children}
        </Box>
    </>
}