import Styles from "./navbar.module.css"
import { Box, HStack, Img, Input, InputGroup, Flex, Container, Text, InputLeftElement, VStack, Divider } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import ProductCard from "../Components/ProductCard"
import Links from "../Utils/navbarData"
import { useContext } from "react"
import { AuthContext } from './../Contexts/AuthContext';
export default () => {
    const { toggleModal } = useContext(AuthContext)

    return <Box m={0} className={Styles.navbar} >
        <Box backgroundColor={"#FEE8E8"} >
            <Container maxW="90%" >
                <Flex align="center" p={2} justifyContent={"space-between"} >
                    <HStack w="70%" spacing="50px">
                        <HStack>
                            <Img src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Fgift.svg?alt=media&token=4495cbb4-b929-4f87-a6fd-14faa7590105" alt="" />
                            <Text fontSize={"13px"}> Pick any products at Rs 199</Text>
                        </HStack>
                        <Text fontSize={"13px"} color={"#FF9797"} fontWeight="bold">SHOP NOW</Text>
                    </HStack>
                    <HStack>
                        <Img src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Fhouse.svg?alt=media&token=ac31a8b3-8fcd-4a81-be91-a454ceb2a7e5" alt="" />
                        <Text fontSize={"14px"} fontWeight="500">  LYD Store</Text>
                    </HStack>
                </Flex>
            </Container>
        </Box>
        <Box bg={"white"} pointerEvents="auto">
            <Container maxW="90%" bg={"white"}>
                <Flex p={2} justifyContent={"space-between"}>
                    <HStack w="60%" spacing="50px">
                        <Link to={"/"}><Img maxHeight="50px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" /></Link>
                        <InputGroup>
                            <InputLeftElement><Search2Icon /></InputLeftElement>
                            <Input variant={"outline"} type="text" placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc" />
                        </InputGroup>
                    </HStack>
                    <HStack spacing={5}>
                        <Link to="/cart">
                            <Img cursor={"pointer"} width="auto" height="30px" src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Fbag.png?alt=media&token=da6a38ad-61ee-44f2-86ec-0621d4464e3b" alt="" />
                        </Link>
                        <Divider borderWidth=".5px" maxH="25px" bg="black" borderColor="lightgray" orientation="vertical" />
                        <Img onClick={toggleModal} cursor={"pointer"} width="auto" height="25px" src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Fuser.png?alt=media&token=dda43cad-d4bc-439c-9854-f3d93834ad34" alt="" />
                    </HStack>
                </Flex>
            </Container>

            <Container maxW="90%">
                <HStack className={Styles.links_container} spacing={0} textTransform={"uppercase"}>
                    {
                        Links.map((item, index) => {
                            return <Box>
                                <Link to={item.path} key={index} className={Styles.link}>{item.label}</Link>
                                <Box className={Styles.submenu_overlay}>
                                    <HStack align={"start"} p={4} spacing={20} fontSize={"sm"} className={Styles.submenu_container}>
                                        {
                                            item.submenu?.map((sub_item) => {
                                                return <VStack align={"start"}>
                                                    {
                                                        sub_item.submenu?.map((sub_item) => {
                                                            return <Link className={Styles.sub_link}>{sub_item}</Link>
                                                        })
                                                    }
                                                </VStack>

                                            })
                                        }

                                        {
                                            item.products?.map((product) => {
                                                return <ProductCard isNavBarCard={true}  {...product} />
                                            })
                                        }
                                    </HStack>
                                </Box>
                            </Box>
                        })
                    }
                </HStack>
            </Container>
        </Box>
    </Box >
}