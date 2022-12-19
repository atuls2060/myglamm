import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();


function CartContextProvider({ children }) {
    const [itemCount, setItemCount] = useState(0);
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (product) => {
        let updatedData = [...cartItems, { ...product, quantity: 1 }];

        setItemCount(itemCount + 1)
        setCartItems(updatedData)
        makeTotal(updatedData)
    }
    const removeFromCart = (id) => {
        let updatedData = cartItems.filter((elm, index) => index !== id)
        setCartItems(updatedData)
        makeTotal(updatedData)
    }

    const changeQty = (id, qty) => {
        let updatedData = cartItems.map((elm, index) => index == id ? { ...elm, quantity: qty } : elm)
        setCartItems(updatedData)
        makeTotal(updatedData)
    }

    const makeTotal = (data) => {
        let bill = 0;
        bill = data.reduce((acc, elm) => {
            return acc + (parseFloat(elm.offerPrice) * elm.quantity)
        }, 0)
        setTotal(bill)
    }

    return <CartContext.Provider value={{ itemCount, cartItems, addToCart, removeFromCart, total, changeQty }}>{children}</CartContext.Provider>
}

export default CartContextProvider;