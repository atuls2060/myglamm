import { Flex, Container, Heading, Grid } from "@chakra-ui/react"
import ProductCard2 from "./ProductCard2"
import { getProductsbyCategory } from "../Utils/database"

import { Link, useSearchParams } from "react-router-dom"
import { useState } from "react"

export default ({ }) => {
    const [products, setProducts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category")

    const getData = async () => {
        let data = await getProductsbyCategory(category)

        setProducts(data)
    }

    useState(() => {
        getData()
    }, [products, category])

    return <Container mt="200px" maxW="80%">

        <Heading display={"inline-block"} size={"xl"} textTransform={"uppercase"} style={{ backgroundImage: "linear-gradient(180deg,transparent 60%,#ff9797 30px)" }}>
            {category}
        </Heading>
        <Grid mt={10} mb={10} templateColumns='repeat(3, 1fr)'
            gap={9}
        >
            {
                products?.map((item,index) => {
                    return <Link key={index} to={`/products/${item.id}`}>
                        <ProductCard2 {...item} />
                    </Link>
                })
            }
        </Grid>
    </Container>
}