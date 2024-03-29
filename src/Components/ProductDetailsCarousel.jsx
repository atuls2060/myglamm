import Styles from "./product_detail_carousel.module.css";
import { VStack, HStack, Img, Box, useBreakpointValue, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default ({ images = [],image}) => {
    const [currImage, setCurrImage] = useState("");
    const imgRef = useRef();
    const img2Ref = useRef();
    const img3Ref = useRef();
    const direction = useBreakpointValue({ base: "column", lg: "row"})
    const maxWidth = useBreakpointValue({ base: "90%", md: "60%",lg:"40%" })

    const changeImage = (index) => {
        setCurrImage(images[index])
    }

    const zoom = (e) => {
        let style = img2Ref.current.style,
            x = e.pageX - imgRef.current.offsetLeft,
            y = e.pageY - imgRef.current.offsetTop,
            imgWidth = imgRef.current.offsetWidth,
            imgHeight = imgRef.current.offsetHeight,
            xperc = ((x / imgWidth) * 100),
            yperc = ((y / imgHeight) * 100);

        //lets user scroll past right edge of image
        if (x > (.01 * imgWidth)) {
            xperc += (.1 * xperc);
        };

        //lets user scroll past bottom edge of image
        if (y >= (.01 * imgHeight)) {
            yperc += (.1 * yperc);
        };

        style.backgroundPositionX = (xperc - 60) + '%';
        style.backgroundPositionY = (yperc - 75) + '%';



        img3Ref.current.style.backgroundPositionX = (xperc - 60) + '%';
        img3Ref.current.style.backgroundPositionY = (yperc - 75) + '%';

        let posX = x - 150;
        let posY = y - 280;
        if (posX < imgWidth - 29) {
            img3Ref.current.style.left = (x - 150) + 'px';
        }
        if (posY < imgHeight - 99) {
            img3Ref.current.style.top = (y - 280) + 'px';
        }
    }


    return <Stack  direction={direction} maxW={maxWidth} position={"relative"}>
        <Stack hidden={direction === "column"} direction={"column"} spacing={5} maxW="70px">
            {
                images?.map((item, index) => {
                    return <Img onClick={() => changeImage(index)} src={item} />
                })
            }
        </Stack>
        <Img ref={imgRef} onMouseMove={zoom} className={Styles.product_image} width="380px" src={currImage === "" ? image:currImage} alt="" />
        <Box ref={img2Ref} className={Styles.product_zoom_image} width="380px" backgroundImage={currImage === "" ? image:currImage} alt="" />
        <Box ref={img3Ref} className={Styles.product_zoom_image_glass} width="380px" backgroundImage={currImage === "" ? image:currImage} alt="" />
    </Stack>
}