import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Text, Card, Img, Circle, HStack, Spacer} from "@chakra-ui/react"
export default ({ image, caption }) => {
    return <Card position="relative" boxShadow={"md"}>
        <Img w="100%" src={image} />
        <HStack style={{ backgroundColor: "hsla(0,0%,100%,.75)" }} width="100%" bottom={0} position="absolute" p={2}>
            <Text>
                {caption}
            </Text>
            <Spacer />
            <Circle p={2} bg={"gray.300"}>
                <ArrowForwardIcon />
            </Circle>
        </HStack>
    </Card >
}