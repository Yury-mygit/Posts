import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes,publicRoutes} from "./router";
import Homepage from "../pages/Homepage";
import {AuthContext} from "../Context/context";
import Loader from "../Components/UI/Loader/Loader";

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading){
        return <Loader></Loader>
    }

   if ( isAuth === true  ) {
       return (
           <Routes>
               <Route index element={<Homepage/>} />
               {privateRoutes.map(route=>
                   <Route key={route.id} exact path={route.path} element={ React.createElement(route.element) }/>
               )}
               <Route path ="*" element={ <Homepage/> } />
           </Routes>
       );


   }else if ( isAuth === false  ) {

       return (
           <Routes>
               <Route index element={<Homepage/>} />
               {publicRoutes.map(route=>
                   <Route key={route.id} exact path={route.path} element={ React.createElement(route.element) }/>
               )}
               <Route path ="*" element={ <Homepage/>  } />
           </Routes>
       )
   }
};

export default AppRouter;