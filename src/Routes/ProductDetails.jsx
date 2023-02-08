import { StarIcon } from "@chakra-ui/icons"
import { BiShoppingBag } from "react-icons/bi"
import { Container, Heading, Text, HStack, Divider, Button, Grid, Stack, useBreakpointValue } from "@chakra-ui/react"
import ProductDetailsCarousel from "../Components/ProductDetailsCarousel"
import { useContext, useEffect, useState } from "react"
import { CartContext } from './../Contexts/CartContext';
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../Utils/database"

export default () => {
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const direction = useBreakpointValue({ base: "column", lg: "row"})
    const containerWidth = useBreakpointValue({ base: "95%", md: "90%",lg:"80%" })

    const addToCartHandler = () => {
        addToCart(product)
    }

    const getData = async () => {
        const data = await getSingleProduct(id)
        setProduct(data)
    }
    useEffect(() => {
        getData()
    }, [id])


    const { images, image, name, subtitle, offerPrice, rating = 5, totalRating = 16 } = product;

    return <Container mt="200px" maxW={containerWidth}>
        <Stack direction={direction} align={"start"} spacing={10}>
            <ProductDetailsCarousel images={images} image={image} />
            <Grid align="start">
                <Heading fontSize={"lg"} lineHeight="30px">{name}</Heading>
                <Text mt={1} fontSize="lg">
                    {subtitle}
                </Text>
                <HStack mt={4}>
                    <Text fontWeight="400" fontSize="3xl">
                        {rating}
                    </Text>
                    <StarIcon fontSize={"2xl"} color="palegoldenrod" />
                    <Text>
                        {totalRating} ratings
                    </Text>
                </HStack>
                <Divider orientation="vertical" />
                <HStack mt={5}>
                    <Text fontWeight="400" fontSize="3xl">
                        {
                            offerPrice
                        }
                    </Text>
                    <del>

                    </del>
                </HStack>
                <Text mt={1} fontSize="lg">
                    (MRP incl. of all taxes)
                </Text>
                <HStack mt={10} spacing={10}>
                    <Button leftIcon={<BiShoppingBag />} bg={"black"} color={"white"} size={'lg'} borderRadius="0"
                        _hover={{ bg: '#292a2d' }}
                        _active={{
                            bg: '#292a2d',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                        }}
                        onClick={addToCartHandler}
                    >
                        Add To Bag
                    </Button>
                    <Text textTransform={"uppercase"} fontWeight={"medium"} color={"black"} fontSize="sm">
                        Free Gift On Purchase
                    </Text>
                </HStack>
            </Grid>
        </Stack>
    </Container >
}