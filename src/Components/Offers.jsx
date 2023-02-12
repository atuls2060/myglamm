import { Flex, Container, Heading, useBreakpointValue, Grid } from "@chakra-ui/react"
import OfferCard from "./OfferCard"
export default ({ heading, offers }) => {
    const containerWidth = useBreakpointValue({ base: "95%", md: "90%",lg:"80%" })
    const colCount = useBreakpointValue({ base: "1", md: "3",lg:"3" })
    return <Container mt={20} maxW={containerWidth}>

        <Heading display={"inline-block"} size={"lg"} textTransform={"uppercase"} style={{ backgroundImage: "linear-gradient(180deg,transparent 60%,#ff9797 30px)" }}>
            {
                heading
            }
        </Heading>
        <Grid gap={5} mt="20px" gridTemplateColumns={`repeat(${colCount},1fr)`}>
            {
                offers.map((item,index) => {
                    return <OfferCard key={index} {...item} />
                })
            }
        </Grid>
    </Container>
}