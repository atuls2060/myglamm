import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products";
import Home from "./Home";
import Login from "./Login";
import ProductDetails from "./ProductDetails";

export default () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<Products />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
    </Routes>

}