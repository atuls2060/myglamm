import Quantity from "../Components/Quantity"
import { CloseIcon } from "@chakra-ui/icons"
import { Box, HStack, Img, Text } from "@chakra-ui/react"


export default ({image,name,offerPrice,quantity}) => {
    
    return <>
        <Box p="10px" borderBottom="1px solid #E0E0E0">
            <HStack>
                <HStack flex={1}  align="start" spacing={"10"}>
                <Img maxW="100px" src={image} alt="" />
                <Text>{name}</Text>
                </HStack>
                <HStack flex={1} justifyContent={"space-around"} alignSelf={"center"} >
                    <Text  >{offerPrice}</Text>
                    <Quantity defaultValue={quantity} />
                    <Text>₹438</Text>
                    <CloseIcon cursor={"pointer"} color="gray" />
                </HStack>
            </HStack>
        </Box></>
}