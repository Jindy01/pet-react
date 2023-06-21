import React, {useContext} from 'react';
import MyInput  from '../Components/UI/input/MyInput'
import MyButton from "../Components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault()
        setIsAuth(true);
    }

    return (
        <div>
           <h1>Странница для логина</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Введите логин'/>
                <MyInput type='password' placeholder='Введите пароль'/>
                <MyButton> Войти </MyButton>
            </form>
        </div>
    );
};

export default Login;