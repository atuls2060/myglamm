import { Box, Button, Card, CardBody, Container, Flex, Heading, HStack, Img, Input, Spacer, Text, useToast, VStack } from "@chakra-ui/react"
import { getAuth } from "firebase/auth";
import { useContext, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import CartItem from "../Components/CartItem";
import ProfileDropDown from "../Components/ProfileDropDown"
import { saveOrder } from "../Utils/database";
import { CartContext } from './../Contexts/CartContext';


export default () => {
    const { total, cartItems, reloadCartItems } = useContext(CartContext);
    const [name, setName] = useState("")
    const [district, setDistrict] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()
    const toast = useToast()

    const placeOrder = () => {

        if (name == "" || district == "" || city == "" || pincode == "" || address == "") {
            toast({
                title: 'All field required',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
            return
        }
        makeOrder()
        navigate("/", { replace: true })
        reloadCartItems()
        toast({
            title: 'Order Placed',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "top"
        })

        // navigate("/")
    }

    const makeOrder = () => {
        let userId = getAuth().currentUser.uid
        console.log({ userId, cartItems })
        localStorage.setItem("cartItems", JSON.stringify([]))

        for (let i = 0; i < cartItems.length; i++) {
            const {id,image,offerPrice,quantity} = cartItems[i];
            const order = {
                userId: userId,
                productId: id,
                imgUrl: image,
                price: offerPrice,
                qty: quantity,
                delivered: false,
                address:{
                    name,
                    city,
                    district,
                    pincode,
                    address
                }
            }
            saveOrder(order)
        }


    }

    return <>
        <Card>
            <Flex p={3} justifyContent={"space-around"}>
                <Link to={"/"}><Img maxHeight="50px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" /></Link>
                <ProfileDropDown />
            </Flex>
        </Card>
        <Container maxW="80%">
            <Heading mt={10} mb={10} size="lg">Checkout</Heading>
            <HStack justifyContent="space-between">
                <Box>

                    {
                        cartItems?.map((item, index) => {
                            return <CartItem {...item} id={index} />
                        })
                    }
                </Box>
                <Card>
                    <CardBody>
                        <Heading mt="20px" size="lg">Order Summary</Heading>
                        <Text mt="20px">
                            You have {cartItems.length} items in your cart
                        </Text>
                        <Heading mt="20px" size="lg">Total: ₹{total}</Heading>
                    </CardBody>
                </Card>
            </HStack>
            <Card maxW="60%">
                <CardBody>
                    <VStack alignItems="start" spacing="20px">
                        <Heading size="md">Shipping Details</Heading>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" focusBorderColor="green" />
                        <Input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="District" focusBorderColor="green" />
                        <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" focusBorderColor="green" />
                        <Input value={pincode} onChange={(e) => setPincode(e.target.value)} type="number" placeholder="Pincode" focusBorderColor="green" />
                        <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" focusBorderColor="green" />
                    </VStack>
                </CardBody>
            </Card>
            <HStack mt={10} padding="10px 50px" bg={"#F4F4F4"} justifyContent={"space-between"}>
                <Text>You will earn  ₹ 149 Good Points as cashback on this order.</Text>
            </HStack>
            <Button mt={10} bg={"black"} color={"white"} size={'lg'} borderRadius="0"
                _hover={{ bg: '#292a2d' }}
                _active={{
                    bg: '#292a2d',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}

                onClick={placeOrder}
            >
                Place Order
            </Button>
        </Container>
    </>
}