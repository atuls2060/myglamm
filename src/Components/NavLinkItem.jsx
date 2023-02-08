import React from 'react'
import { Image, VStack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const NavLinkItem = ({ path, image, label }) => {
    const navigate = useNavigate();
    return (
        <VStack onClick={() => navigate(path)} minW="fit-content">
            <Image src={image} alt={label} />
            <Text fontSize="12px" >{label}</Text>
        </VStack>
    )
}

export default NavLinkItem