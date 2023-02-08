import Navbar from "../Components/Navbar"
import { Box, useBreakpointValue } from "@chakra-ui/react"
import LoginModal from "../Components/LoginModal"

export default ({ children }) => {
    const margin =  useBreakpointValue({base:"160px",md:"110px",lg:"156px"})
    return <>
        {
            //this component is for pages which need navbar
        }
        <Navbar />
        <LoginModal />
        <Box mt={margin}>
            {children}
        </Box>
    </>
}