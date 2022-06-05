import React, {useContext} from 'react';
import {AuthContext} from "../Context/context";
import {Link} from "react-router-dom";

const Homepage = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        <div>
            <h1> HOME PAGE </h1>
            {isAuth
                ?   <Link to="/posts"> Посты </Link>
                :   <p> Здравсвуйте, вы находитесь на
                        главной странице приложения.
                        Для работы с постами авторизуйтесь
                    </p>
            }
        </div>
        );
};

export default Homepage;