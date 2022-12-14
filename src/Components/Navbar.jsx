import Styles from "./navbar.module.css"
import { BiStore, BiGift, BiShoppingBag, BiUser } from "react-icons/bi"
import { Box, HStack, Img, Input, InputGroup, Flex, Container, Text, ButtonGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
export default () => {

    let Links = [
        {
            label: "Home"
        },
        {
            label: "Makeup"
        },
        {
            label: "Hair Care"
        },
        {
            label: "Skin Care"
        }
        ,
        {
            label: "Sanitizing Care"
        },
        {
            label: "Collection"
        }
        ,

        {
            label: "Rewards"
        },
        {
            label: "Collection"
        },
        {
            label: "LYD Studio"
        },
        {
            label: "Offers"
        }
    ]

    return <Box m={0}>
        <Box backgroundColor={"#FEE8E8"}>
            <Container maxW="90%">
                <Flex align="center" p={2} justifyContent={"space-between"}>
                    <HStack w="70%" spacing="50px">
                        <HStack>
                            <BiGift />
                            <Text> Pick any products at Rs 199</Text>
                        </HStack>
                        <Text>Shop Now</Text>
                    </HStack>
                    <HStack>
                        <BiStore />
                        <Text>  LYD Store</Text>
                    </HStack>
                </Flex>
            </Container>
        </Box>
        <Container maxW="90%">
            <Flex p={2} justifyContent={"space-between"}>
                <HStack w="60%" spacing="50px">
                    <Img maxHeight="50px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" />
                    <InputGroup>
                        <InputLeftElement><Search2Icon /></InputLeftElement>
                        <Input variant={"outline"} type="text" placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc" />
                    </InputGroup>
                </HStack>
                <ButtonGroup>
                    <BiShoppingBag />
                    <BiUser />
                </ButtonGroup>
            </Flex>
        </Container>
        <Container maxW="90%">
            <HStack textTransform={"uppercase"} mt={2} mb={2}>
                {
                    Links.map((item) => {
                        return <Link className={Styles.link}>{item.label}</Link>
                    })
                }
            </HStack>
        </Container>
    </Box>
}