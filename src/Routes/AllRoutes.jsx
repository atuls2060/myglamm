import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products";
import Home from "./Home";

export default () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<Products />} />
    </Routes>

}