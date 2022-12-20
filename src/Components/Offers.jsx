import { Flex, Container, Heading } from "@chakra-ui/react"
import OfferCard from "./OfferCard"
export default ({ heading, offers }) => {
    return <Container mt={20} maxW="80%">

        <Heading display={"inline-block"} size={"lg"} textTransform={"uppercase"} style={{ backgroundImage: "linear-gradient(180deg,transparent 60%,#ff9797 30px)" }}>
            {
                heading
            }
        </Heading>
        <Flex gap={5} p={5}>
            {
                offers.map((item,index) => {
                    return <OfferCard key={index} {...item} />
                })
            }
        </Flex>
    </Container>
}