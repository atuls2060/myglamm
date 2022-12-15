import { Container, Img } from "@chakra-ui/react"
import Carousel from "../Components/Carousel/Carousel"
import Offers from "../Components/Offers"


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
const products = [
    {
        image: "https://files.myglamm.com/site-images/400x400/OTP1.jpg",
        name: "MyGlamm LIT Liquid Matte Lipstick - OTP",
        subtitle: "Moringa Oil Enriched Matte Lipstick",
        offerPrice: "₹395",
        actualPrice: ""
    },
    {
        image: "https://files.myglamm.com/site-images/400x400/PPY1_1.jpg",
        name: "Manish Malhotra Soft Matte Lipstick - Poppy Pink",
        subtitle: "Hydrating Long-wear Lipstick",
        offerPrice: "₹475",
        actualPrice: "₹950"
    },
    {
        image: "https://files.myglamm.com/site-images/400x400/Facewash_3.jpg",
        name: "MyGlamm WIPEOUT Germ Killing Face Wash",
        subtitle: "Tea Tree Oil & Vitamin E-infused Face Wash",
        offerPrice: "₹89",
        actualPrice: "₹119"
    },
    {
        image: "https://files.myglamm.com/site-images/400x400/MVS1_1.jpg",
        name: "Manish Malhotra Hi-Shine Lipstick - Mauve Struck",
        subtitle: "Lightweight, Long-wear Lipsticks",
        offerPrice: "₹522",
        actualPrice: "₹950"
    },
    {
        image: "https://files.myglamm.com/site-images/400x400/MHML-(1).jpg",
        name: "MyGlamm LIT Creamy Matte Lipstick - Manhattan",
        subtitle: "Precision Perfect Matte Slimstick",
        offerPrice: "₹417",
        actualPrice: "₹595"
    },
    {
        image: "https://files.myglamm.com/site-images/400x400/Body-wash_4.jpg",
        name: "MyGlamm WIPEOUT Germ Killing Body Wash",
        subtitle: "Tea Tree Oil-infused Skin-regenerating Body Wash",
        offerPrice: "₹149",
        actualPrice: "₹199"
    },
    {
        image: "https://files.myglamm.com/site-images/400x400/INDG1.jpg",
        name: "MyGlamm SUPERFOODS Kajal - Indigo - 0.35g",
        subtitle: "Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
        offerPrice: "₹280",
        actualPrice: "₹395"
    },
    {
        image: "https://files.myglamm.com/site-images/400x400/Rare-(1).jpg",
        name: "MyGlamm LIT Velvet Matte Liquid Lipstick - Rare",
        subtitle: "Hydrating, Velvet Matte Liquid Lipcolour",
        offerPrice: "₹256",
        actualPrice: "₹395"
    },
    {
        image: "https://files.myglamm.com/site-images/400x400/ENV1.jpg",
        name: "Manish Malhotra Liquid Matte Lipstick - Envy Me",
        subtitle: "Long-stay Velvet Matte Lip Colour",
        offerPrice: "₹796",
        actualPrice: "₹995"
    }

]

export default () => {
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