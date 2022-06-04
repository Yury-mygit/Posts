import React, {useContext} from 'react';
import RcInput from "../Components/UI/Inputs/RcInput";
import RcButton from "../Components/UI/Buttons/RcButton";
import {AuthContext} from "../Components/context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', "true")
    }

    return (
        <div>
            <h1>Страница для логин</h1>
            <form onSubmit={login}>
                <RcInput type='text' placeholder='введите логин'/>
                <RcInput type='password' placeholder='Введите пароль'  />

                <RcButton> Войти </RcButton>
            </form>
        </div>
    );
};

export default Login;