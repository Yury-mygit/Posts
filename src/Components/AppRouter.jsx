import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes,publicRoutes} from "./router/index";
import Homepage from "../pages/Homepage";

import Login from "../pages/Login";
import {AuthContext} from "./context";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {

    console.log('AppRouter is working')

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
               <Route path ="*" element={ <Login/> } />
           </Routes>
       );


   }else{

       return (
           <Routes>
               <Route index element={<Homepage/>} />
               {publicRoutes.map(route=>
                   <Route key={route.id} exact path={route.path} element={ React.createElement(route.element) }/>
               )}
               <Route path ="*" element={ <Login/> } />
           </Routes>
       )


   }

    // return (
    //     <Routes>
    //         <Route index element={<Homepage/>} />
    //
    //         {/*<Route path="/about" element={<About/>} />*/}
    //         {/*<Route exact path ="/posts" element={ <Posts/> } />*/}
    //         {/*/!*<Route exact path ={routes[1].path} element={ routes[1].element()}  />*!/*/}
    //         {/*/!*<Route exact path ="/posts/:id" element={ <PostIdPage/> } />*!/*/}
    //         {/*/!*<Route exact path ={routes[2].path} element={ routes[2].element } />*!/*/}
    //         {/*/!*<Route exact path ={routes[2].path} element={ routes[2].element } />*!/*/}
    //         {/*<Route exact path ={routes[2].path} element={ React.createElement(routes[2].element) } />*/}
    //
    //         (isAuth
    //             ? <Route index element={<Homepage/>} />
    //               {privateRoutes.map(route=>
    //                     <Route key={route.id} exact path={route.path} element={ React.createElement(route.element) }/>
    //               )}
    //               <Route path ="*" element={ <Login/> } />
    //
    //
    //             : <Route index element={<Homepage/>} />
    //               {publicRoutes.map(route=>
    //                   <Route key={route.id} exact path={route.path} element={ React.createElement(route.element) }/>
    //               )}
    //               <Route path ="*" element={ <Page404/> } />
    //         )
    //
    //
    //
    //
    //     </Routes>
    // );
};

export default AppRouter;