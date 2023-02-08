import {  Card, Container, Flex, Heading, Img, Box, Center, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import ProfileDropDown from "../Components/ProfileDropDown"
import { getOrders } from "../Utils/database";
import OrderItem from './OrderItem'


export default () => {
  const [orderList, setOrderList] = useState([])
  const navigate = useNavigate()
  const getOrder = async () => {
    try {
      const userId = getAuth().currentUser.uid
      const data = await getOrders(userId)
      setOrderList(data)
    } catch (err) {

    }
  }

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        getOrder()
      } else {
        navigate("/")
      }
    })
  }, [])


  return <>
    <Card>
      <Flex p={3} justifyContent={"space-around"}>
        <Link to={"/"}><Img maxHeight="50px" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="logo" /></Link>
        <ProfileDropDown />
      </Flex>
    </Card>
    <Container maxW="80%">
      <Heading mt={10} mb={10} size="lg">All Orders</Heading>
      <Box p="20px" border="1px solid #e4e4e4" minHeight="85vh" bg="white">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>OrderId.</Th>
              <Th>ProductId</Th>
              <Th>Price</Th>
              <Th>Qty</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              orderList.map((order, index) => {
                return <OrderItem id={order.id} index={index + 1} {...order} />
              })
            }
          </Tbody>
        </Table>
        <Center mt="20px">

        </Center>
      </Box>
    </Container>
  </>
}