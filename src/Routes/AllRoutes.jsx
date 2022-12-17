import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

export default () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<Products />} />
        <Route path="/product" element={<ProductDetails />} />
    </Routes>

}