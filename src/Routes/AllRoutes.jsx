import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Admin from "../Admin/Pages/Admin";
import ProductsList from "../Admin/Pages/ProductsList";
import Sales from "../Admin/Pages/Sales";
import { Box } from "@chakra-ui/react";
import Cart from "./Cart";
import NavbarPage from "./NavbarPage";

export default () => {
    return <Box>
        <Routes>
            <Route path="/" element={<NavbarPage><Home /></NavbarPage>} />
            <Route path="/makeup" element={<NavbarPage><Products /></NavbarPage>} />
            <Route path="/products/:id" element={<NavbarPage><ProductDetails /></NavbarPage>} />
            <Route exact path="/admin" element={<Admin><Sales /></Admin>} />
            <Route path="/admin/products" element={<Admin><ProductsList /></Admin>} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </Box>
}