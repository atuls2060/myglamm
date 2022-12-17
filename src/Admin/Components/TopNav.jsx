import { Search2Icon } from "@chakra-ui/icons"
import {
    Card, Heading,
    InputGroup,
    Input,
    Image,
    Grid,
    InputRightAddon
} from "@chakra-ui/react"

export default () => {
    return <Card w={"100%"} borderRadius="0">
        <Grid p="7px" gridTemplateColumns="repeat(7,1fr)" alignItems={"center"}>
            <Heading gridColumn="1/3" size={"lg"}>Dashbaord</Heading>
            <Card gridColumn="3/6">
                <InputGroup size={"lg"}>
                    <Input type='text' placeholder='Search' />
                    <InputRightAddon
                        cursor="pointer"
                        size='lg'
                        children={<Search2Icon color='gray.300' />}
                    />
                </InputGroup>
            </Card>
            <Card gridColumn="7" p="10px">
                <Image
                    borderRadius='full'
                    boxSize='25px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
            </Card>

        </Grid>
    </Card>
}