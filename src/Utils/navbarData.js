import { getProductsbyCategory } from "./database"

let Links = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Makeup",
        path: "/products?category=makeup",
        submenu: [
            {
                submenu: [
                    "LIPS",
                    "Lipstick",
                    "Crayon Lipstick",
                    "Liquid Lipstick",
                    "Hi-Shine Lipstick",
                    "Matte Lipstick",
                    "Lip Gloss",
                    "Lip Liner",
                    "Lip Balm",
                    "Lip Glitter",
                    "Lip Stain",
                    "Lipstick Set",
                    "Lip Kit",
                    "Find Your Lipstick"
                ]
            },
            {
                submenu: [
                    "Face",
                    "Lipstick",
                    "Crayon Lipstick",
                    "Liquid Lipstick",
                    "Hi-Shine Lipstick",
                    "Matte Lipstick",
                    "Lip Gloss",
                    "Lip Liner",
                    "Lip Balm",
                    "Lip Glitter",
                    "Lip Stain",
                    "Lipstick Set",
                    "Lip Kit",
                    "Find Your Lipstick"
                ]
            }
        ],
    },
    {
        label: "Hair Care",
        path: "#",
        submenu: [
            {
                submenu: [
                    "HAIR CARE",
                    "Shampoo",
                    "Conditioner",
                    "Hair Oil",
                    "Serum",
                    "Hair Mask",
                    "Combos",
                ]
            }
        ],
        products:[
            {
                image: "https://files.myglamm.com/site-images/800x800/Onion-Nourishment---Shampoo-&-Conditioner_1.jpg",
                name: "Onion Nourishment - Shampoo & Conditioner Combo - Hair Care",
                subtitle: "Our Shampoo and Conditioner combo is uniquely formulated with all-natural, superfood ingredients, handpicked for their efficacy.",
                offerPrice: "₹388",
                actualPrice: "590"
            },
            {
                image: "https://files.myglamm.com/site-images/800x800/Artboard-1-(3).jpg",
                name: "Manish Malhotra Soft Matte Lipstick - Poppy Pink",
                subtitle: "Hydrating Long-wear Lipstick",
                offerPrice: "₹475",
                actualPrice: "₹950"
            },
            {
                image: "https://files.myglamm.com/site-images/800x800/Artboard-1_27.jpg",
                name: "MyGlamm WIPEOUT Germ Killing Face Wash",
                subtitle: "Tea Tree Oil & Vitamin E-infused Face Wash",
                offerPrice: "₹89",
                actualPrice: "₹119"
            },
        ]
    },
    {
        label: "Skin Care",
        path: "#",
        submenu: [
            {
                submenu: [
                    "Moisturizer",
                    "Night Cream",
                    "Eye Cream",
                    "Body Lotion",
                    "Serum",
                    "Sunscreen",
                    "Skincare Kits",
                    "CLEANSING PRODUCTS",
                    "Cleanser",
                    "Face Wash",
                    "Exfoliator & Scrub",
                    "MASK",
                    "Sheet Mask",
                    "Face Pack",
                ]
            }
        ],
        products:[
            {
                image: "https://files.myglamm.com/site-images/800x800/17-Amla-Moisturising-Gel-Post-1-01.jpg",
                name: "MANISH MALHOTRA AMLA MOISTURISING GEL",
                subtitle: "Our Shampoo and Conditioner combo is uniquely formulated with all-natural, superfood ingredients, handpicked for their efficacy.",
                offerPrice: "₹756",
                actualPrice: "945"
            },
            {
                image: "https://files.myglamm.com/site-images/800x800/SN4.png",
                name: "POPXO SUN SOOTHER AFTER SUN LOTION 30G",
                subtitle: "Lotion For Sun-bathers",
                offerPrice: "₹226",
                actualPrice: "349"
            },
            {
                image: "https://files.myglamm.com/site-images/800x800/Blueberry---Strawberry-Face-Cream-1_1.jpg",
                name: "MYGLAMM SUPERFOODS BLUEBERRY & STRAWBERRY FACE CREAM 50G",
                subtitle: "Brightening & hydrating face cream with natural extracts from natural superfoods",
                offerPrice: "₹239",
                actualPrice: "399"
            },
        ]
    }
    ,
    {
        label: "Sanitizing Care",
        path: "#",
        submenu: [
            {
                submenu: [
                    "SANITIZING CARE",
                    "Sanitizing Wipes",
                    "Hand Sanitizer",
                    "Sanitizing Kits",
                    "Sanitizing Spray",
                ]
            }
        ]
        ,
        products:[
            {
                image: "https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg",
                name: "GAME OVER GERMS",
                subtitle: "10 Sanitizing Wipes + 10 Sanitizing Towels + 1 Moisturizing Hand Sanitizer",
                offerPrice: "₹267",
                actualPrice: "412"
            },
            {
                image: "https://files.myglamm.com/site-images/400x400/ULTIMATE-GERM-DEFENCE_5.jpg",
                name: "ULTIMATE GERM DEFENCE",
                subtitle: "35 Sanitizing Wipes + 30 Sanitizing Towels + 4 Moisturizing Hand Sanitizers",
                offerPrice: "₹659",
                actualPrice: "1330"
            },
            {
                image: "https://files.myglamm.com/site-images/400x400/Germ-Shield_2.jpg",
                name: "MYGLAMM SUPERFOODS BLUEBERRY & STRAWBERRY FACE CREAM 50G",
                subtitle: "Brightening & hydrating face cream with natural extracts from natural superfoods",
                offerPrice: "₹259",
                actualPrice: "370"
            },
        ]
    },
    {
        label: "Collection",
        path: "#",
        submenu: [
            {
                submenu: [
                   "SHOP BY COLLECTION",
                   "MyGlamm",
                   "SUPERFOODS",
                   "Treat Love Care",
                   "Clean Beauty",
                   "POPxo",
                   "WIPEOUT",
                   "GLOW Iridescent Brightening Skincare",
                   "Manish Malhotra",
                   "YOUTHfull",
                   "LIT Collection",
                   "POSE",
                   "K.Play",
                   "Just Dropped",
                ]
            }
        ]
        ,
        products:[
           
        ]
    }
    ,

    {
        label: "Rewards",
        path: "#",
    },
    {
        label: "Collection",
        path: "#",
    },
    {
        label: "LYD Studio",
        path: "#",
    },
    {
        label: "Offers",
        path: "#",
    }
]
export default Links