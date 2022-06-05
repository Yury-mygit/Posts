import React, {useEffect, useState} from "react";
import "./App.scss"
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from "./Router/AppRouter";
import {AuthContext} from "./Context/context";

function App() {

    const [isAuth, setIsAuth] =useState(false)
    const [isLoading, setLoading] =useState(true)

    useEffect(()=>{
        if (localStorage.getItem("auth")) {
            setIsAuth(true)
        }
        setLoading(false);
    },[])

   return(
       <AuthContext.Provider value={{
           isAuth: isAuth,
           setIsAuth: setIsAuth,
           isLoading,
           setLoading
       }}>
           <BrowserRouter>
                <Navbar/>
                <AppRouter/>
           </BrowserRouter>
       </AuthContext.Provider>
   )
}

export default App;

