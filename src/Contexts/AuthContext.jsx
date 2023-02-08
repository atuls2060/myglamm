import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();


function AuthContextProvider({ children }) {
    const [openModal, setOpenModal] = useState(false);
  

    const toggleModal = ()=>{
        setOpenModal(!openModal)
    }

    return <AuthContext.Provider value={{openModal,toggleModal }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;