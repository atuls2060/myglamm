import {
    Card,
    HStack,
    Image,
    CardBody,
    Text,
    Heading,
    Grid
} from "@chakra-ui/react";
import Styles from "./productcard2.module.css"

export default ({ image, name, subtitle, offerPrice, actualPrice }) => {
    return (
        <>
            <Card className={Styles.card} bg={"white"} w={"fit-content"} borderRadius={"none"} border="1px solid #E0E0E0" shadow={"none"}>
                <CardBody>
                    <Image
                        className={Styles.image}
                        alt=""
                        src={image}
                    />
                    <Grid mt={12} templateRows="repeat(3,1fr)" textAlign={"start"}>
                        <Heading fontSize={"lg"} lineHeight="30px">{name}</Heading>
                        <Text mt={1} fontSize="lg">
                            {
                                subtitle
                            }
                        </Text>
                        <HStack mt={7}>
                            <Text fontWeight="400" fontSize="3xl">
                                {
                                    offerPrice
                                }
                            </Text>
                            <del>{
                                actualPrice}
                            </del>
                        </HStack>
                    </Grid>
                </CardBody>
            </Card>
        </>
    );
};
