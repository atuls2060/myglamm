import Quantity from "../Components/Quantity"
import { useState, useContext } from "react"
import { CloseIcon } from "@chakra-ui/icons"
import { Box, HStack, Img, Text } from "@chakra-ui/react"
import { CartContext } from './../Contexts/CartContext';


export default ({ image, name, offerPrice, quantity, id }) => {
    const { removeFromCart, changeQty } = useContext(CartContext);
    return <>
        <Box p="10px" borderBottom="1px solid #E0E0E0">
            <HStack>
                <HStack alignItems="center" flex={1} align="start" spacing={"10"}>
                    <Img maxW="100px" src={image} alt="" />
                    <Text noOfLines={1}>{name}</Text>
                </HStack>
                <HStack flex={1} justifyContent={"space-around"} alignSelf={"center"} >
                    <Text>{offerPrice}</Text>
                    <Quantity changeQty={(changeTo) => changeQty(id, changeTo)} defaultValue={quantity} />
                    <Text>₹{parseInt(offerPrice) * quantity}</Text>
                    <CloseIcon onClick={() => removeFromCart(id)} cursor={"pointer"} color="gray" />
                </HStack>
            </HStack>
        </Box></>
}