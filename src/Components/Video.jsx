import { Box, Container, Heading, Img, Text, VStack } from "@chakra-ui/react"
import {useRef } from "react"


export default () => {
    let videoRef = useRef();

    const clickHandler = ()=>{
        let video = videoRef.current;

        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    }

    return <Box  position="relative">
        <Container  left="50%" transform={"translate(-50%,-50%)"} top={"50%"} maxW="70%" position={"absolute"} color="white" zIndex={10}>
            <VStack spacing={10} >
                <Heading>
                    BRAND STORY
                </Heading>
                <Text>Backed by one of Europe's largest natural beauty companies, MyGlamm collaborated with global experts and makeup artists to bring about exciting innovation in makeup to accomplish our single, focused goal – make looking glamorous effortless!</Text>
                <Img onClick={clickHandler} cursor={"pointer"} src="https://files.myglamm.com/site-images/original/ico-play.png" alt="" />
            </VStack>
        </Container>
        <Box pointerEvents={"none"}>
        <video ref={videoRef}  width="100%" height="auto" autoPlay={true} >
            <source src="https://www.myglamm.com/images/TellMyGlammWhatYouWant.webm" type="video/webm" />
        </video>
        </Box>
    </Box>
}