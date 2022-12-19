import { NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper } from "@chakra-ui/react"
export default ({changeQty,defaultValue}) => {

    return <>
        <NumberInput onChange={(val)=>changeQty(val)} focusBorderColor="black"  maxW="60px" defaultValue={defaultValue} min={1} max={10}>
            <NumberInputField  backgroundColor="#F7F7F7" borderRadius={0}  textAlign="center" />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput></>
}