import {
    Card,
    HStack,
    VStack,
    Image,
    CardBody,
    Text,
    Heading
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default ({ image, name, subtitle, offerPrice, actualPrice,isNavBarCard=false ,id}) => {
    let style = {
       
    }
    if(isNavBarCard){
        style = {
            w:"200px", m:10 ,shadow:0,border:"1px solid #E0E0E0", borderRadius:"none"
        }
    }
    return (
        <Link to={`/products/${id}`}>
            <Card bg={"white"} w={"fit-content"} m={10} shadow={"md"} {...style} style={{cursor:"pointer"}}>
                <CardBody>
                    <Image
                        alt=""
                        src={image}
                    />
                    <VStack>
                        <Heading noOfLines={isNavBarCard && 1} size="xs">{name}</Heading>
                        <Text noOfLines={isNavBarCard && 1} fontSize="xs">
                           {
                            subtitle
                           }
                        </Text>
                        <HStack>
                            <Text fontWeight="bold" fontSize="xl">
                                {
                                    offerPrice
                                }
                            </Text>
                            <del>{
                                actualPrice}
                            </del>
                        </HStack>
                    </VStack>
                </CardBody>
            </Card>
        </Link>
    );
};
