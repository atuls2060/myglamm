import Styles from "./navbar.module.css"
import { Box, HStack, Img, Input, InputGroup, Flex, Container, Text, InputLeftElement, VStack, Divider } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { Link, useNavigate } from "react-router-dom"
import ProductCard from "../Components/ProductCard"
import Links from "../Utils/navbarData"
import ProfileDropDown from "./ProfileDropDown"
import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from './../Contexts/AuthContext';
import { CartContext } from './../Contexts/CartContext';
import { getProductsbyKeyword } from "../Utils/database"
import ResultItem from "./ResultItem"
export default () => {
    const { itemCount } = useContext(CartContext)
    const { authState, toggleModal } = useContext(AuthContext)
    const [result, setResult] = useState([])
    const timerRef = useRef(null);
    const [keyword, setKeyword] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();



    const changeHandler = (e) => {
        const val = e.target.value
        setKeyword(val)
        search(val)
    }

    const search = (keyword) => {
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current)
            timerRef.current = null
        }
        timerRef.current = setTimeout(() => {
            getSearchResults(keyword)
        }, 700)
    }
    const getSearchResults = async (keyword) => {
        let data = await getProductsbyKeyword(keyword)
        setResult(data);
        if(data.length > 0){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    const openSearchResult = (id)=>{
        navigate(`/products/${id}`)
        console.log(id)
        setShow(false)
    }

    useEffect(() => {

    }, [itemCount])

    return <Box m={0} className={Styles.navbar}  >
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
        <Box pb={1} boxShadow={"sm"} pt={4} borderBottom="1px solid #E0E0E0" bg={"white"} pointerEvents="auto">
            <Container maxW="90%" bg={"white"}>
                <Flex p={2} justifyContent={"space-between"}>
                    <HStack w="60%" spacing="50px">
                        <Link to={"/"}><Img maxHeight="50px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" /></Link>
                        <InputGroup>
                            <InputLeftElement><Search2Icon /></InputLeftElement>
                            <Input className={Styles.search_input} value={keyword} onChange={changeHandler} focusBorderColor={"#daaa4d"} variant={"outline"} type="text" placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc" />
                            <VStack display={show ? "block" : "none"} p={2} align={"start"} gap={2} className={Styles.search_result_container}>
                                {
                                    result?.map((item, index) => {
                                        return <Link to={`/products/${item.id}`} onClick={()=>openSearchResult(item.id)}> <ResultItem  key={index} {...item} /></Link>
                                    })
                                }
                            </VStack>
                        </InputGroup>
                    </HStack>
                    <HStack spacing={5}>
                        <Link className={Styles.cart_bag} to="/cart">
                            {itemCount > 0 && <Text className={Styles.count_badge}>{itemCount}</Text>}
                            <Img cursor={"pointer"} width="auto" height="30px" src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Fbag.png?alt=media&token=da6a38ad-61ee-44f2-86ec-0621d4464e3b" alt="" />
                        </Link>
                        <Divider borderWidth=".5px" maxH="25px" bg="black" borderColor="lightgray" orientation="vertical" />
                        {
                            authState.isAuth ? <ProfileDropDown /> : <Img onClick={toggleModal} cursor={"pointer"} width="auto" height="25px" src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/logos%2Fuser.png?alt=media&token=dda43cad-d4bc-439c-9854-f3d93834ad34" alt="" />
                        }
                    </HStack>
                </Flex>
            </Container>

            <Container maxW="90%">
                <HStack className={Styles.links_container} spacing={0} textTransform={"uppercase"}>
                    {
                        Links.map((item, index) => {
                            return <Box key={index}>
                                <Link to={item.path} key={index} className={Styles.link}>{item.label}</Link>
                                <Box className={Styles.submenu_overlay}>
                                    <HStack align={"start"} p={4} spacing={20} fontSize={"sm"} className={Styles.submenu_container}>
                                        {
                                            item.submenu?.map((sub_item, index) => {
                                                return <VStack key={index} align={"start"}>
                                                    {
                                                        sub_item.submenu?.map((sub_item, index) => {
                                                            return <Link key={index} className={Styles.sub_link}>{sub_item}</Link>
                                                        })
                                                    }
                                                </VStack>

                                            })
                                        }

                                        {
                                            item.products?.map((product, index) => {
                                                return <ProductCard key={index} isNavBarCard={true}  {...product} />
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