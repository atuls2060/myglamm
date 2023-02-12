import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const items = JSON.parse(localStorage.getItem("cartItems")) || []
function CartContextProvider({ children }) {
    const [itemCount, setItemCount] = useState(items.length);
    const [cartItems, setCartItems] = useState(items)
    const [total, setTotal] = useState(0)

    const reloadCartItems = ()=>{
        const items = JSON.parse(localStorage.getItem("cartItems")) || []
        setCartItems(items)
        setItemCount(items.length)
    }

    const addToCart = (product) => {
        let updatedData = [...cartItems, { ...product, quantity: 1 }];

        setItemCount(itemCount + 1)
        setCartItems(updatedData)
        saveToStorage(updatedData)
        makeTotal(updatedData)
    }
    const removeFromCart = (id) => {
        let updatedData = cartItems.filter((elm, index) => index !== id)
        setCartItems(updatedData)
        saveToStorage(updatedData)
        makeTotal(updatedData)
    }

    const changeQty = (id, qty) => {
        let updatedData = cartItems.map((elm, index) => index == id ? { ...elm, quantity: qty } : elm)
        setCartItems(updatedData)
        makeTotal(updatedData)
        saveToStorage(updatedData)
    }

    const makeTotal = (data) => {
        let bill = 0;
        bill = data.reduce((acc, elm) => {
            return acc + (parseFloat(elm.offerPrice) * elm.quantity)
        }, 0)
        setTotal(bill)
    }

    const saveToStorage = (products)=>{
        localStorage.setItem("cartItems",JSON.stringify(products))
    }

    return <CartContext.Provider value={{ itemCount, cartItems, addToCart, removeFromCart, total, changeQty,reloadCartItems }}>{children}</CartContext.Provider>
}

export default CartContextProvider;