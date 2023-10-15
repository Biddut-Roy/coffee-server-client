import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase";

export const authContext = createContext(null)

const Authprovider = ({children}) => {
    const [user , setUser ]= useState()
    const [loader , setLoader]=useState(true)


    const signUp = (email , password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    
    const signIn = (email , password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const userinfo = {
        user ,
        signUp,
        loader,
        signIn,

    }
    return (
        <authContext.Provider value={userinfo} >
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;