import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Admin from "./Backend/Backend";
import ProductsList from "../Admin/Pages/ProductsList";
import Sales from "../Admin/Pages/Sales";
import { Box } from "@chakra-ui/react";
import Cart from "./Cart";
import NavbarPage from "./NavbarPage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Checkout from "./Checkout";
import Orders from "./Orders";

export default () => {
    return <Box>
        <Routes>
            <Route path="/" element={<NavbarPage><Home /></NavbarPage>} />
            <Route path="/products" element={<NavbarPage><Products /></NavbarPage>} />
            <Route path="/products/:id" element={<NavbarPage><ProductDetails /></NavbarPage>} />
            <Route path="/admin/products" element={<Admin><ProductsList /></Admin>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
    </Box>
}