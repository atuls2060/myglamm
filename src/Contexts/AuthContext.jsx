import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();


function AuthContextProvider({ children }) {
    const [openModal, setOpenModal] = useState(false);
    const [authState, setAuthState] = useState({
        isAuth: false,
        token: null
    })

    const loginUser = (token) => {
        setAuthState({
            isAuth: true,
            token
        })
    }
    const logoutUser = () => {
        setAuthState({
            isAuth: false,
            token: null
        })
    }

    const toggleModal = ()=>{
        setOpenModal(!openModal)
        console.log("modal changed")
    }

    return <AuthContext.Provider value={{ authState, loginUser, logoutUser,openModal,toggleModal }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;