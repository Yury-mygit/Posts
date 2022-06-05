import React, {useContext} from 'react';
import RcInput from "../Components/UI/Inputs/RcInput";
import RcButton from "../Components/UI/Buttons/RcButton";
import {AuthContext} from "../Context/context";

const LoginPage = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const loginButtonPressed = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', "true")
    }

    return (
        <div>
            <h1>Страница для логин</h1>
            <form onSubmit={loginButtonPressed}>
                <RcInput type='text' placeholder='введите логин'/>
                <RcInput type='password' placeholder='Введите пароль'  />

                <RcButton> Войти </RcButton>
            </form>
        </div>

    );
};

export default LoginPage;