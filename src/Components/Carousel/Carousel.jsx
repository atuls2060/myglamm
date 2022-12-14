import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { Box, Container, Img } from "@chakra-ui/react"
import Styles from "./carousel.module.css"
import { useEffect, useRef, useState } from "react"
export default () => {
    const carouselRef = useRef();
    const [load,setLoad] = useState(false);

    const slide = ()=>{
        carouselRef.current.scrollRight = 100;
        console.log( carouselRef.current.scrollRight)
        setLoad(!load)
    }

    useEffect(()=>{

    },[load])

    return <Box mt={5}>
        <Box ref={carouselRef} className={Styles.carousel}>
            <BiLeftArrow onClick={slide} className={Styles.carousel_btn_left} >1</BiLeftArrow>
            <Img className={Styles.carousel_img} src="https://files.myglamm.com/site-images/original/ultimatte1920x527_1.jpg" alt="" />
            <Img className={Styles.carousel_img} src="https://files.myglamm.com/site-images/original/MM1920x527_2.png" alt="" />
            <Img className={Styles.carousel_img} src="https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527---CTA-yes_8.png" alt="" />
            <BiRightArrow className={Styles.carousel_btn_right} />
        </Box>
      

    </Box>
} 