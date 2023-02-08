import React from 'react'
import { Center } from '@chakra-ui/react'

const Cell = ({ currPage, pageNo }) => {
    return (
        <Center w='40px' h='40px' outline={currPage === pageNo ? "1px solid #dbab4d" : ""} border="1px solid #e4e4e4">
            {pageNo}
        </Center>
    )
}

export default Cell