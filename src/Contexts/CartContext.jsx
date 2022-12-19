import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();


function CartContextProvider({ children }) {
    const [itemCount, setItemCount] = useState(0);

    const updateItemCount = () => {
        setItemCount(itemCount + 1)
    }

    return <CartContext.Provider value={{ itemCount, updateItemCount }}>{children}</CartContext.Provider>
}

export default CartContextProvider;