import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products";
import Home from "./Home";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import Admin from "../Admin/Pages/Admin";
import ProductsList from "../Admin/Pages/ProductsList";
import Sales from "../Admin/Pages/Sales";
import { Box } from "@chakra-ui/react";

export default () => {
    return <Box mt={"153px"}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/makeup" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/admin" element={<Admin><Sales /></Admin>} />
            <Route path="/admin/products" element={<Admin><ProductsList /></Admin>} />
        </Routes>
    </Box>
}