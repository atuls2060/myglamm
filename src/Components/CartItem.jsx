import Quantity from "../Components/Quantity"
import { useState } from "react"
import { CloseIcon } from "@chakra-ui/icons"
import { Box, HStack, Img, Text } from "@chakra-ui/react"


export default ({image,name,offerPrice,quantity=1}) => {
    const [newQty,setNewQty] = useState(quantity)
    return <>
        <Box p="10px" borderBottom="1px solid #E0E0E0">
            <HStack>
                <HStack flex={1}  align="start" spacing={"10"}>
                <Img maxW="100px" src={image} alt="" />
                <Text>{name}</Text>
                </HStack>
                <HStack flex={1} justifyContent={"space-around"} alignSelf={"center"} >
                    <Text>{offerPrice}</Text>
                    <Quantity changeQty={(changeTo)=>setNewQty(changeTo)} defaultValue={quantity} />
                    <Text>₹{parseInt(offerPrice.substring(1))*newQty}</Text>
                    <CloseIcon cursor={"pointer"} color="gray" />
                </HStack>
            </HStack>
        </Box></>
}