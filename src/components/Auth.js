import React, {createContext, useState} from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [user, setUser] = useState("");
    let navigate = useNavigate();

    function data(token, image){
        
            setUser({
                token: token,
                image: image
            })
        
        navigate("/hoje");
    }

    return (
        <AuthContext.Provider value={{data, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;