import { Box, HStack, Img, Text } from "@chakra-ui/react"

export default ({ image, name, id }) => {
    return <>
        <HStack spacing={5} p={2} borderRadius={"4px"} w={"100%"} _hover={{ backgroundColor: "#f4f4f4" }} cursor={"pointer"} align={"start"}>
            <Img maxH="50px" src={image} alt="" />
            <Text noOfLines={1}>{name}</Text>
        </HStack>
    </>
}