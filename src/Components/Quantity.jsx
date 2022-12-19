import { NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper } from "@chakra-ui/react"
export default () => {
    return <>
        <NumberInput focusBorderColor="black"  maxW="60px" defaultValue={1} min={1} max={10}>
            <NumberInputField  backgroundColor="#F7F7F7" borderRadius={0}  textAlign="center" />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput></>
}