import {
    Card,
    HStack,
    VStack,
    Image,
    CardBody,
    Text,
    Heading
} from "@chakra-ui/react";

export default ({ image, name, subtitle, offerPrice, actualPrice }) => {
    return (
        <>
            <Card bg={"white"} w={"fit-content"} m={10} shadow={"md"}>
                <CardBody>
                    <Image
                        alt=""
                        src={image}
                    />
                    <VStack>
                        <Heading size="xs">{name}</Heading>
                        <Text fontSize="xs">
                            Tea Tree Oil &amp; Vitamin E-infused Face Wash
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
        </>
    );
};
