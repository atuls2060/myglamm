import { Box, Container, Flex, Img, Show, useBreakpointValue } from "@chakra-ui/react"
import Carousel from "../Components/Carousel/Carousel"
import Offers from "../Components/Offers"
import { getProducts } from "../Utils/database"
import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer"
import Video from "../Components/Video"
import Links from "../Utils/navbarData";
import NavLinkItem from "../Components/NavLinkItem";
import { CartContext } from "../Contexts/CartContext";



// TODO: Replace the following with your app's Firebase project configuration



const deskImages = [{
    image: "https://files.myglamm.com/site-images/original/ultimatte1920x527_1.jpg",
},
{
    image: "https://files.myglamm.com/site-images/original/MM1920x527_2.png",
},
{
    image: "https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527---CTA-yes_8.png",
}]
const mobImages = [{
    image: "https://www.myglamm.com/_next/image?url=https%3A%2F%2Ffiles.myglamm.com%2Fsite-images%2Foriginal%2Fsurvey720x500.jpg&w=750&q=75",
},
{
    image: "https://www.myglamm.com/_next/image?url=https%3A%2F%2Ffiles.myglamm.com%2Fsite-images%2Foriginal%2F720x500-HP-Carousel-New-app-mweb_7.jpg&w=750&q=75",
},
{
    image: "https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527---CTA-yes_8.png",
},
{
    image: "https://www.myglamm.com/_next/image?url=https%3A%2F%2Ffiles.myglamm.com%2Fsite-images%2Foriginal%2FMMB720x500_10.png&w=750&q=75",
}]

let data = [
    {
        image: "https://files.myglamm.com/site-images/original/MM700x488_4.jpg",
        caption: 'Precision Eyebrow Definer',
    },
    {
        image: "https://files.myglamm.com/site-images/original/Moist700x488.jpg",
        caption: "Moist Matte Lipstick",
    },
    {
        image: "https://files.myglamm.com/site-images/original/700x488-1.gif",
        caption: "POPxo Lip Gloss Kit",
    }
]


export default () => {
    const [products, setProducts] = useState([])
    const device = useBreakpointValue({ base: "small", md: "large" })
    const slidesToShow = useBreakpointValue({ base: 1, md: "2",lg:4 })
    const containerWidth = useBreakpointValue({ base: "95%", md: "90%",lg:"80%" })

    const getData = async () => {
        const data = await getProducts()
        setProducts(data)
    }

   
    useEffect(() => {
        
        getData()
    }, [data])
    return <>
        <Show below="lg">
            <Flex mx="10px" overflowX="auto" gap="14px" justifyContent="space-between">
                {
                    Links.map((item, index) => index !== 0 && <NavLinkItem key={index} {...item} />)
                }
            </Flex>
        </Show>
        <Show above="lg">
            <Img src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279.gif" alt="banner" />
        </Show>
        <Carousel images={device === "small" ? mobImages : deskImages} />
        <Offers heading="In The Spotlight" offers={data} />

        <Container mt={100} maxW={containerWidth}>
            <Img src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/lit2240x614_3.jpg?alt=media&token=cb6a7947-e5b4-4e00-aa81-10d794e926d7" alt="banner" />
        </Container>
        <Carousel slidesToShow={slidesToShow} products={products} />
       <Show above="lg">
       <Video />
       </Show>
        <Footer />
    </>
}