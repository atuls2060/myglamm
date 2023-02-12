import { Flex, Container, Heading, Grid, useBreakpointValue, GridItem, HStack, Select, Text } from "@chakra-ui/react"
import ProductCard2 from "./ProductCard2"
import { getProductsbyCategory } from "../Utils/database"

import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Pagination from "./Pagination/Pagination"

export default ({ }) => {
    const [limit, setLimit] = useState(5);
    const [currPage, setCurrPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [products, setProducts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [order,setOrder] = useState("asc")
    const category = searchParams.get("category")
    const colCount = useBreakpointValue({
        base: '1',
        sm: '2',
        lg: '3',
    })
    const containerWidth = useBreakpointValue({
        base: "90%",
        sm: "90%",
        lg: '80%',
    })

    const getData = async (category) => {
        console.log({category})
        let data = await getProductsbyCategory(category, order)
        setTotalPage(parseInt(data.length / limit))
        let start = (currPage - 1) * totalPage
        let end = (currPage - 1) * totalPage + limit
        data = data.filter((item, index) => index >= start && index <= end)
        console.log({ currPage })
        setProducts(data)
    }
    useEffect(() => {
        getData(category)
    }, [category, currPage,order])
    console.log("colCount", colCount)
    console.log("containerWidth", containerWidth)
    return <Container mt="200px" maxW={containerWidth} mb="100px">

        <Heading display={"inline-block"} size={"xl"} textTransform={"uppercase"} style={{ backgroundImage: "linear-gradient(180deg,transparent 60%,#ff9797 30px)" }}>
            {category}
        </Heading>
        <HStack spacing="10px" alignItems="center" align="end" mt="20px">
            <Text>
                Filter by
            </Text>
            <HStack>
                <Select onChange={(e)=>setOrder(e.target.value)}>
                    <option value="asc">Low to high</option>
                    <option value="desc">High to low</option>
                </Select>
                <Select value={category} onChange={(e)=>setSearchParams({category:e.target.value})}>
                    <option value="makeup">Make Up</option>
                    <option value="skin">Skin</option>
                    <option value="haircare">Hair Care</option>
                </Select>
            </HStack>
        </HStack>
        <Grid mt={10} mb={10} gridTemplateColumns={`repeat(${colCount}, 1fr)`}
            gap={9}
        >
            {
                products?.map((item, index) => {
                    return <GridItem key={index} >
                        <Link to={`/products/${item.id}`}>
                            <ProductCard2 {...item} />
                        </Link>
                    </GridItem>
                })
            }
        </Grid>
        <Pagination currPage={currPage} totalPage={totalPage} setCurrPage={(changeTo) => setCurrPage(changeTo)} />
    </Container>
}