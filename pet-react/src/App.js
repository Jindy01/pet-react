import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts"
import Navbar from "./Components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./Components/AppRouter";
import {AuthContext} from "./context";

//  Исправить ошибку перехода на error потому что при переходе не перекидывает на логин ...
//     Исправить страницу с /error отображаештся как начальное окно и окно после логина ...

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
       if (localStorage.getItem('auth')) {
           setIsAuth(true)
       }
       setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

//      Доделать взаимодействия между постами и вывод их на экран ...
        // 2:27 min


//      Приостановлено из-за библеотеки "react-router-dom"

export default App;