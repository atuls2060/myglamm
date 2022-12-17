import { Container, Img } from "@chakra-ui/react"
import Carousel from "../Components/Carousel/Carousel"
import Offers from "../Components/Offers"
import products from "../Utils/products"
import { db } from "../Utils/firebase"
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";


// TODO: Replace the following with your app's Firebase project configuration



const images = [{
    image: "https://files.myglamm.com/site-images/original/ultimatte1920x527_1.jpg",
},
{
    image: "https://files.myglamm.com/site-images/original/MM1920x527_2.png",
},
{
    image: "https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527---CTA-yes_8.png",
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

    const addUser = async () => {
        console.log("adding")
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    useEffect(() => {
        //addUser()
    }, [])
    return <>
        <Img src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279.gif" alt="banner" />
        <Carousel images={images} />
        <Offers heading="In The Spotlight" offers={data} />

        <Container mt={100} maxW="80%">
            <Img src="https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/lit2240x614_3.jpg?alt=media&token=cb6a7947-e5b4-4e00-aa81-10d794e926d7" alt="banner" />
        </Container>
        <Carousel slidesToShow={4} products={products} />
    </>
}