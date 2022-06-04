import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import RcButton from "../Buttons/RcButton";
import {AuthContext} from "../../context";


const Navbar = () => {

    console.log('Navbar is working')

    const{isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }


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
};

export default Navbar;