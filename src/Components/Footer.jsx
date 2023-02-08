import { Box, Container, Heading, HStack, Img, Input, Button, VStack, Text, Flex, Divider, useBreakpointValue, Show } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Styles from "./footer.module.css"
export default () => {
    const direction = useBreakpointValue({ base: "column", lg: "row" })
    const spacing = useBreakpointValue({ base: "40px", lg: "0px" })
    return <Container maxW="90%" mt={10}>
        <Show below="lg">
            <VStack spacing={5} align="start" className={Styles.links_container}>
                    <Flex flexDirection="row" gap="20px" flexWrap="wrap">
                        <Link>LIPS</Link>
                        <Link>Lipstick </Link>
                        <Link>Crayon Lipstick </Link>
                        <Link>Matte Lipstick </Link>
                        <Link>Hi-Shine Lipstick </Link>
                        <Link>Liquid Lipstick </Link>
                        <Link>Lip Gloss </Link>
                        <Link>Hi-Shine Lipgloss </Link>
                    </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>FACE</Link>
                    <Link>Face Sets</Link>
                    <Link>Fixing Powder</Link>
                    <Link>Primer</Link>
                    <Link>Concealer</Link>
                    <Link>Foundation</Link>
                    <Link>Compact</Link>
                    <Link>Banana Powder</Link>
                    <Link>Highlighter</Link>
                    <Link>Blush</Link>
                    <Link>Bronzer</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>EYES</Link>
                    <Link>Eye Shadow</Link>
                    <Link>Eyeliner</Link>
                    <Link>Eyebrows</Link>
                    <Link>Glitter</Link>
                    <Link>Mascara</Link>
                    <Link>Kajal</Link>
                    <Link>Eyeshadow Brushes</Link>
                    <Link>Eye Combos</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>NAILS</Link>
                    <Link>Nail Polish</Link>
                    <Link>Matte Nail Polish</Link>
                    <Link>Nail Lacquer</Link>
                    <Link>SKINCARE</Link>
                    <Link>Moisturiser</Link>
                    <Link>Night Cream</Link>
                    <Link>Eye Cream</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>Skincare Kits</Link>
                    <Link>Cleansing Products</Link>
                    <Link>Exfoliator & Scrub</Link>
                    <Link>Face Wash</Link>
                    <Link>Cleanser</Link>
                    <Link>Mask</Link>
                    <Link>Face Pack</Link>
                    <Link>Sheet Mask</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>BATH & BODY</Link>
                    <Link>Shower Gels</Link>
                    <Link>Soaps</Link>
                    <Link>Body Lotion</Link>
                    <Link>Body Spray & Mists</Link>
                    <Link>Hand Wash</Link>
                    <Link>Foot Cream</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>SANITIZING CARE</Link>
                    <Link>Sanitizing Wipes</Link>
                    <Link>Sanitizing Kits</Link>
                    <Link>Sanitizing Spray</Link>
                    <Link>Hand Sanitizer</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>KITS AND COMBOS</Link>
                    <Link>Makeup Kits</Link>
                    <Link>Bridal Makeup Kits</Link>
                    <Link>Makeup Combo</Link>
                    <Link>Makeup Gift Sets</Link>
                    <Link>Cosmetics Kits & Combos</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>HAIR CARE</Link>
                    <Link>Shampoo</Link>
                    <Link>Conditioner</Link>
                    <Link>Hair Oil</Link>
                    <Link>Serum</Link>
                    <Link>Hair Mask</Link>
                    <Link>Combos</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>MYGLAMMSTUDIO</Link>
                    <Link>Style</Link>
                    <Link>Lifestyle</Link>
                    <Link>Trends</Link>
                    <Link>Tips</Link>
                    <Link>Beauty</Link>
                    <Link>Tutorials</Link>
                </Flex>
                <Flex flexWrap="wrap" gap="20px">
                    <Link>KNOW MORE</Link>
                    <Link>About Us</Link>
                    <Link>Exclusive Offers</Link>
                    <Link>Refer & Earn</Link>
                    <Link>myglammPARTIES</Link>
                    <Link>Store Locator</Link>
                    <Link>Press & Media</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                </Flex>
            </VStack>
        </Show>
        <Show above="lg">
            <HStack spacing={5} align="start" className={Styles.links_container}>
                <VStack align="start">
                    <Link>LIPS</Link>
                    <Link>Lipstick </Link>
                    <Link>Crayon Lipstick </Link>
                    <Link>Matte Lipstick </Link>
                    <Link>Hi-Shine Lipstick </Link>
                    <Link>Liquid Lipstick </Link>
                    <Link>Lip Gloss </Link>
                    <Link>Hi-Shine Lipgloss </Link>
                    <Link>Lip Liner </Link>
                    <Link>Lip Balm </Link>
                    <Link>Glitter </Link>
                    <Link>Lip Stain </Link>
                    <Link>Lipstick Set </Link>
                    <Link>Lip Kit </Link>
                    <Link>Find Your Lipstick </Link>
                </VStack>
                <VStack align="start">
                    <Link>FACE</Link>
                    <Link>Face Sets</Link>
                    <Link>Fixing Powder</Link>
                    <Link>Primer</Link>
                    <Link>Concealer</Link>
                    <Link>Foundation</Link>
                    <Link>Compact</Link>
                    <Link>Banana Powder</Link>
                    <Link>Highlighter</Link>
                    <Link>Blush</Link>
                    <Link>Bronzer</Link>
                    <Link>Sindoor</Link>
                    <Link>Cheek Stain</Link>
                    <Link>Setting Powder</Link>
                    <Link>Makeup Accessories</Link>
                    <Link>Makeup Brushes</Link>
                </VStack>
                <VStack align="start">
                    <Link>EYES</Link>
                    <Link>Eye Shadow</Link>
                    <Link>Eyeliner</Link>
                    <Link>Eyebrows</Link>
                    <Link>Glitter</Link>
                    <Link>Mascara</Link>
                    <Link>Kajal</Link>
                    <Link>Eyeshadow Brushes</Link>
                    <Link>Eye Combos</Link>
                </VStack>
                <VStack align="start">
                    <Link>NAILS</Link>
                    <Link>Nail Polish</Link>
                    <Link>Matte Nail Polish</Link>
                    <Link>Nail Lacquer</Link>
                    <Link>SKINCARE</Link>
                    <Link>Moisturiser</Link>
                    <Link>Night Cream</Link>
                    <Link>Eye Cream</Link>
                    <Link>Body lotion</Link>
                    <Link>Serum</Link>
                    <Link>Sunscreen</Link>
                </VStack>
                <VStack align="start">
                    <Link>Skincare Kits</Link>
                    <Link>Cleansing Products</Link>
                    <Link>Exfoliator & Scrub</Link>
                    <Link>Face Wash</Link>
                    <Link>Cleanser</Link>
                    <Link>Mask</Link>
                    <Link>Face Pack</Link>
                    <Link>Sheet Mask</Link>
                </VStack>
                <VStack align="start">
                    <Link>BATH & BODY</Link>
                    <Link>Shower Gels</Link>
                    <Link>Soaps</Link>
                    <Link>Body Lotion</Link>
                    <Link>Body Spray & Mists</Link>
                    <Link>Hand Wash</Link>
                    <Link>Foot Cream</Link>
                </VStack>
                <VStack align="start">
                    <Link>SANITIZING CARE</Link>
                    <Link>Sanitizing Wipes</Link>
                    <Link>Sanitizing Kits</Link>
                    <Link>Sanitizing Spray</Link>
                    <Link>Hand Sanitizer</Link>
                </VStack>
                <VStack align="start">
                    <Link>KITS AND COMBOS</Link>
                    <Link>Makeup Kits</Link>
                    <Link>Bridal Makeup Kits</Link>
                    <Link>Makeup Combo</Link>
                    <Link>Makeup Gift Sets</Link>
                    <Link>Cosmetics Kits & Combos</Link>
                </VStack>
                <VStack align="start">
                    <Link>HAIR CARE</Link>
                    <Link>Shampoo</Link>
                    <Link>Conditioner</Link>
                    <Link>Hair Oil</Link>
                    <Link>Serum</Link>
                    <Link>Hair Mask</Link>
                    <Link>Combos</Link>
                </VStack>
                <VStack align="start">
                    <Link>MYGLAMMSTUDIO</Link>
                    <Link>Style</Link>
                    <Link>Lifestyle</Link>
                    <Link>Trends</Link>
                    <Link>Tips</Link>
                    <Link>Beauty</Link>
                    <Link>Tutorials</Link>
                </VStack>
                <VStack align="start">
                    <Link>KNOW MORE</Link>
                    <Link>About Us</Link>
                    <Link>Exclusive Offers</Link>
                    <Link>Refer & Earn</Link>
                    <Link>myglammPARTIES</Link>
                    <Link>Store Locator</Link>
                    <Link>Press & Media</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Shipping and Delivery policy</Link>
                    <Link>Returns and Replacements</Link>
                    <Link>Loyalty Program Policy</Link>
                    <Link>Sitemap</Link>
                    <Link>Responsible Disclosure Policy</Link>
                </VStack>
            </HStack>
        </Show>
        <Flex gap={spacing} flexDirection={direction} mt={10} mb={10} justifyContent="space-around">
            <VStack align="start">
                <Heading size={"sm"}>SUBSCRIBE FOR MYGLAMM EMAILS</Heading>
                <HStack spacing={0}>
                    <Input type='text' placeholder='Please enter valid email ID'
                        focusBorderColor="black"
                        borderRadius={0}
                        borderWidth={1}
                        borderColor="black"
                    />
                    <Button bg={"black"} color={"white"} minW={0} w="250px" borderRadius="0"
                        _hover={{ bg: '#292a2d' }}
                        _active={{
                            bg: '#292a2d',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                        }}
                    >
                        SUBSCRIBE NOW
                    </Button>
                </HStack>
            </VStack>
            <HStack justifyContent="space-between">
                <Text>STAY CONNECTED</Text>
                <Divider borderWidth=".5px" maxH="20px" bg="black" borderColor="black" orientation="vertical" />
                <Img maxW="30px" src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Finstagram.svg?alt=media&token=e21f6332-5591-4091-9f5f-0e6b6e3cd370" alt="" />
                <Img maxW="30px" src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Ftwitter.svg?alt=media&token=de5e0250-cc29-4160-a0fa-076d30f0e6b3" alt="" />
                <Img maxW="30px" src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Fpinterest.svg?alt=media&token=566bff7d-00d9-4e66-8da3-63e3de01b911" alt="" />
                <Img maxW="30px" src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Fyoutube.svg?alt=media&token=931ef006-6923-45b6-9831-d547ab194164" alt="" />
            </HStack>
            <VStack justifyContent="space-between">
                <Heading size={"sm"}>EXPERIENCE THE MYGLAMM MOBILE APP</Heading>
                <HStack spacing={5}>
                    <Img maxW="150px" src="https://files.myglamm.com/site-images/original/iosStore.png" alt="" />
                    <Img maxW="150px" src="https://files.myglamm.com/site-images/original/playStore.png" alt="" />
                </HStack>
            </VStack>
        </Flex>
    </Container>
}










