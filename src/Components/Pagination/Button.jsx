import React from 'react'
import { Box, Center } from '@chakra-ui/react'

const Button = ({ children, disabled, onClick }) => {
    return (
        <Box
            as='button'
            height='38px'
            w="38px"
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='8px'
            borderRadius='4px'
            fontSize='14px'
            fontWeight='semibold'
            bg='#edf2f7'
            borderColor='#edf2f7'
            color='#4b4f56'
            disabled={disabled}
            onClick={() => onClick()}
            _disabled={{
                pointerEvents:"none",
                bg:"#f7f7f7",
                color:"#ababab"
            }}
            _hover={{ bg: '#e2e8f0' }}
            _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _focus={{
                boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
        >
            <Center>
                {children}
            </Center>
        </Box>
    )
}

export default Button