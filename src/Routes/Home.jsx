import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { Text, Card, Flex, Img, Image, CardBody, Container, Box, PopoverArrow, Circle, HStack, Spacer, Heading } from "@chakra-ui/react"
import Carousel from "../Components/Carousel/Carousel"

export default () => {
    return <>
        <Img src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279.gif" alt="banner" />

        <Carousel />
        <Container mt={20} maxW="80%">

            <Heading display={"inline-block"} size={"lg"} textTransform={"uppercase"} style={{ backgroundImage: "linear-gradient(180deg,transparent 60%,#ff9797 30px)" }}>In The Spotlight</Heading>

            <Flex gap={5} p={5}>
                <Card position="relative" boxShadow={"md"}>
                    <Img w="100%" src="https://files.myglamm.com/site-images/original/MM700x488_4.jpg" />
                    <HStack style={{ backgroundColor: "hsla(0,0%,100%,.75)" }} width="100%" bottom={0} position="absolute" p={2}>
                        <Text>
                            Precision Eyebrow Definer
                        </Text>
                        <Spacer />
                        <Circle p={2} bg={"gray.300"}>
                            <ArrowForwardIcon />
                        </Circle>
                    </HStack>
                </Card >
                <Card boxShadow={"md"}>
                    <Img w="100%" src="https://files.myglamm.com/site-images/original/Moist700x488.jpg" />
                    <HStack style={{ backgroundColor: "hsla(0,0%,100%,.75)" }} width="100%" bottom={0} position="absolute" p={2}>
                        <Text>Moist Matte Lipstick</Text>
                        <Spacer />
                        <Circle p={2} bg={"gray.300"}>
                            <ArrowForwardIcon />
                        </Circle>
                    </HStack>
                </Card>
                <Card boxShadow={"md"}>
                    <Img w="100%" src="https://files.myglamm.com/site-images/original/700x488-1.gif" />
                    <HStack style={{ backgroundColor: "hsla(0,0%,100%,.75)" }} width="100%" bottom={0} position="absolute" p={2}>
                        <Text>
                            POPxo Lip Gloss Kit
                        </Text>
                        <Spacer />
                        <Circle p={2} bg={"gray.300"}>
                            <ArrowForwardIcon />
                        </Circle>
                    </HStack>

                </Card>
            </Flex>
        </Container>
    </>
}