import { StarIcon } from "@chakra-ui/icons"
import { BiShoppingBag } from "react-icons/bi"
import { Container, Heading, Text, HStack, Divider, Button, Grid } from "@chakra-ui/react"
import ProductDetailsCarousel from "../Components/ProductDetailsCarousel"
import { useEffect } from "react"
import { db } from "../Utils/firebase"
import { collection, getDocs } from "firebase/firestore";

export default () => {

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });

    }

    useEffect(() => {
        getData()
    }, [])
    return <Container mt={70} maxW="80%">
        <HStack align={"start"} spacing={10}>
            <ProductDetailsCarousel />
            <Grid align="start">
                <Heading fontSize={"lg"} lineHeight="30px">MYGLAMM SUPER SERUM COMPACT - 102W BEIGE</Heading>
                <Text mt={1} fontSize="lg">
                    Skin-perfecting Compact Powder With Hyaluronic Acid
                </Text>
                <HStack mt={4}>
                    <Text fontWeight="400" fontSize="3xl">
                        5
                    </Text>
                    <StarIcon fontSize={"2xl"} color="palegoldenrod" />
                    <Text>
                        14 ratings
                    </Text>
                </HStack>
                <Divider orientation="vertical" />
                <HStack mt={5}>
                    <Text fontWeight="400" fontSize="3xl">
                        ₹499
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