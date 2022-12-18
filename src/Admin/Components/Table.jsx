import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Tfoot, Td, Icon, IconButton } from "@chakra-ui/react"
import { BiEdit } from "react-icons/bi"

export default () => {
    return <TableContainer width="90%">
        <Table variant='striped' size="md">
            <Thead>
                <Tr>
                    <Th>Order ID</Th>
                    <Th>Product ID</Th>
                    <Th>Customer ID</Th>
                    <Th>Unit Price</Th>
                    <Th>Payment Status</Th>
                    <Th>Delivery Status</Th>
                    <Th>Actions</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>946549</Td>
                    <Td>9889459</Td>
                    <Td>9889459</Td>
                    <Td>500</Td>
                    <Td>COD</Td>
                    <Td>Not Delivered</Td>
                    <Td><BiEdit /></Td>
                </Tr>
                <Tr>
                    <Td>946549</Td>
                    <Td>9889459</Td>
                    <Td>9889459</Td>
                    <Td>500</Td>
                    <Td>COD</Td>
                    <Td>Not Delivered</Td>
                    <Td><BiEdit /></Td>
                </Tr>
                <Tr>
                    <Td>946549</Td>
                    <Td>9889459</Td>
                    <Td>9889459</Td>
                    <Td>500</Td>
                    <Td>COD</Td>
                    <Td>Not Delivered</Td>
                    <Td><BiEdit /></Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
}