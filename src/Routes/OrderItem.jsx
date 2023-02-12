import React from 'react'
import { Image, Badge, Td, Tr, IconButton, ButtonGroup } from '@chakra-ui/react'

const OrderItem = ({ imgUrl, orderId, userId, productId, price, qty, delivered }) => {
    return (
        <Tr p="10px" border="1px solid #e4e4e4">
            <Td>
                <Image src={imgUrl} alt="product image" width="55px" height="50px"/>
            </Td>
            <Td>{orderId}</Td>
            <Td>{productId}</Td>
            <Td>₹ {price}</Td>
            <Td>{qty}</Td>
            <Td>
                <Badge colorScheme={delivered ? "green" : "red"}>{delivered ? "Delivered" : "Pending"}</Badge>
            </Td>
          
        </Tr>
    )
}

export default OrderItem