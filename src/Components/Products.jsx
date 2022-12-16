import { Flex, Container, Heading, Grid } from "@chakra-ui/react"
import ProductCard2 from "./ProductCard2"
import products from "../Utils/products"

export default ({ heading, offers }) => {
    return <Container mt={20} maxW="80%">

        <Heading display={"inline-block"} size={"xl"} textTransform={"uppercase"} style={{ backgroundImage: "linear-gradient(180deg,transparent 60%,#ff9797 30px)" }}>
            Makeup
        </Heading>
        <Grid mt={10} mb={10} templateColumns='repeat(3, 1fr)'
            gap={9}
        >
            {
                products?.map((item) => {
                    return <ProductCard2 {...item} />
                })
            }
        </Grid>
    </Container>
}