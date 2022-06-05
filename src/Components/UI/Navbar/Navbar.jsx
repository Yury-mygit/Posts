import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import RcButton from "../Buttons/RcButton";
import {AuthContext} from "../../../Context/context";


const Navbar = () => {

    const{isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }


    if (isAuth===false){
        return (
            <div className="navbar">

                <div className="navbar__links" >
                    <Link to="/"> Главная</Link>
                    <Link to="/about"> О нас</Link>
                    <Link to="/login"> Войти </Link>
                </div>

            </div>
        );
    } else if ( isAuth === true ){

        return (
            <div className="navbar">
                <RcButton onClick={logout}>
                    Выйти
                </RcButton>
                <div className="navbar__links" >
                    <Link to="/"> Главная</Link>
                    <Link to="/about"> О нас</Link>
                    <Link to="/posts"> Посты </Link>
                </div>

            </div>
        );
    }
};

export default Navbar;