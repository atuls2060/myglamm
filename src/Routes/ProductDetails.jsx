import { StarIcon } from "@chakra-ui/icons"
import { BiShoppingBag } from "react-icons/bi"
import { Container, Heading, Text, HStack, Divider, Button, Grid } from "@chakra-ui/react"
import ProductDetailsCarousel from "../Components/ProductDetailsCarousel"
import { useContext, useEffect, useState } from "react"
import { db } from "../Utils/firebase"
import { collection, getDocs } from "firebase/firestore";
import { CartContext } from './../Contexts/CartContext';
import { useParams } from "react-router-dom"
import getSingleProduct from "../Utils/getSingleProduct"

export default () => {
    const { updateItemCount, cartItems, setCartItems } = useContext(CartContext);
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)
    const { id } = useParams();


    const getProduct = async () => {
        const data = getSingleProduct(parseInt(id) - 1);
        setProduct(data)
    }

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });

    }

    const addToCartHandler = () => {
        updateItemCount()
        setQuantity(quantity + 1)
        setCartItems([...cartItems, { ...product, quantity: quantity + 1 }])
    }

    useEffect(() => {
        getProduct()
        getData()
    }, [])


    const { images, image, name, subtitle, offerPrice, rating = 5, totalRating = 16 } = product;

    return <Container mt="200px" maxW="80%">
        <HStack align={"start"} spacing={10}>
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
        </HStack>
    </Container >
}