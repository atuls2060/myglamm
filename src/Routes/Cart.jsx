import { Button, Card, Container, Flex, Heading, HStack, Img, Spacer, Text, useToast } from "@chakra-ui/react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useState, useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import CartItem from "../Components/CartItem";
import ProfileDropDown from "../Components/ProfileDropDown"
import { AuthContext } from "../Contexts/AuthContext";
import { CartContext } from './../Contexts/CartContext';


export default () => {
    const {total, cartItems} = useContext(CartContext);
    const navigate = useNavigate()
    const toast = useToast()

    const placeOrder = () => {
        if(cartItems.length === 0){
            toast({
                title: 'Nothing in your Cart',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            })
            return
        }
        onAuthStateChanged(getAuth(),(user)=>{
            if(user){
                navigate("/checkout")
            }else{
                navigate("/login")
            }
        })
    }

    return <>
        <Card>
            <Flex p={3} justifyContent={"space-around"}>
                <Link to={"/"}><Img maxHeight="50px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" /></Link>
                <ProfileDropDown />
            </Flex>
        </Card>
        <Container maxW="80%">
            <Heading mt={10} mb={10} size="lg">MY BAG({cartItems.length})</Heading>
            {
                cartItems?.map((item,index) => {
                    return <CartItem {...item} id={index} />
                })
            }


            <HStack mt={10} padding="10px 50px" bg={"#F4F4F4"} justifyContent={"space-between"}>
                <Text>You will earn  ₹ 149 Good Points as cashback on this order.</Text>
                <Text>GRAND TOTAL ₹{total}</Text>
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
                PROCEED TO CHECKOUT
            </Button>
        </Container>
    </>
}